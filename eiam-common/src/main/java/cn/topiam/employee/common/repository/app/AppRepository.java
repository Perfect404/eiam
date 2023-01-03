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
package cn.topiam.employee.common.repository.app;

import java.util.Optional;

import org.jetbrains.annotations.NotNull;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import cn.topiam.employee.common.entity.app.AppEntity;
import static cn.topiam.employee.common.constants.AppConstants.APP_CACHE_NAME;

/**
 * @author TopIAM
 */
@Repository
@CacheConfig(cacheNames = { APP_CACHE_NAME })
public interface AppRepository extends JpaRepository<AppEntity, Long>,
                               QuerydslPredicateExecutor<AppEntity>, AppRepositoryCustomized {
    /**
     * 根据应用ID查询已启用应用
     *
     * @param id {@link Long}
     * @return {@link AppEntity}
     */
    @Cacheable
    Optional<AppEntity> findByIdAndEnabledTrue(Long id);

    /**
     * save
     *
     * @param entity must not be {@literal null}.
     * @param <S>    {@link S}
     * @return {@link AppEntity}
     */
    @NotNull
    @Override
    @CacheEvict(allEntries = true)
    <S extends AppEntity> S save(@NotNull S entity);

    /**
     * delete
     *
     * @param id must not be {@literal null}.
     */
    @Override
    @CacheEvict(allEntries = true)
    void deleteById(@NotNull Long id);

    /**
     * find by id
     *
     * @param id must not be {@literal null}.
     * @return {@link AppEntity}
     */
    @NotNull
    @Override
    @Cacheable
    Optional<AppEntity> findById(@NotNull Long id);

    /**
     * 根据clientId获取配置
     *
     * @param clientId {@link String}
     * @return {@link AppEntity}
     */
    @Cacheable
    AppEntity findByClientId(String clientId);

    /**
     *  findByCode
     *
     * @param appCode {@link String}
     * @return {@link AppEntity}
     */
    @NotNull
    @Cacheable
    Optional<AppEntity> findByCode(String appCode);
}
