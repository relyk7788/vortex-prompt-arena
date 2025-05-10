
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-battle-primary/20 bg-background/95 backdrop-blur-sm p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-battle-primary to-battle-accent">
            PromptBattle
          </div>
          <p className="text-sm text-foreground/60 mt-1">Compete. Create. Conquer the Prompt Arena.</p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          <Link to="/terms" className="text-sm text-foreground/60 hover:text-battle-primary transition-colors">Terms</Link>
          <Link to="/privacy" className="text-sm text-foreground/60 hover:text-battle-primary transition-colors">Privacy</Link>
          <Link to="/contact" className="text-sm text-foreground/60 hover:text-battle-primary transition-colors">Contact</Link>
          <a href="https://twitter.com/promptbattle" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-battle-primary transition-colors">Twitter</a>
        </div>
      </div>
      
      <div className="container mx-auto mt-6 pt-4 border-t border-battle-primary/10 text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} PromptBattle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
