
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Star, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full border-b border-battle-primary/20 bg-background/95 backdrop-blur-sm p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-battle-primary to-battle-accent animate-pulse-glow flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
        </div>
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-battle-primary to-battle-accent">
          PromptBattle
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/arena" className="text-foreground/80 hover:text-battle-primary transition-colors">Arena</Link>
        <Link to="/leaderboard" className="text-foreground/80 hover:text-battle-primary transition-colors">Leaderboard</Link>
        <Link to="/about" className="text-foreground/80 hover:text-battle-primary transition-colors">About</Link>
      </nav>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 border-battle-primary/50 hover:bg-battle-primary/10">
          <Trophy className="h-4 w-4 text-battle-accent" />
          <span>Ranks</span>
        </Button>
        <Button className="bg-battle-primary hover:bg-battle-primary/90 text-white">Join Battle</Button>
      </div>
    </header>
  );
};

export default Header;
