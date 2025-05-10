
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ScoreCriterion {
  name: string;
  score: number;
  maxScore: number;
}

interface ScoreDisplayProps {
  criteria: ScoreCriterion[];
  totalScore: number;
  maxTotalScore: number;
}

const ScoreDisplay = ({ criteria, totalScore, maxTotalScore }: ScoreDisplayProps) => {
  return (
    <div className="battle-card space-y-6">
      <h3 className="text-xl font-bold mb-4">Your Scores</h3>
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-white">
              {totalScore}
              <span className="text-foreground/50 text-lg">/{maxTotalScore}</span>
            </div>
          </div>
          <svg className="w-32 h-32 -rotate-90">
            <circle
              className="text-battle-primary/10"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
            <circle
              className="text-battle-primary"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
              strokeDasharray={`${56 * 2 * Math.PI}`}
              strokeDashoffset={`${56 * 2 * Math.PI * (1 - totalScore / maxTotalScore)}`}
            />
          </svg>
        </div>
        
        <div className="flex-1 space-y-3 w-full">
          {criteria.map((criterion) => (
            <div key={criterion.name} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground/80">{criterion.name}</span>
                <span className="text-xs font-medium text-foreground/60">
                  {criterion.score}/{criterion.maxScore}
                </span>
              </div>
              <Progress 
                value={(criterion.score / criterion.maxScore) * 100} 
                className="h-2 bg-battle-dark"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
