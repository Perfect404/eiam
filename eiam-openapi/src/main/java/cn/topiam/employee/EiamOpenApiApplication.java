/*
 * eiam-openapi - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
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
package cn.topiam.employee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;

import cn.topiam.employee.audit.controller.AuditController;
import cn.topiam.employee.common.exception.handler.GlobalExceptionHandler;
import cn.topiam.employee.common.storage.controller.StorageFileResource;
import cn.topiam.employee.core.configuration.EiamApiConfiguration;

/**
 * 应用程序启动入口
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2020/7/9
 */
@ServletComponentScan
@SpringBootApplication(scanBasePackages = { "cn.topiam.employee" })
@ComponentScan(excludeFilters = { @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, value = { EiamApiConfiguration.class,
                                                                                                     StorageFileResource.class,
                                                                                                     AuditController.class,
                                                                                                     GlobalExceptionHandler.class }) })
public class EiamOpenApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(EiamOpenApiApplication.class, args);
    }
}
