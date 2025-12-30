/*
  Design Philosophy: Cyberpunk Visual Impact
  - Diagonal split layout
  - Animated statistics
  - Neon timeline design
*/

import { Target, Rocket, Heart, Trophy } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "创新驱动",
    description: "持续探索前沿技术，将最新的 AI 能力融入产品"
  },
  {
    icon: Rocket,
    title: "用户至上",
    description: "倾听每一位创作者的声音，打造最佳用户体验"
  },
  {
    icon: Heart,
    title: "开放共享",
    description: "构建开放的创作者生态，让知识和灵感自由流动"
  },
  {
    icon: Trophy,
    title: "追求卓越",
    description: "对产品品质的极致追求，永不妥协的工匠精神"
  }
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
        marginTop: "-8vh",
        paddingTop: "calc(6rem + 8vh)"
      }}
    >
      {/* Diagonal background split */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-background" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/50 neon-border bg-accent/5 backdrop-blur-sm mb-6">
              <Heart className="text-accent w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-accent" style={{ fontFamily: 'var(--font-heading)' }}>
                关于 bi
              </span>
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              重新定义<br />短视频创作
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                bi 诞生于一群热爱创作的工程师和设计师之手。我们深知传统视频编辑工具的复杂性和局限性，因此决心打造一款真正为创作者服务的产品。
              </p>
              <p>
                通过融合最前沿的人工智能技术，我们让专业级的视频创作变得触手可及。无论你是经验丰富的创作者，还是刚刚开始探索的新手，bi 都能成为你最得力的创作伙伴。
              </p>
              <p>
                我们相信，每个人都有独特的故事值得被讲述，每个创意都值得被看见。bi 的使命，就是让创作的门槛降到最低，让想象力的边界无限延伸。
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 border-2 border-primary bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                  <div className="w-0.5 h-full bg-primary/30 mt-2" />
                </div>
                <div>
                  <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    2021
                  </div>
                  <div className="text-foreground/70">
                    bi 项目启动，核心团队组建
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 border-2 border-secondary bg-secondary/20 group-hover:bg-secondary transition-colors duration-300" />
                  <div className="w-0.5 h-full bg-secondary/30 mt-2" />
                </div>
                <div>
                  <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    2022
                  </div>
                  <div className="text-foreground/70">
                    首个测试版发布，获得 10 万用户
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 border-2 border-accent bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-accent font-bold text-sm uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    2024
                  </div>
                  <div className="text-foreground/70">
                    用户突破 1000 万，成为行业领导者
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-6 hover:border-primary hover:neon-border transition-all duration-300 group"
                >
                  <div className="inline-flex p-3 border-2 border-primary/50 mb-4 group-hover:neon-border transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
