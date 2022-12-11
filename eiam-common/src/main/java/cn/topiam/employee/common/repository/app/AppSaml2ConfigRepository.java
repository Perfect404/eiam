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
package cn.topiam.employee.common.repository.app;

import java.util.Optional;

import org.jetbrains.annotations.NotNull;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import cn.topiam.employee.common.entity.app.AppSaml2ConfigEntity;
import static cn.topiam.employee.common.constants.ProtocolConstants.SAML2_CONFIG_CACHE_NAME;

/**
 * @author TopIAM
 */
@Repository
@CacheConfig(cacheNames = { SAML2_CONFIG_CACHE_NAME })
public interface AppSaml2ConfigRepository extends JpaRepository<AppSaml2ConfigEntity, Long>,
                                          QuerydslPredicateExecutor<AppSaml2ConfigEntity>,
                                          AppSaml2ConfigRepositoryCustomized {
    /**
     * 按应用 ID 删除
     *
     * @param appId {@link Long}
     */
    @CacheEvict(allEntries = true)
    void deleteByAppId(Long appId);

    /**
     * delete
     *
     * @param id must not be {@literal null}.
     */
    @CacheEvict(allEntries = true)
    @Override
    void deleteById(@NotNull Long id);

    /**
     * save
     *
     * @param entity must not be {@literal null}.
     * @param <S>    {@link S}
     * @return {@link AppSaml2ConfigEntity}
     */
    @NotNull
    @Override
    @CacheEvict(allEntries = true)
    <S extends AppSaml2ConfigEntity> S save(@NotNull S entity);

    /**
     * 根据应用ID获取配置
     *
     * @param id {@link Long}
     * @return {@link AppSaml2ConfigEntity}
     */
    Optional<AppSaml2ConfigEntity> findByAppId(Long id);
}
