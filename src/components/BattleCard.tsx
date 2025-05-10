
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, Star, Clock } from 'lucide-react';

interface BattleCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeLimit: number; // in minutes
  participants: number;
  isActive: boolean;
}

const BattleCard = ({ 
  id, 
  title, 
  description, 
  difficulty, 
  timeLimit, 
  participants,
  isActive 
}: BattleCardProps) => {
  const difficultyColor = {
    beginner: 'bg-green-500/80',
    intermediate: 'bg-yellow-500/80',
    advanced: 'bg-red-500/80'
  };

  return (
    <div className="battle-card group">
      <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-battle-primary/10 blur-2xl group-hover:bg-battle-primary/20 transition-all duration-700"></div>
      
      <div className="flex justify-between items-start mb-4">
        <Badge className={`${difficultyColor[difficulty]} capitalize`}>{difficulty}</Badge>
        <div className="flex items-center gap-1 text-xs text-foreground/60">
          <Star className="h-3 w-3 text-battle-accent" />
          <span>{participants} participating</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-foreground/70 text-sm mb-6 line-clamp-3">{description}</p>
      
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center gap-1 text-xs text-foreground/60">
          <Clock className="h-3 w-3" />
          <span>{timeLimit} min</span>
        </div>
        
        <Button 
          className="bg-battle-primary hover:bg-battle-primary/90 text-white flex items-center gap-1"
          disabled={!isActive}
        >
          <Rocket className="h-4 w-4" />
          {isActive ? 'Enter Battle' : 'Coming Soon'}
        </Button>
      </div>
    </div>
  );
};

export default BattleCard;
