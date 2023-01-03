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
package cn.topiam.employee.common.repository.app.impl;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import cn.topiam.employee.common.entity.account.query.UserListQuery;
import cn.topiam.employee.common.entity.app.po.AppAccountPO;
import cn.topiam.employee.common.entity.app.query.AppAccountQuery;
import cn.topiam.employee.common.repository.app.AppAccountRepositoryCustomized;
import cn.topiam.employee.common.repository.app.impl.mapper.AppAccountPoMapper;

import lombok.AllArgsConstructor;

/**
 * AppAccount Repository Customized
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2020/12/29 20:27
 */
@Repository
@AllArgsConstructor
public class AppAccountRepositoryCustomizedImpl implements AppAccountRepositoryCustomized {

    /**
     * 获取应用账户列表
     *
     * @param pageable {@link  Pageable}
     * @param query    {@link  UserListQuery}
     * @return {@link Page}
     */
    @Override
    public Page<AppAccountPO> getAppAccountList(AppAccountQuery query, Pageable pageable) {
        //@formatter:off
        StringBuilder builder = new StringBuilder("SELECT a.id_,a.app_id,a.user_id,a.account_,a.create_time,u.username_,p.name_ as app_name,p.type_ as app_type,p.template_ as app_template,p.protocol_ as app_protocol FROM app_account a LEFT JOIN `user` u ON a.user_id = u.id_ LEFT JOIN app p ON a.app_id = p.id_ WHERE 1=1");
        //用户名
        if (StringUtils.isNoneBlank(query.getUsername())) {
            builder.append(" AND u.username_ like '%").append(query.getUsername()).append("%'");
        }
        //用户ID
        if (StringUtils.isNoneBlank(query.getUserId())) {
            builder.append(" AND u.id_ = '").append(query.getUserId()).append("%'");
        }
        //账户名称
        if (StringUtils.isNoneBlank(query.getAccount())) {
            builder.append(" AND a.account_ like '%").append(query.getAccount()).append("%'");
        }

        //应用id
        if (StringUtils.isNoneBlank(query.getAppId())) {
            builder.append(" AND a.app_id = '").append(query.getAppId()).append("%'");
        }

        //应用名称
        if(StringUtils.isNotBlank(query.getAppName())){
            builder.append(" AND p.name_ like '%").append(query.getAppName()).append("%'");
        }
        //@formatter:on
        String sql = builder.toString();
        List<AppAccountPO> list = jdbcTemplate
            .query(
                builder.append(" LIMIT ").append(pageable.getPageNumber() * pageable.getPageSize())
                    .append(",").append(pageable.getPageSize()).toString(),
                new AppAccountPoMapper());
        //@formatter:off
        String countSql = "SELECT count(*) FROM (" + sql + ") app_account_";
        //@formatter:on
        Integer count = jdbcTemplate.queryForObject(countSql, Integer.class);
        return new PageImpl<>(list, pageable, count);
    }

    /**
     * JdbcTemplate
     */
    private final JdbcTemplate jdbcTemplate;
}
