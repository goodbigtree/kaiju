# 快速开始
## 公共服务
1. 部署nacos服务:启动nacos目录/bin/下的startup.cmd
> * 数据库新建nacos_dev数据库,将nacos-mysql.sql 导入数据库
> * 配置 application.properties 文件
> * [访问地址](http://localhost:8848/nacos/#/login)
> * 用户名密码为nacos
> * 单机启动: sh startup.sh -m standalone

2. 部署sentinel-dashboard:启动项目java -Dserver.port=8858 -jar D:\asiainfo-server\sentinel-dashboard-1.7.0.jar 
> * [访问地址](http://localhost:8858/#/login)
> * 用户名密码：sentinel

3. seata: /bin/目录下的seata-server.bat 启动服务
> * 数据库新建seata_dev数据库，将db_store.sql导入数据库
> * 修改配置文件registry.conf，指定使用nacos
> * 修改nacos-config.txt，指定服务组
> * 初始化数据到nacos: sh nacos-config.sh 指定nacosIP 或 (python nacos-config.py 指定ip----sh nacos-config.sh 192.168.21.186)
> * 启动服务 sh bin/seata-server.sh -p 8091 -h ip (sh seata-server.sh -p 8091  -h 192.168.21.186 -m file)

4. 下载rabbitmq:启动服务,管理端端口15672，客户端端口5672

5. 下载redis：启动redis服务,端口：6379，开发环境可不需密码

## 基础服务

```
1. 初始化dataSql.sql数据库到dataSql库;dataSql_flow.sql 到dataSql_flow库;quartz_job.sql到quartz_job库
2. 将授权服务yml文件:asiainfo-auth.yml、asiainfo-auth-dev.yml导入到nacos中--GROUP(asiainfo-GROUP)
3. 其它相应yml文件导入到nacos中
```

6. asiainfo-auth授权服务: 
> * 启动 jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

7. asiainfo-gateway网关服务: 
> * asiainfo-gateway.yml、asiainfo-gateway-dev.yml、asiainfo-gateway-dev.json导入到nacos---GROUP(asiainfo-GATEWAY-GROUP)
> * 启动项目: jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

8. asiainfo-admin监控服务:
> * 启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

9. asiainfo-design 流程设计服务
> * 启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

10. asiainfo-develop 开发工具
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

11. asiainfo-file 文件服务
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

12. asiainfo-mq 消息服务
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

13. asiainfo-quartz 定时任务
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

14. asiainfo-base 基础服务
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

15. asiainfo-flow 工作流
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

16. asiainfo-credit 亚信云
> *  启动项目：jar -jar **.jar --spring.profiles.active=dev --REGISTER_HOST=127.0.0.1 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=127.0.0.1 --SENTINEL_DASHBOARD_PORT=8858

