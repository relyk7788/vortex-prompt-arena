
import React from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Trophy, Award, Star, Search } from 'lucide-react';

const topPromptEngineers = [
  { id: '1', rank: 1, username: 'PromptMaster', score: 9840, battles: 142, winRate: 86 },
  { id: '2', rank: 2, username: 'AIWhisperer', score: 9560, battles: 137, winRate: 81 },
  { id: '3', rank: 3, username: 'NeuralNinja', score: 9320, battles: 145, winRate: 78 },
  { id: '4', rank: 4, username: 'QuantumQuill', score: 8950, battles: 129, winRate: 76 },
  { id: '5', rank: 5, username: 'SyntaxSage', score: 8640, battles: 131, winRate: 74 },
  { id: '6', rank: 6, username: 'LinguisticLegend', score: 8520, battles: 118, winRate: 73 },
  { id: '7', rank: 7, username: 'CreativeCoder', score: 8390, battles: 126, winRate: 71 },
  { id: '8', rank: 8, username: 'WordsmithWizard', score: 8240, battles: 110, winRate: 69 },
  { id: '9', rank: 9, username: 'InferenceIngenious', score: 8120, battles: 105, winRate: 68 },
  { id: '10', rank: 10, username: 'TokenTactician', score: 8050, battles: 98, winRate: 65 },
];

const LeaderboardPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Global Leaderboard</h1>
        
        <div className="battle-card mb-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
              <Input
                placeholder="Search users..."
                className="pl-10 bg-battle-dark/50 border-battle-primary/30"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-foreground/70 text-sm">Showing Top 10 of 1,458 Users</span>
            </div>
          </div>
          
          <Tabs defaultValue="all-time">
            <TabsList className="bg-battle-dark/50 mb-4">
              <TabsTrigger value="all-time">All Time</TabsTrigger>
              <TabsTrigger value="monthly">This Month</TabsTrigger>
              <TabsTrigger value="weekly">This Week</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all-time">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-battle-primary/20">
                      <th className="text-left p-3 text-foreground/70">Rank</th>
                      <th className="text-left p-3 text-foreground/70">User</th>
                      <th className="text-right p-3 text-foreground/70">Score</th>
                      <th className="text-right p-3 text-foreground/70">Battles</th>
                      <th className="text-right p-3 text-foreground/70">Win Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPromptEngineers.map((entry) => (
                      <tr 
                        key={entry.id} 
                        className="border-b border-battle-primary/10 hover:bg-battle-primary/5 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center">
                            {entry.rank === 1 ? (
                              <div className="flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-yellow-500" />
                                <span className="font-bold">{entry.rank}</span>
                              </div>
                            ) : entry.rank === 2 ? (
                              <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-gray-300" />
                                <span className="font-bold">{entry.rank}</span>
                              </div>
                            ) : entry.rank === 3 ? (
                              <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-amber-600" />
                                <span className="font-bold">{entry.rank}</span>
                              </div>
                            ) : (
                              <span className="text-foreground/50 w-8 text-center font-medium">{entry.rank}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-battle-primary/20 flex items-center justify-center">
                              <span className="font-bold text-sm">{entry.username.charAt(0)}</span>
                            </div>
                            <span className="font-medium">{entry.username}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right font-bold text-battle-primary">{entry.score.toLocaleString()}</td>
                        <td className="p-4 text-right text-foreground/70">{entry.battles}</td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Star className="h-4 w-4 text-battle-accent" />
                            <span>{entry.winRate}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="text-center py-12 text-foreground/60">
                <p>Monthly leaderboards will be available in the next update.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="weekly">
              <div className="text-center py-12 text-foreground/60">
                <p>Weekly leaderboards will be available in the next update.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default LeaderboardPage;
