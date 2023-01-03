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

import cn.topiam.employee.support.constant.EiamConstants;

/**
 * 审计常量
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2020/7/26 19:07
 */
public final class SettingConstants {
    public static final String NOT_CONFIG         = "{}";

    /**
     * 系统设置API路径
     */
    public final static String SETTING_PATH       = EiamConstants.API_PATH + "/setting";

    /**
     * 组名称
     */
    public static final String SETTING_GROUP_NAME = "系统设置";

    /**
     * 系统设置缓存 cacheName
     */
    public static final String SETTING_CACHE_NAME = "setting";

    /**
     * admin 缓存 cacheName
     */
    public static final String ADMIN_CACHE_NAME   = "admin";

}
