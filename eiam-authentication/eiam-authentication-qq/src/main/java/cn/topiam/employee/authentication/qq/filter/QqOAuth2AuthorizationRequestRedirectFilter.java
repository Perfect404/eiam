/*
 * eiam-authentication-qq - Employee Identity and Access Management Program
 * Copyright © 2020-2022 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.authentication.qq.filter;

import java.io.IOException;
import java.util.Base64;
import java.util.Map;
import java.util.Optional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpMethod;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.keygen.Base64StringKeyGenerator;
import org.springframework.security.crypto.keygen.StringKeyGenerator;
import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository;
import org.springframework.security.oauth2.client.web.HttpSessionOAuth2AuthorizationRequestRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.oauth2.core.endpoint.OAuth2ParameterNames;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.util.Assert;
import org.springframework.web.filter.OncePerRequestFilter;

import com.alibaba.fastjson2.JSONObject;

import cn.topiam.employee.authentication.qq.QqIdpOauthConfig;
import cn.topiam.employee.common.entity.authentication.IdentityProviderEntity;
import cn.topiam.employee.common.repository.authentication.IdentityProviderRepository;
import static cn.topiam.employee.authentication.qq.filter.QqOAuth2LoginAuthenticationFilter.getLoginUrl;
import static cn.topiam.employee.common.enums.IdentityProviderType.QQ;
import static cn.topiam.employee.portal.idp.qq.constant.QqAuthenticationConstants.URL_AUTHORIZE;

/**
 * 微信扫码登录请求重定向过滤器
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/6/20 20:22
 */
@SuppressWarnings("ALL")
public class QqOAuth2AuthorizationRequestRedirectFilter extends OncePerRequestFilter {

    private final Logger                                                     logger                         = LoggerFactory
        .getLogger(QqOAuth2AuthorizationRequestRedirectFilter.class);
    /**
     * 提供商ID
     */
    public static final String                                               PROVIDER_ID                    = "providerId";

    /**
     * AntPathRequestMatcher
     */
    public static final AntPathRequestMatcher                                QQ_REQUEST_MATCHER             = new AntPathRequestMatcher(
        QQ.getAuthorizationPathPrefix() + "/" + "{" + PROVIDER_ID + "}", HttpMethod.GET.name());

    /**
     * 重定向策略
     */
    private final RedirectStrategy                                           authorizationRedirectStrategy  = new DefaultRedirectStrategy();

    /**
     * 认证请求存储库
     */
    private final AuthorizationRequestRepository<OAuth2AuthorizationRequest> authorizationRequestRepository = new HttpSessionOAuth2AuthorizationRequestRepository();

    private static final StringKeyGenerator                                  DEFAULT_STATE_GENERATOR        = new Base64StringKeyGenerator(
        Base64.getUrlEncoder());
    private final IdentityProviderRepository                                 identityProviderRepository;

    public QqOAuth2AuthorizationRequestRedirectFilter(IdentityProviderRepository identityProviderRepository) {
        this.identityProviderRepository = identityProviderRepository;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws IOException,
                                                                      ServletException {
        RequestMatcher.MatchResult matcher = QQ_REQUEST_MATCHER.matcher(request);
        if (!matcher.isMatch()) {
            filterChain.doFilter(request, response);
            return;
        }
        Map<String, String> variables = matcher.getVariables();
        String providerId = variables.get(PROVIDER_ID);
        Optional<IdentityProviderEntity> optional = identityProviderRepository
            .findByIdAndEnabledIsTrue(Long.valueOf(providerId));
        if (optional.isEmpty()) {
            throw new NullPointerException("未查询到身份提供商信息");
        }
        IdentityProviderEntity entity = optional.get();
        QqIdpOauthConfig config = JSONObject.parseObject(entity.getConfig(),
            QqIdpOauthConfig.class);
        Assert.notNull(config, "QQ登录配置不能为空");
        //构建授权请求
        OAuth2AuthorizationRequest.Builder builder = OAuth2AuthorizationRequest.authorizationCode()
            .clientId(config.getAppId()).authorizationUri(URL_AUTHORIZE)
            .redirectUri(getLoginUrl(providerId)).state(DEFAULT_STATE_GENERATOR.generateKey());
        builder.parameters(parameters -> {
            parameters.put(OAuth2ParameterNames.RESPONSE_TYPE, OAuth2ParameterNames.CODE);
        });
        this.sendRedirectForAuthorization(request, response, builder.build());
    }

    private void sendRedirectForAuthorization(HttpServletRequest request,
                                              HttpServletResponse response,
                                              OAuth2AuthorizationRequest authorizationRequest) throws IOException {
        this.authorizationRequestRepository.saveAuthorizationRequest(authorizationRequest, request,
            response);
        this.authorizationRedirectStrategy.sendRedirect(request, response,
            authorizationRequest.getAuthorizationRequestUri());
    }

    public static RequestMatcher getRequestMatcher() {
        return QQ_REQUEST_MATCHER;
    }
}
