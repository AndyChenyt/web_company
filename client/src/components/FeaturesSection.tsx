/*
  Design Philosophy: Cyberpunk Visual Impact
  - Asymmetric grid layout
  - Neon-bordered feature cards
  - Holographic hover effects
  - Generated cyberpunk imagery for each feature
*/

import { Wand2, Brain, Users, Zap, Film, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "智能剪辑",
    description: "AI 驱动的自动剪辑系统，一键生成专业级视频。智能识别精彩片段，自动配乐配字幕，让创作变得前所未有的简单。",
    image: "/images/feature-1.png",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI 创意助手",
    description: "强大的 AI 创意引擎，提供无限灵感。从脚本生成到特效推荐，全方位辅助你的创作过程，释放无限创造力。",
    image: "/images/feature-2.png",
    color: "secondary"
  },
  {
    icon: Users,
    title: "社区互动",
    description: "加入充满活力的创作者社区，分享作品、交流经验、获得灵感。与全球数百万创作者一起，共同定义短视频的未来。",
    image: "/images/feature-3.png",
    color: "accent"
  },
  {
    icon: Zap,
    title: "极速渲染",
    description: "采用最新的硬件加速技术，渲染速度提升 10 倍。告别漫长等待，即时预览，实时导出，让创作流程行云流水。",
    image: "/images/hero-bg.png",
    color: "primary"
  },
  {
    icon: Film,
    title: "专业特效库",
    description: "内置数千种专业级特效、滤镜和转场。从赛博朋克到复古怀旧，从科幻未来到自然写实，满足所有创意需求。",
    image: "/images/cta-bg.png",
    color: "secondary"
  },
  {
    icon: Sparkles,
    title: "一键分享",
    description: "无缝对接主流社交平台，一键发布到多个平台。智能优化不同平台的视频格式，让你的作品触达更广泛的观众。",
    image: "/images/feature-3.png",
    color: "accent"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, oklch(0.65 0.28 305 / 30%) 1px, transparent 1px),
            linear-gradient(0deg, oklch(0.65 0.28 305 / 30%) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-secondary/50 neon-border bg-secondary/5 backdrop-blur-sm mb-6">
            <Sparkles className="text-accent w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary" style={{ fontFamily: 'var(--font-heading)' }}>
              核心功能
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            强大功能
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            集成最前沿的 AI 技术与专业创作工具，为你提供无与伦比的创作体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = feature.color === "primary" ? "text-primary border-primary/50" :
                              feature.color === "secondary" ? "text-secondary border-secondary/50" :
                              "text-accent border-accent/50";
            
            return (
              <div
                key={index}
                className={`group relative border-2 ${colorClass} bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:bg-card/80 transition-all duration-500 overflow-hidden`}
                style={{
                  transform: index % 2 === 0 ? "translateY(0)" : "translateY(20px)"
                }}
              >
                {/* Background image on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />

                {/* Neon glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  feature.color === "primary" ? "shadow-[inset_0_0_20px_oklch(0.75_0.25_195/30%)]" :
                  feature.color === "secondary" ? "shadow-[inset_0_0_20px_oklch(0.65_0.28_305/30%)]" :
                  "shadow-[inset_0_0_20px_oklch(0.85_0.25_130/30%)]"
                }`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 border-2 ${colorClass} mb-6 group-hover:neon-border transition-all duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4 group-hover:neon-glow transition-all duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>了解更多</span>
                    <Zap className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 ${colorClass} opacity-50`} />
                <div className={`absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 ${colorClass} opacity-50`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
