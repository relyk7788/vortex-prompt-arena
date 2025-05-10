
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import BattleCard from '@/components/BattleCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter } from 'lucide-react';

const battles = [
  {
    id: '1',
    title: 'Time Travel Paradox',
    description: 'Craft a prompt that creates a coherent story involving a time traveler who must solve a paradox of their own creation.',
    difficulty: 'intermediate' as const,
    timeLimit: 15,
    participants: 248,
    isActive: true,
  },
  {
    id: '2',
    title: 'Alien Cuisine Guide',
    description: 'Create a prompt that generates a humorous yet informative guide to cooking dishes from an alien civilization.',
    difficulty: 'beginner' as const,
    timeLimit: 10,
    participants: 124,
    isActive: true,
  },
  {
    id: '3',
    title: 'Quantum Physics for Kids',
    description: 'Design a prompt that explains complex quantum physics concepts in a way that a 5-year-old could understand.',
    difficulty: 'advanced' as const,
    timeLimit: 20,
    participants: 87,
    isActive: true,
  },
  {
    id: '4',
    title: 'Historical Figure Interview',
    description: 'Create a prompt that generates a realistic interview with any historical figure, capturing their personality and knowledge.',
    difficulty: 'intermediate' as const,
    timeLimit: 12,
    participants: 156,
    isActive: true,
  },
  {
    id: '5',
    title: 'Poetry from Code',
    description: 'Design a prompt that transforms a code snippet into beautiful, meaningful poetry that relates to what the code does.',
    difficulty: 'advanced' as const,
    timeLimit: 18,
    participants: 62,
    isActive: true,
  },
  {
    id: '6',
    title: 'Emoji Story Challenge',
    description: 'Craft a prompt that creates a coherent and emotional story using only emoji as inspiration.',
    difficulty: 'beginner' as const,
    timeLimit: 8,
    participants: 203,
    isActive: false,
  },
];

const Arena = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredBattles = battles.filter(battle => 
    battle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    battle.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Battle Arena</h1>
        
        <div className="battle-card mb-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
              <Input
                placeholder="Search battles..."
                className="pl-10 bg-battle-dark/50 border-battle-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="outline" className="border-battle-primary/50 hover:bg-battle-primary/10 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="active" className="mb-8">
          <TabsList className="bg-battle-dark/50">
            <TabsTrigger value="active">Active Battles</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBattles.filter(battle => battle.isActive).map((battle) => (
                <BattleCard key={battle.id} {...battle} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBattles.filter(battle => !battle.isActive).map((battle) => (
                <BattleCard key={battle.id} {...battle} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="pt-6">
            <div className="text-center py-12 text-foreground/60">
              <p>No completed battles available in this demo.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Arena;
