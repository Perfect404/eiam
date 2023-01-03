/*
 * eiam-common - Employee Identity and Access Management Program
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
package cn.topiam.employee.common.constants;

/**
 * 配置Bean名称常量
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/3/23 22:53
 */
public final class ConfigBeanNameConstants {
    /**
     * 任务执行者
     */
    public static final String TASK_EXECUTOR                        = "taskExecutor";
    /**
     * 安全过滤器链
     */
    public static final String DEFAULT_SECURITY_FILTER_CHAIN        = "defaultSecurityFilterChain";
    public static final String SOCIAL_SECURITY_FILTER_CHAIN         = "socialSecurityFilterChain";
    public static final String SAML2_PROTOCOL_SECURITY_FILTER_CHAIN = "saml2ProtocolSecurityFilterChain";
    public static final String OIDC_PROTOCOL_SECURITY_FILTER_CHAIN  = "oidcProtocolSecurityFilterChain";
    public static final String CAS_PROTOCOL_SECURITY_FILTER_CHAIN   = "casProtocolSecurityFilterChain";

    /**
     * 默认密码策略管理器
     */
    public static final String DEFAULT_PASSWORD_POLICY_MANAGER      = "defaultPasswordPolicyManager";
    /**
     * 验证码验证器
     */
    public static final String CAPTCHA_VALIDATOR                    = "captchaValidator";

    /**
     * 地理位置
     */
    public static final String GEO_LOCATION                         = "geoLocation";
    /**
     * 短信提供商发送
     */
    public static final String SMS_PROVIDER_SEND                    = "smsProviderSend";
    /**
     * 邮件提供商
     */
    public static final String MAIL_PROVIDER_SEND                   = "mailProviderSend";

}
