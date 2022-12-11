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
package cn.topiam.employee.common.repository.identitysource;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import cn.topiam.employee.common.entity.identitysource.IdentitySourceSyncHistoryEntity;

/**
 * 身份源同步结果
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/3/15 20:35
 */
@Repository
public interface IdentitySourceSyncHistoryRepository extends
                                                     CrudRepository<IdentitySourceSyncHistoryEntity, Long>,
                                                     PagingAndSortingRepository<IdentitySourceSyncHistoryEntity, Long>,
                                                     QuerydslPredicateExecutor<IdentitySourceSyncHistoryEntity> {
}
