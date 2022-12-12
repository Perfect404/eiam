<div align="center">

<img src="https://user-images.githubusercontent.com/30397655/205442696-ccd32d07-2f7b-4335-8083-cac1d740b824.jpg" alt="logo" width="60%"/>

[![](https://img.shields.io/badge/JDK-11+-orange)](https://www.oracle.com/au/java/technologies/javase/jdk11-archive-downloads.html)
[![](https://img.shields.io/badge/MySQL-8.0%2B-brightgreen)](https://www.mysql.com/downloads/)
[![](https://img.shields.io/badge/License-AGPL%203.0-orange)](https://github.com/topaim/eiam/blob/master/LICENSE)
[![](https://img.shields.io/badge/Maven-3.5.0+-brightgreen.svg)](https://maven.apache.org)

[官方网站](https://eiam.topiam.cn) | [需求收集](https://github.com/topiam/eiam/issues/new) | [问题反馈](https://github.com/topiam/eiam/issues/new)

</div>

--------------------------

<div align="center">⭐️ 如果你喜欢 TopIAM，请给它一个 Star，您的支持将是我们前行的动力，项目正在积极开发，欢迎共建 👏🏻。</div>

--------------------------

## 项目介绍

**TopIAM** 数字身份管控平台，简称：EIAM（Employee Identity and Access Management），
用于管理企业内员工账号、权限、身份认证、应用访问，帮助整合部署在本地或云端的内部办公系统、业务系统及三方 SaaS
系统的所有身份，实现一个账号打通所有应用的服务。

## 产品价值

传统企业 IT
大多采用烟囱式建设方式，各系统独立建设账号体系、权限体系，当企业团队人数达到数十人至数百人时，由于系统数量多，在账户、密码、权限管理上会出现瓶颈。员工入职、离职，转岗都需要进行账号权限分配等此类管理，操作低效、功能重复、价值低，员工需要记录多套系统密码，容易出现安全问题，导致数据外泄。用户身份认证安全存疑，敏感系统缺乏严格的身份认证机制。

`EIAM` 提供一套集中式账号、权限、认证、应用、审计等，帮助企业打通身份数据孤岛，实现用户全生命周期，实现一个账号打通所有应用的服务，强化企业安全体系，提升组织管理效率，助力企业数字化转型升级。

## 核心特性

+ 提供统一组织信息管理，多维度建立对应关系，实现在一个平台对企业人员、组织架构、应用信息的高效统一管理。
+ 支持钉钉、飞书、企业微信等身份源集成能力，实现系统和企业OA平台数据联动，以用户为管理基点，结合入职、离职、调岗、兼职等人事事件，关联其相关应用权限变化而变化，保证应用访问权限的安全控制。
+ 支持多因素认证，行为验证码、社交认证，融合认证等机制，保证用户认证安全可靠。
+ 支持微信、微博、QQ等社交认证集成，使企业具有快速纳入互联网化认证能力。
+ 支持 `SAML2`，`OAuth2`，`OIDC`，`CAS`，表单代填等认证协议及机制，实现单点登录功能，预配置大量 SaaS 应用及传统应用模板，开箱即用。
+ 完善的安全审计，详尽记录每一次用户行为，使每一步操作有据可循，实时记录企业信息安全状况，精准识别企业异常访问和潜在威胁的源头。
+ 提供标准`REST`和`SCIM2.0`接口轻松完成机构用户同步，实现企业对于账号生命周期的精细化管理。
+ 开源、安全、自主可控。

## 页面展示

> 仅展示部分UI页面

+ 管理端

![](https://user-images.githubusercontent.com/30397655/205442813-c5664670-aa12-4415-aa66-dadcddd04109.jpg)

![](https://user-images.githubusercontent.com/30397655/206887727-2e6449a9-b75a-46f8-9fab-f215e2d26a38.png)

![](https://user-images.githubusercontent.com/30397655/206887777-d1e6d138-8ab8-4d9b-87f6-08ea497a374e.png)

![](https://user-images.githubusercontent.com/30397655/206887895-8c204839-9a74-4167-87f3-a131a528d444.png)

--------------------------

+ 门户端

![](https://user-images.githubusercontent.com/30397655/206888201-93b1b261-40a6-4e83-b04c-8589da5f2f8a.jpg)

## 在线演示

+ 管理端：https://eiam-console.topiam.cn
+ 用户端：https://eiam-portal.topiam.cn

> 注意：演示环境已屏蔽敏感权限和相关操作

## 开源说明

一方面希望通过开源加强项目产品化程度；另一方面希望在社区中吸收更多的实践场景进而继续完善产品，也欢迎大家参与到项目中来。

为保证社区繁荣和项目自由健康发展，在开源许可证方面，`TopIAM` 选择采用 `AGPL-3.0` 开源协议，`AGPL-3.0` 是 OSI
批准的许可证，符合自由和开源软件的所有标准，**开源永远是我们的初心与核心，我们将始终不渝的坚持去做这件事，我们相信在社区的推动下，这件事我们一定会做的更好**。

或许很多开发者对此协议抱有一些疑问，开源社区目前也有很多采用 `AGPL-3.0` 协议的开源软件，例如 `MongoDB`、`Grafana`、`Loki`
等，维基百科还专门有一份列表列出了哪些[开源项目](https://en.wikipedia.org/wiki/Category:Software_using_the_GNU_AGPL_license)
采用了 `AGPL-3.0` 开源协议。

`AGPL-3.0` 协议有一个非常关键的点，即对修改上游开源项目代码后的二次分发版本必须也要开源，协议限制的是部分企业想 `Folk`
开源项目代码后进行闭源商业分发，跟上游开源项目的维护团队进行直接的商业竞争，如果仅仅只是企业内部自己使用而不进行任何层面修改，用户大可不必担心 `AGPL-3.0`
协议带来的限制， 这些条件旨在鼓励和希望修改软件的第三方也为项目和社区做出贡献。我们认为这是一种更公平的前进方式，我们相信这将有助于我们建立更强大的社区。

简单来讲：如果您修改了 `TopIAM` 项目源代码，那么您必须将这些修改贡献给社区，**绝不允许修改后和衍生的代码做为闭源的商业软件发布和销售**。

我们也提供了商业授权，如果您**需要将本产品进行二次开发、更改并进行任何附带商业化性质行为使用**
，请联系我们进行商业授权，以遵守 `AGPL-3.0` 协议保证您的正常使用。

除此之外，我们也会酌情接受根据个人或企业需求的定制化开发。

目前在国内 `GPL` 协议**具备合同特征，是一种民事法律行为** ，属于我国《合同法》调整的范围。 `TopIAM` 项目团队保留诉讼权利。

[相关案例：违反 `GPL` 协议赔偿 50 万，国内首例！](https://mp.weixin.qq.com/s/YQ6sNjbDS-P7BViLZIsaoA)

> **TopIAM 开源团队拥有对本开源协议的最终解释权。**

## 技术架构

前端技术栈：`ES6`、`React`、`TypeScript`、`UmiJS`、`Axios`、`Ant Design`；

后端技术栈：`JDK11`、`Spring Boot`、`Spring Data`、`Spring Security`、`Elasticsearch`、`Redis`、`MySQL`；

## 联系我们

如果您在 `TopIAM` 产品上的任何想法、意见建议，商务上的合作需求，请扫码添加下方微信进一步沟通。

![](https://user-images.githubusercontent.com/30397655/205442835-cfcfbf2e-eefb-4e9f-8f36-72d91c240896.jpg)

欢迎关注 TopIAM 微信公众号，接收产品最新动态。

![](https://user-images.githubusercontent.com/30397655/206887629-faf77f3e-1681-4918-99bf-773ef434f088.png)

## 加入社群

![67821670851274](https://user-images.githubusercontent.com/30397655/207069116-6fc9215e-af60-4638-a948-4fdfaae5fc22.jpg)

## 参与贡献

我们强烈欢迎有兴趣的开发者参与到项目建设中来，同时欢迎大家对项目提出宝贵意见建议和功能需求，项目正在积极开发，欢迎 PR 👏。

强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545)
和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)
，更好的问题更容易获得帮助。

## License

<img src='https://www.gnu.org/graphics/agplv3-with-text-162x68.png' alt="license">

## 捐赠支持

如果您觉得我们的开源项目对您有帮助，那就请项目开发者们来一杯咖啡☕️吧！当前我们接受来自于**微信**、**支付宝**或者**码云**
的捐赠，请在捐赠时备注自己的昵称或附言。

您的捐赠将用于支付该项目的一些费用支出，并激励开发者们更好的推动项目的发展，同时欢迎捐赠**公网服务器**
用于提高开发基础设施环境及在线演示系统体验。

![](https://user-images.githubusercontent.com/30397655/205442840-1b54a95c-3d11-4542-ae51-040f849b26aa.jpg)
