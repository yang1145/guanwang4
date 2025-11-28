# 企业官网前端项目

这是一个基于 Next.js 构建的现代化企业官网前端项目，具有响应式设计、动画效果和动态内容加载功能。

## 功能特性

- 🎨 响应式设计，适配各种设备屏幕
- 🖼️ 主页轮播图展示
- ⚡ 流畅的动画效果（使用 Framer Motion）
- 🔧 模块化组件架构
- 🌐 动态内容加载（通过 API）
- 🎭 简洁的蓝白配色主题

## 技术栈

- [Next.js 14](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [React Icons](https://react-icons.github.io/react-icons/) - 图标库

## 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm, yarn, pnpm, 或 bun 包管理器

### 安装步骤

1. 克隆项目到本地：
   ```bash
   git clone <repository-url>
   cd guanwang4
   ```

2. 安装依赖：
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

3. 配置环境变量：
   ```bash
   cp .env.example .env.local
   ```
   
   编辑 `.env.local` 文件，设置 API 地址：
   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   ```

5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
src/
├── app/                 # 页面和布局
│   ├── about/           # 关于我们页面
│   ├── contact/         # 联系我们页面
│   ├── news/            # 新闻资讯页面
│   ├── services/        # 产品服务页面
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── components/          # 可复用组件
│   ├── Header.tsx       # 头部导航
│   ├── Footer.tsx       # 底部信息
│   └── HeroCarousel.tsx # 首页轮播图
├── services/            # API 服务
│   ├── productService.ts # 产品服务
│   ├── newsService.ts    # 新闻服务
│   ├── contactService.ts # 联系服务
│   └── siteConfigService.ts # 网站配置服务
└── config/              # 配置文件
```

## 主要功能说明

### 首页轮播图
首页采用全屏轮播图设计，突出企业形象。轮播图具有以下特点：
- 自动播放（5秒间隔）
- 手动切换控制
- 响应式设计
- 流畅的过渡动画

### 动态内容加载
网站内容通过 API 动态获取，包括：
- 网站配置信息（公司名称、版权信息等）
- 产品服务信息
- 新闻资讯内容
- 联系表单提交

### 响应式设计
所有页面均采用响应式设计，适配：
- 桌面端（≥1024px）
- 平板端（768px-1023px）
- 移动端（≤767px）

## 部署

构建生产版本：

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

启动生产服务器：

```bash
npm start
# 或
yarn start
# 或
pnpm start
```

## 开发指南

### 添加新页面
1. 在 `src/app/` 目录下创建新文件夹
2. 添加 `page.tsx` 文件实现页面内容
3. 如需特定样式，可在同级目录添加 `page.module.css`

### 创建新组件
1. 在 `src/components/` 目录下创建组件文件
2. 遵循模块化设计原则
3. 在需要的页面中导入使用

### 更新API服务
1. 在 `src/services/` 目录下找到对应服务文件
2. 根据 API 文档更新请求地址或参数
3. 保持接口一致性和错误处理

## 学习资源

- [Next.js 中文文档](https://nextjs.org/docs)
- [Tailwind CSS 中文文档](https://tailwindcss.com/)
- [TypeScript 中文手册](https://www.typescriptlang.org/zh/)