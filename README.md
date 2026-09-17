# Poster Lab

一个用于验证 LazyCat 自动发布链路的 React 示例应用。

## 本地运行

```bash
npm ci
npm run dev
```

## 发布流程

1. `v*` Git tag 触发 `Publish Poster image`，构建 `linux/amd64` 镜像并推送到 `ghcr.io/wcaqrl/poster`。
2. 镜像工作流成功后触发 `Publish Poster to LazyCat`。
3. `wcaqrl/lazycat-action` 检查最新 SemVer 镜像、调用懒猫 `copy-image`、修改 Manifest、构建并校验 LPK，然后使用开发者 PAT 上传并创建审核。

GitHub 仓库需要配置 Secret `LZC_API_TOKEN`，GHCR 包 `wcaqrl/poster` 必须设置为 Public，懒猫服务端才能匿名拉取并转存镜像。
