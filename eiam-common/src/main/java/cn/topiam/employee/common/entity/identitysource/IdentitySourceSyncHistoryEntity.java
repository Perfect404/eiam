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
package cn.topiam.employee.common.entity.identitysource;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import cn.topiam.employee.common.enums.SyncStatus;
import cn.topiam.employee.common.enums.TriggerType;
import cn.topiam.employee.common.enums.identitysource.IdentitySourceObjectType;
import cn.topiam.employee.support.repository.domain.BaseEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * 身份源同步记录表
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/2/22 23:51
 */
@Getter
@Setter
@ToString
@Entity
@Accessors(chain = true)
@NoArgsConstructor
@Table(name = "identity_source_sync_history")
public class IdentitySourceSyncHistoryEntity extends BaseEntity<Long> {

    /**
     * 批号
     */
    @Column(name = "batch_")
    private String                   batch;

    /**
     * 身份源ID
     */
    @Column(name = "identity_source_id")
    private Long                     identitySourceId;

    /**
     * 创建数量
     */
    @Column(name = "created_count")
    private Integer                  createdCount;

    /**
     * 更新数量
     */
    @Column(name = "updated_count")
    private Integer                  updatedCount;

    /**
     * 删除数量
     */
    @Column(name = "deleted_count")
    private Integer                  deletedCount;

    /**
     * 跳过数量
     */
    @Column(name = "skipped_count")
    private Integer                  skippedCount;

    /**
     * 开始时间
     */
    @Column(name = "start_time")
    private LocalDateTime            startTime;

    /**
     * 结束时间
     */
    @Column(name = "end_time")
    private LocalDateTime            endTime;

    /**
     * 对象类型（用户、组织）
     */
    @Column(name = "object_type")
    private IdentitySourceObjectType objectType;

    /**
     * 触发类型（手动、任务、事件）
     */
    @Column(name = "trigger_type")
    private TriggerType              triggerType;

    /**
     * 触发类型（手动、任务、事件）
     */
    @Column(name = "status_")
    private SyncStatus               status;
}
