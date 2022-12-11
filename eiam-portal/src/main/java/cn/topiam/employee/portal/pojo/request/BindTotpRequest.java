/*
 * eiam-portal - Employee Identity and Access Management Program
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
package cn.topiam.employee.portal.pojo.request;

import java.io.Serial;
import java.io.Serializable;

import javax.validation.constraints.NotNull;

import lombok.Data;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * 绑定MFA入参
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/8/8 19:15
 */
@Data
@Schema(description = "绑定MFA入参")
public class BindTotpRequest implements Serializable {

    @Serial
    private static final long serialVersionUID = 5681761697876754485L;
    /**
     * TOTP不能为空
     */
    @Parameter(description = "TOTP")
    @NotNull(message = "TOTP不能为空")
    private Long              totp;
}
