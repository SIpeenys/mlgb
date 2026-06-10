/**
 * ============================================
 *  🌟 个人博客 - 数据文件
 *  📝 你只需要修改这个文件中的内容
 *  ✅ 改完保存，刷新网页即可看到变化
 * ============================================
 */

const SITE_DATA = {
  // ---- 评论系统配置（Giscus） ----
  // 基于 GitHub Discussions，免费无需部署服务器
  giscus: {
    repo: "SIpeenys/mybolg",
    category: "Announcements",
  },

  // ---- 网站基本信息 ----
  siteName: "六便士的世界",
  siteSubtitle: "记录生活 · 分享思考",

  // ---- 个人资料 ----
  profile: {
    name: "六块钱",
    avatar: "assets/avatar.jpg",
    bio: "一个热爱生活、热爱技术的人。在这里记录自己的成长与思考。",
    tags: ["程序员", "摄影爱好者", "终身学习者"],
    location: "中国 · 天津",
  },

  // ---- 社交媒体链接 ----
  social: [
    { name: "GitHub", url: "https://github.com/", icon: "🐙" },
    { name: "微博",   url: "https://weibo.com/",  icon: "📱" },
    { name: "邮箱",   url: "mailto:your@email.com", icon: "✉️" },
  ],

  // ---- 博客文章列表 ----
  articles: [
    {
      id: "hello-world",
      title: "你好，世界！",
      date: "2025-01-01",
      summary: "这是我的第一篇博客文章，很高兴在这里和大家见面！",
      tags: ["生活", "随笔"],
      content: `
        <h2>🎉 第一篇博客</h2>
        <p>欢迎来到我的个人博客！</p>
        <p>这里将记录我的学习笔记、生活感悟和各种有趣的项目。</p>
        <p>希望这个小小的空间能够见证我的成长。</p>
        <blockquote>千里之行，始于足下。</blockquote>
        <p>—— 2025年1月1日</p>
      `
    },
    {
      id: "second-post",
      title: "我的第二篇文章",
      date: "2025-01-15",
      summary: "这里可以写第二篇文章的简介，支持 HTML 格式哦。",
      tags: ["技术"],
      content: `
        <h2>📝 第二篇文章</h2>
        <p>这里是文章内容，你可以自由编辑。</p>
        <p>支持 <strong>加粗</strong>、<em>斜体</em>、<a href="#">链接</a> 等 HTML 格式。</p>
        <h3>小标题</h3>
        <ul>
          <li>列表项 1</li>
          <li>列表项 2</li>
          <li>列表项 3</li>
        </ul>
      `
    }
  ]
};
