# 技术说明
## 开发
1. 前后端开发联调
*现有前后台联调，存在开发将自己服务注册到注册中心，前端调用出现调用错乱现象*
**使用nacos中metadata解决此问题**
> 后端配置,服务中心加入自己的版本号
```
spring:
  cloud:
    nacos:
      discovery:
        metadata:
          version: feifei
```
> 前端调用时在HEADER 中塞入后端版本号
```
    config.headers['asiainfo-Version'] = 'feifei';
```

## 测试

## 运维