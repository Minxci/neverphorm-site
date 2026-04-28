
import React from 'react';
import { Instagram, X, Facebook, Music, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'TikTok', 
      icon: Music, 
      url: 'https://www.tiktok.com/@projectneverphorm',
      ariaLabel: 'Follow us on TikTok'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/projectneverphorm?igsh=MTdqaGp4bnN6MW9ieQ%3D%3D&utm_source=qr',
      ariaLabel: 'Follow us on Instagram'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://www.youtube.com/@ProjectNeverphorm',
      ariaLabel: 'Follow us on YouTube'
    },
    { 
      name: 'X', 
      icon: X, 
      url: 'https://x.com/neverphormdev?s=11',
      ariaLabel: 'Follow us on X'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://www.facebook.com/share/1CZQpA5m9y/?mibextid=wwXIfr',
      ariaLabel: 'Follow us on Facebook'
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
            
            <span className="w-1 h-1 rounded-full bg-border mx-1 hidden sm:block"></span>
            
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-all duration-300">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <a href="#" className="hover:text-foreground transition-all duration-300">
              Terms of Service
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Project Neverphorm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
