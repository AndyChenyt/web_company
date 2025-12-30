/*
  Design Philosophy: Cyberpunk Visual Impact
  - Minimal footer with neon accents
  - Social links with hover effects
  - Sharp geometric design
*/

import { Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/30 bg-card/50 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-4xl font-black text-primary neon-glow mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              bi
            </div>
            <p className="text-foreground/70 max-w-md mb-6">
              重新定义短视频创作。融合 AI 技术，让每个人都能轻松创作出令人惊艳的视频内容。
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Github, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 border-2 border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:neon-border transition-all duration-300"
                    aria-label={`Social link ${index + 1}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-4 text-primary uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              产品
            </h3>
            <ul className="space-y-2">
              {["功能特性", "定价方案", "更新日志", "帮助中心"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 
              className="text-lg font-bold mb-4 text-secondary uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              公司
            </h3>
            <ul className="space-y-2">
              {["关于我们", "加入我们", "联系方式", "媒体资源"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-foreground/60 text-sm">
            © 2024 bi. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              隐私政策
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              服务条款
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Cookie 政策
            </a>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-secondary/20" />
    </footer>
  );
}
