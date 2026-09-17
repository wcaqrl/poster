# Poster Lab

一个独立的 React 海报示例应用。

## 本地运行

```bash
npm ci
npm run dev
```

## Docker 镜像

`v*` Git tag 触发 `Publish Poster image`，构建 `linux/amd64` 镜像并推送到 `ghcr.io/wcaqrl/poster`。默认分支构建 `edge`，版本标签同时生成对应 SemVer 标签和 `latest`。

本项目只负责应用源码和容器镜像，不包含针对某个应用商店的打包配置或凭据。
