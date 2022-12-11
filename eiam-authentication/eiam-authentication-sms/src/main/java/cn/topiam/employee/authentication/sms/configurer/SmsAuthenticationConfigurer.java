/*
 * eiam-authentication-sms - Employee Identity and Access Management Program
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
package cn.topiam.employee.authentication.sms.configurer;

import org.springframework.security.config.annotation.web.HttpSecurityBuilder;
import org.springframework.security.config.annotation.web.configurers.AbstractAuthenticationFilterConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.util.Assert;

import cn.topiam.employee.authentication.sms.filter.SmsAuthenticationFilter;

/**
 * 认证配置
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2021/9/10 22:58
 */
public final class SmsAuthenticationConfigurer<H extends HttpSecurityBuilder<H>> extends
                                              AbstractAuthenticationFilterConfigurer<H, SmsAuthenticationConfigurer<H>, SmsAuthenticationFilter> {
    private final UserDetailsService userDetailsService;

    public SmsAuthenticationConfigurer(UserDetailsService userDetailsService) {
        Assert.notNull(userDetailsService, "userDetailsService must not be null");
        this.userDetailsService = userDetailsService;
    }

    /**
     * Create the {@link RequestMatcher} given a loginProcessingUrl
     *
     * @param loginProcessingUrl creates the {@link RequestMatcher} based upon the
     *                           loginProcessingUrl
     * @return the {@link RequestMatcher} to use based upon the loginProcessingUrl
     */
    @Override
    protected RequestMatcher createLoginProcessingUrlMatcher(String loginProcessingUrl) {
        return new AntPathRequestMatcher(loginProcessingUrl);
    }

    @Override
    public void init(H http) throws Exception {
        //SMS
        SmsAuthenticationFilter loginAuthenticationFilter = new SmsAuthenticationFilter(
            userDetailsService);
        this.setAuthenticationFilter(loginAuthenticationFilter);
        //处理URL
        super.loginProcessingUrl(SmsAuthenticationFilter.DEFAULT_FILTER_PROCESSES_URI);
        super.init(http);
    }

    @Override
    public void configure(H http) throws Exception {
        http.addFilterAfter(this.getAuthenticationFilter(),
            UsernamePasswordAuthenticationFilter.class);
        super.configure(http);
    }

    public RequestMatcher getRequestMatcher() {
        return SmsAuthenticationFilter.getRequestMatcher();
    }
}
