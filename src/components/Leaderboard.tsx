
import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  rank: number;
  username: string;
  score: number;
  battles: number;
  winRate: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

const Leaderboard = ({ entries }: LeaderboardProps) => {
  return (
    <div className="battle-card overflow-x-auto">
      <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
      
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="border-b border-battle-primary/20">
            <th className="text-left p-2 text-foreground/70">Rank</th>
            <th className="text-left p-2 text-foreground/70">User</th>
            <th className="text-right p-2 text-foreground/70">Score</th>
            <th className="text-right p-2 text-foreground/70">Battles</th>
            <th className="text-right p-2 text-foreground/70">Win Rate</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr 
              key={entry.id} 
              className="border-b border-battle-primary/10 hover:bg-battle-primary/5 transition-colors"
            >
              <td className="p-3">
                <div className="flex items-center">
                  {entry.rank === 1 ? (
                    <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                  ) : entry.rank === 2 ? (
                    <Award className="h-4 w-4 text-gray-300 mr-2" />
                  ) : entry.rank === 3 ? (
                    <Award className="h-4 w-4 text-amber-600 mr-2" />
                  ) : (
                    <span className="text-foreground/50 w-6 mr-2 text-center">{entry.rank}</span>
                  )}
                </div>
              </td>
              <td className="p-3 font-medium">{entry.username}</td>
              <td className="p-3 text-right font-bold text-battle-primary">{entry.score}</td>
              <td className="p-3 text-right text-foreground/70">{entry.battles}</td>
              <td className="p-3 text-right">
                <div className="flex items-center justify-end gap-1">
                  <Star className="h-3 w-3 text-battle-accent" />
                  <span>{entry.winRate}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
