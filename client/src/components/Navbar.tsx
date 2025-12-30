/*
  Design Philosophy: Cyberpunk Visual Impact
  - Transparent navbar with neon borders
  - Glowing logo and navigation items
  - Sharp edges, no rounded corners
*/

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="text-4xl font-black text-primary neon-glow transition-all duration-300 group-hover:scale-110" style={{ fontFamily: 'var(--font-display)' }}>
                bi
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              功能特性
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              关于我们
            </a>
            <a 
              href="#download" 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              立即下载
            </a>
            <Button 
              className="neon-border bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              开始创作
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-primary/30 bg-card/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider text-sm py-2"
                style={{ fontFamily: 'var(--font-heading)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                功能特性
              </a>
              <a 
                href="#about" 
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider text-sm py-2"
                style={{ fontFamily: 'var(--font-heading)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                关于我们
              </a>
              <a 
                href="#download" 
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider text-sm py-2"
                style={{ fontFamily: 'var(--font-heading)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                立即下载
              </a>
              <Button 
                className="neon-border bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider font-bold w-full"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                开始创作
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
