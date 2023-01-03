/*
 * eiam-protocol-oidc - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
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
package org.springframework.security.oauth2.server.authorization.config.annotation.web.configurers;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationService;
import org.springframework.security.oauth2.server.authorization.authentication.ClientSecretAuthenticationProvider;
import org.springframework.security.oauth2.server.authorization.authentication.JwtClientAssertionAuthenticationProvider;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2ClientAuthenticationToken;
import org.springframework.security.oauth2.server.authorization.authentication.PublicClientAuthenticationProvider;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.web.OAuth2ClientAuthenticationFilter;
import org.springframework.security.oauth2.server.authorization.web.authentication.*;
import org.springframework.security.web.authentication.AuthenticationConverter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.util.Assert;

import cn.topiam.employee.common.constants.ProtocolConstants;

/**
 * OAuth 2.0客户端身份验证的配置程序。
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/10/26 19:13
 */
@SuppressWarnings("AlibabaClassNamingShouldBeCamel")
public final class EiamOAuth2ClientAuthenticationConfigurer extends AbstractOAuth2Configurer {
    private RequestMatcher                          requestMatcher;
    private final List<AuthenticationConverter>     authenticationConverters         = new ArrayList<>();
    private Consumer<List<AuthenticationConverter>> authenticationConvertersConsumer = (authenticationConverters) -> {
                                                                                     };
    private final List<AuthenticationProvider>      authenticationProviders          = new ArrayList<>();
    private Consumer<List<AuthenticationProvider>>  authenticationProvidersConsumer  = (authenticationProviders) -> {
                                                                                     };
    private AuthenticationSuccessHandler            authenticationSuccessHandler;
    private AuthenticationFailureHandler            errorResponseHandler;

    /**
     * Restrict for internal use only.
     */
    EiamOAuth2ClientAuthenticationConfigurer(ObjectPostProcessor<Object> objectPostProcessor) {
        super(objectPostProcessor);
    }

    /**
     * Adds an {@link AuthenticationConverter} used when attempting to extract client credentials from {@link HttpServletRequest}
     * to an instance of {@link OAuth2ClientAuthenticationToken} used for authenticating the client.
     *
     * @param authenticationConverter an {@link AuthenticationConverter} used when attempting to extract client credentials from {@link HttpServletRequest}
     * @return the {@link OAuth2ClientAuthenticationConfigurer} for further configuration
     */
    public EiamOAuth2ClientAuthenticationConfigurer authenticationConverter(AuthenticationConverter authenticationConverter) {
        Assert.notNull(authenticationConverter, "authenticationConverter cannot be null");
        this.authenticationConverters.add(authenticationConverter);
        return this;
    }

    /**
     * Sets the {@code Consumer} providing access to the {@code List} of default
     * and (optionally) added {@link #authenticationConverter(AuthenticationConverter) AuthenticationConverter}'s
     * allowing the ability to add, remove, or customize a specific {@link AuthenticationConverter}.
     *
     * @param authenticationConvertersConsumer the {@code Consumer} providing access to the {@code List} of default and (optionally) added {@link AuthenticationConverter}'s
     * @return the {@link OAuth2ClientAuthenticationConfigurer} for further configuration
     * @since 0.4.0
     */
    public EiamOAuth2ClientAuthenticationConfigurer authenticationConverters(Consumer<List<AuthenticationConverter>> authenticationConvertersConsumer) {
        Assert.notNull(authenticationConvertersConsumer,
            "authenticationConvertersConsumer cannot be null");
        this.authenticationConvertersConsumer = authenticationConvertersConsumer;
        return this;
    }

    /**
     * Adds an {@link AuthenticationProvider} used for authenticating an {@link OAuth2ClientAuthenticationToken}.
     *
     * @param authenticationProvider an {@link AuthenticationProvider} used for authenticating an {@link OAuth2ClientAuthenticationToken}
     * @return the {@link OAuth2ClientAuthenticationConfigurer} for further configuration
     */
    public EiamOAuth2ClientAuthenticationConfigurer authenticationProvider(AuthenticationProvider authenticationProvider) {
        Assert.notNull(authenticationProvider, "authenticationProvider cannot be null");
        this.authenticationProviders.add(authenticationProvider);
        return this;
    }

    /**
     * Sets the {@code Consumer} providing access to the {@code List} of default
     * and (optionally) added {@link #authenticationProvider(AuthenticationProvider) AuthenticationProvider}'s
     * allowing the ability to add, remove, or customize a specific {@link AuthenticationProvider}.
     *
     * @param authenticationProvidersConsumer the {@code Consumer} providing access to the {@code List} of default and (optionally) added {@link AuthenticationProvider}'s
     * @return the {@link OAuth2ClientAuthenticationConfigurer} for further configuration
     * @since 0.4.0
     */
    public EiamOAuth2ClientAuthenticationConfigurer authenticationProviders(Consumer<List<AuthenticationProvider>> authenticationProvidersConsumer) {
        Assert.notNull(authenticationProvidersConsumer,
            "authenticationProvidersConsumer cannot be null");
        this.authenticationProvidersConsumer = authenticationProvidersConsumer;
        return this;
    }

    /**
     * Sets the {@link AuthenticationSuccessHandler} used for handling a successful client authentication
     * and associating the {@link OAuth2ClientAuthenticationToken} to the {@link SecurityContext}.
     *
     * @param authenticationSuccessHandler the {@link AuthenticationSuccessHandler} used for handling a successful client authentication
     * @return the {@link OAuth2ClientAuthenticationConfigurer} for further configuration
     */
    public EiamOAuth2ClientAuthenticationConfigurer authenticationSuccessHandler(AuthenticationSuccessHandler authenticationSuccessHandler) {
        this.authenticationSuccessHandler = authenticationSuccessHandler;
        return this;
    }

    /**
     * Sets the {@link AuthenticationFailureHandler} used for handling a failed client authentication
     * and returning the {@link OAuth2Error Error Response}.
     *
     * @param errorResponseHandler the {@link AuthenticationFailureHandler} used for handling a failed client authentication
     * @return the {@link OAuth2ClientAuthenticationConfigurer} for further configuration
     */
    public EiamOAuth2ClientAuthenticationConfigurer errorResponseHandler(AuthenticationFailureHandler errorResponseHandler) {
        this.errorResponseHandler = errorResponseHandler;
        return this;
    }

    @Override
    void init(HttpSecurity httpSecurity) {
        this.requestMatcher = new OrRequestMatcher(
            new AntPathRequestMatcher(ProtocolConstants.OidcEndpointConstants.TOKEN_ENDPOINT,
                HttpMethod.POST.name()),
            new AntPathRequestMatcher(
                ProtocolConstants.OidcEndpointConstants.TOKEN_INTROSPECTION_ENDPOINT,
                HttpMethod.POST.name()),
            new AntPathRequestMatcher(
                ProtocolConstants.OidcEndpointConstants.TOKEN_REVOCATION_ENDPOINT,
                HttpMethod.POST.name()));

        List<AuthenticationProvider> authenticationProviders = createDefaultAuthenticationProviders(
            httpSecurity);
        if (!this.authenticationProviders.isEmpty()) {
            authenticationProviders.addAll(0, this.authenticationProviders);
        }
        this.authenticationProvidersConsumer.accept(authenticationProviders);
        authenticationProviders.forEach(authenticationProvider -> httpSecurity
            .authenticationProvider(postProcess(authenticationProvider)));
    }

    @Override
    void configure(HttpSecurity builder) {
        AuthenticationManager authenticationManager = builder
            .getSharedObject(AuthenticationManager.class);
        OAuth2ClientAuthenticationFilter clientAuthenticationFilter = new OAuth2ClientAuthenticationFilter(
            authenticationManager, this.requestMatcher);
        List<AuthenticationConverter> authenticationConverters = createDefaultAuthenticationConverters();

        if (!this.authenticationConverters.isEmpty()) {
            authenticationConverters.addAll(0, this.authenticationConverters);
        }
        this.authenticationConvertersConsumer.accept(authenticationConverters);
        clientAuthenticationFilter.setAuthenticationConverter(
            new DelegatingAuthenticationConverter(authenticationConverters));
        if (this.authenticationSuccessHandler != null) {
            clientAuthenticationFilter
                .setAuthenticationSuccessHandler(this.authenticationSuccessHandler);
        }
        if (this.errorResponseHandler != null) {
            clientAuthenticationFilter.setAuthenticationFailureHandler(this.errorResponseHandler);
        }

        builder.addFilterAfter(postProcess(clientAuthenticationFilter),
            AbstractPreAuthenticatedProcessingFilter.class);
    }

    @Override
    RequestMatcher getRequestMatcher() {
        return this.requestMatcher;
    }

    private static List<AuthenticationConverter> createDefaultAuthenticationConverters() {
        List<AuthenticationConverter> authenticationConverters = new ArrayList<>();

        authenticationConverters.add(new JwtClientAssertionAuthenticationConverter());
        authenticationConverters.add(new ClientSecretBasicAuthenticationConverter());
        authenticationConverters.add(new ClientSecretPostAuthenticationConverter());
        authenticationConverters.add(new PublicClientAuthenticationConverter());

        return authenticationConverters;
    }

    private static List<AuthenticationProvider> createDefaultAuthenticationProviders(HttpSecurity httpSecurity) {
        List<AuthenticationProvider> authenticationProviders = new ArrayList<>();

        RegisteredClientRepository registeredClientRepository = OAuth2ConfigurerUtils
            .getRegisteredClientRepository(httpSecurity);
        OAuth2AuthorizationService authorizationService = OAuth2ConfigurerUtils
            .getAuthorizationService(httpSecurity);

        JwtClientAssertionAuthenticationProvider jwtClientAssertionAuthenticationProvider = new JwtClientAssertionAuthenticationProvider(
            registeredClientRepository, authorizationService);
        authenticationProviders.add(jwtClientAssertionAuthenticationProvider);

        ClientSecretAuthenticationProvider clientSecretAuthenticationProvider = new ClientSecretAuthenticationProvider(
            registeredClientRepository, authorizationService);
        PasswordEncoder passwordEncoder = OAuth2ConfigurerUtils.getOptionalBean(httpSecurity,
            PasswordEncoder.class);
        if (passwordEncoder != null) {
            clientSecretAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        }
        authenticationProviders.add(clientSecretAuthenticationProvider);

        PublicClientAuthenticationProvider publicClientAuthenticationProvider = new PublicClientAuthenticationProvider(
            registeredClientRepository, authorizationService);
        authenticationProviders.add(publicClientAuthenticationProvider);

        return authenticationProviders;
    }

}
