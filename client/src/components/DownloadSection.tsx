/*
  Design Philosophy: Cyberpunk Visual Impact
  - High-energy explosive background
  - Prominent download buttons with platform icons
  - Neon glow effects and urgency
*/

import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Download, Sparkles } from "lucide-react";

export default function DownloadSection() {
  return (
    <section 
      id="download" 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          filter: "brightness(0.4)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "oklch(0.75 0.25 195)" : 
                              i % 3 === 1 ? "oklch(0.65 0.28 305)" : 
                              "oklch(0.85 0.25 130)",
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 neon-border bg-primary/10 backdrop-blur-sm mb-8">
            <Sparkles className="text-accent w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              立即开始创作
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 glitch neon-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
            data-text="下载 bi"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            下载 bi
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            加入全球数百万创作者的行列，开启你的短视频创作之旅。完全免费，无限可能。
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="neon-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 uppercase tracking-wider font-bold text-lg px-10 py-7 group w-full sm:w-auto"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Apple className="mr-3 w-6 h-6 group-hover:animate-bounce" />
              App Store
            </Button>

            <Button 
              size="lg"
              className="neon-border bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 uppercase tracking-wider font-bold text-lg px-10 py-7 group w-full sm:w-auto"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Smartphone className="mr-3 w-6 h-6 group-hover:animate-bounce" />
              Google Play
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap justify-center gap-8 text-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-primary" />
              <span>完全免费</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>无广告打扰</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>无限导出</span>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="mt-16 inline-flex flex-col items-center gap-4">
            <div className="w-48 h-48 border-4 border-primary/50 neon-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <Download className="w-12 h-12 text-primary mx-auto mb-2" />
                <div className="text-xs text-foreground/60 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                  扫码下载
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/60">
              扫描二维码，立即下载 bi 应用
            </p>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent blur-3xl" />
    </section>
  );
}
