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
package cn.topiam.employee.common.repository.setting;

import java.util.Optional;

import org.jetbrains.annotations.NotNull;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cn.topiam.employee.common.entity.setting.AdministratorEntity;
import static cn.topiam.employee.common.constants.SettingConstants.ADMIN_CACHE_NAME;

/**
 * @author TopIAM
 * Created by support@topiam.cn on  2021/11/13 22:09
 */
@Repository
@CacheConfig(cacheNames = { ADMIN_CACHE_NAME })
public interface AdministratorRepository extends CrudRepository<AdministratorEntity, Long>,
                                         QuerydslPredicateExecutor<AdministratorEntity> {

    /**
     * findById
     *
     * @param id must not be {@literal null}.
     * @return {@link AdministratorEntity}
     */
    @NotNull
    @Override
    @Cacheable(key = "#p0", unless = "#result==null")
    Optional<AdministratorEntity> findById(@NotNull Long id);

    /**
     * findById
     *
     * @param id must not be {@literal null}.
     */
    @Override
    @CacheEvict(allEntries = true)
    void deleteById(@NotNull Long id);

    /**
     * findById
     *
     * @param ids must not be {@literal null}.
     */
    @Override
    @CacheEvict(allEntries = true)
    void deleteAllById(@NotNull Iterable<? extends Long> ids);

    /**
     * save
     *
     * @param entity must not be {@literal null}.
     * @return {@link AdministratorEntity}
     * @param <S>
     */
    @Override
    @CacheEvict(allEntries = true)
    <S extends AdministratorEntity> S save(@NotNull S entity);

    /**
     * 根据用户名查询
     *
     * @param username {@link String}
     * @return {@link AdministratorEntity}
     */
    Optional<AdministratorEntity> findByUsername(String username);

    /**
     * 根据手机号查询
     *
     * @param phone {@link String}
     * @return {@link AdministratorEntity}
     */
    Optional<AdministratorEntity> findByPhone(String phone);

    /**
     * 根据邮箱查询
     *
     * @param email {@link String}
     * @return {@link AdministratorEntity}
     */
    Optional<AdministratorEntity> findByEmail(String email);

    /**
     * 更新管理员状态
     *
     * @param id     {@link String}
     * @param status {@link String}
     */
    @Transactional(rollbackFor = Exception.class)
    @Modifying
    @CacheEvict(allEntries = true)
    @Query(value = "update administrator set status_ = ?2 where id_ = ?1", nativeQuery = true)
    void updateStatus(@Param(value = "id") String id, @Param(value = "status") String status);

    /**
     * 更新代码
     *
     * @param id       {@link String}
     * @param password {@link String}
     */
    @Transactional(rollbackFor = Exception.class)
    @Modifying
    @CacheEvict(allEntries = true)
    @Query(value = "update administrator set password_ = ?2 where id_ = ?1", nativeQuery = true)
    void updatePassword(@Param(value = "id") String id, @Param(value = "password") String password);
}
