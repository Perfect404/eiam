/*
 * eiam-common - Employee Identity and Access Management Program
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
package cn.topiam.employee.common.message.sms.aliyun;

import javax.validation.constraints.NotEmpty;

import cn.topiam.employee.common.message.sms.SmsProviderConfig;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 验证码提供商配置
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2021/10/1 19:10
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class AliyunSmsProviderConfig extends SmsProviderConfig {
    public AliyunSmsProviderConfig() {
    }

    /**
     * accessKeyId
     */
    @NotEmpty(message = "accessKeyId不能为空")
    private String accessKeyId;

    /**
     * accessKeySecret
     */
    @NotEmpty(message = "accessKeySecret不能为空")
    private String accessKeySecret;

    /**
     * signNme
     */
    @NotEmpty(message = "signNme不能为空")
    private String signName;
}
