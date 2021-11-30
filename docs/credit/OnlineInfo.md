# dev 在线服务

## 服务启动
### credit服务 base服务 
启动时增加启动参数
```
--spring.profiles.active=dev --REGISTER_HOST=192.168.21.186 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=192.168.21.186 --SENTINEL_DASHBOARD_PORT=8858
```

## 服务访问路径
> [后管端地址](http://192.168.21.186:8888/#/login)  用户名密码 admin/admin  <br/>
> [前端地址](http://192.168.21.186:8889/#/login)  <br/>
> [nacos地址](http://192.168.21.186:8848/nacos/#/login)  用户名密码 nacos/nacos <br/>
> [sentinel地址](http://192.168.21.186:8858/#/login) 用户名密码 sentinel/sentinel<br/>
> [jekins地址](http://192.168.21.4:8085/jenkins/view/dev_%E4%BE%9B%E5%BA%94%E9%93%BE%E9%87%91%E8%9E%8D/)  用户名密码 zwjenkins/zw66ddjekins<br/>

## 演示账号
>> 后管端 admin/admin </br>
>> 企业端 
>>> 链属企业 账号密码:15700000001/86041467/Aa123456 </br>
>>> 核心企业 账号密码:15700000002/97826058/Aa123456 </br>
>>> 资方 账号密码:15700000003/03474550/Aa123456 </br>
>>> 担保 账号密码:15700000004/77238858/Aa123456 </br>

## linux 服务器地址
>> 192.168.21.186
>> 用户名 root 密码 dev186

## 中间件信息
### fastdfs
>> 192.168.21.186:22122

### redis
>> 192.168.21.186:6379
>> 密码:zw.123

### rabbitmq
>> 192.168.21.186:5672
>> 用户名：asiainfouser
>> 密码：Zhiwang.123

### mysql
>> 192.168.21.186:3306
>> 用户名：asiainfouser
>> 密码：asiainfouser@scf2019
