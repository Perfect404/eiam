/*
 * eiam-audit - Employee Identity and Access Management Program
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
package cn.topiam.employee.audit.entity;

import java.io.Serial;
import java.io.Serializable;

import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import cn.topiam.employee.common.enums.UserType;

import lombok.Builder;
import lombok.Data;

/**
 * Actor
 * @author TopIAM
 * Created by support@topiam.cn on  2022/11/5 23:30
 */
@Data
@Builder
public class Actor implements Serializable {

    public static final String ACTOR_ID         = "actor.id";
    public static final String ACTOR_TYPE       = "actor.type";

    @Serial
    private static final long  serialVersionUID = -1144169992714000310L;
    /**
     * 行动者ID
     */
    @Field(type = FieldType.Keyword, name = "id")
    private String             id;

    /**
     * 行动者类型
     */
    @Field(type = FieldType.Keyword, name = "type")
    private UserType           type;

}
