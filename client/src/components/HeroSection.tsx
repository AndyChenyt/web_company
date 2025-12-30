/*
  Design Philosophy: Cyberpunk Visual Impact
  - Diagonal cut layout with clip-path
  - Neon glowing text with glitch effects
  - Dynamic background with generated cyberpunk imagery
  - High contrast composition
*/

import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
        marginBottom: "-8vh"
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          filter: "brightness(0.7)"
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/80" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, oklch(0.75 0.25 195 / 20%) 1px, transparent 1px),
            linear-gradient(0deg, oklch(0.75 0.25 195 / 20%) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 neon-border bg-primary/5 backdrop-blur-sm">
              <Sparkles className="text-accent w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                下一代短视频创作工具
              </span>
            </div>

            {/* Main Heading with Glitch Effect */}
            <div>
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4 glitch neon-glow text-primary"
                data-text="创造无限"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                创造无限
              </h1>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                可能性
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              bi 是一款专为创作者打造的革命性短视频应用。融合前沿 AI 技术，让每个人都能轻松创作出令人惊艳的视频内容。突破传统，定义未来。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="neon-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 uppercase tracking-wider font-bold text-base px-8 py-6 group"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                立即下载
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 uppercase tracking-wider font-bold text-base px-8 py-6 group"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Play className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                观看演示
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/30">
              <div>
                <div className="text-3xl md:text-4xl font-black text-primary neon-glow" style={{ fontFamily: 'var(--font-display)' }}>
                  10M+
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  用户
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-secondary neon-glow" style={{ fontFamily: 'var(--font-display)' }}>
                  50M+
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  作品
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-accent neon-glow" style={{ fontFamily: 'var(--font-display)' }}>
                  4.9
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  评分
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Glowing orbs */}
              <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Phone mockup placeholder */}
              <div className="relative mx-auto w-80 h-[600px] border-4 border-primary/50 neon-border bg-card/50 backdrop-blur-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/bflxTz6XvJDE.png" 
                  alt="bi app interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
