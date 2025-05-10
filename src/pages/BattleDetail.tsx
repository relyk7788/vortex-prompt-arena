
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import MasterVortex from '@/components/MasterVortex';
import PromptSubmission from '@/components/PromptSubmission';
import ScoreDisplay from '@/components/ScoreDisplay';
import Leaderboard from '@/components/Leaderboard';
import { Clock, Users, Star, ChevronLeft } from 'lucide-react';

// Define type for difficulty to ensure type safety
type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

// Define a proper interface for battle data
interface Battle {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  timeLimit: number;
  participants: number;
  isActive: boolean;
  criteria: string;
  example: string;
}

const battles: Record<string, Battle> = {
  '1': {
    id: '1',
    title: 'Time Travel Paradox',
    description: 'In this battle, you need to craft a prompt that creates a coherent story involving a time traveler who must solve a paradox of their own creation. Your prompt should specify how the AI should structure the narrative, what temporal mechanics to consider, and how to create a satisfying resolution that doesn\'t create plot holes.',
    difficulty: 'intermediate',
    timeLimit: 15,
    participants: 248,
    isActive: true,
    criteria: 'Prompts will be judged on narrative coherence, creative application of time travel concepts, and the logical resolution of paradoxes.',
    example: 'Create a short story about a time traveler who discovers that they inadvertently caused the very event they traveled back in time to prevent. Include how they grapple with this revelation, and how they ultimately resolve the paradox without creating additional timeline inconsistencies. Use consistent time travel rules throughout the story.'
  }
};

const leaderboardEntries = [
  { id: '1', rank: 1, username: 'PromptMaster', score: 98, battles: 42, winRate: 86 },
  { id: '2', rank: 2, username: 'AIWhisperer', score: 95, battles: 37, winRate: 81 },
  { id: '3', rank: 3, username: 'NeuralNinja', score: 92, battles: 45, winRate: 78 },
  { id: '4', rank: 4, username: 'QuantumQuill', score: 89, battles: 29, winRate: 76 },
  { id: '5', rank: 5, username: 'SyntaxSage', score: 86, battles: 31, winRate: 74 }
];

const scoreCriteria = [
  { name: 'Originality', score: 8, maxScore: 10 },
  { name: 'Clarity', score: 9, maxScore: 10 },
  { name: 'Effectiveness', score: 7, maxScore: 10 },
  { name: 'Technical accuracy', score: 6, maxScore: 10 }
];

const BattleDetail = () => {
  const { battleId } = useParams();
  const battle = battles[battleId as keyof typeof battles];
  
  if (!battle) {
    return (
      <Layout>
        <div className="container mx-auto text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Battle not found</h2>
          <Link to="/arena">
            <Button variant="outline">Return to Arena</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to="/arena" className="text-battle-primary hover:text-battle-accent flex items-center gap-1 text-sm mb-3">
            <ChevronLeft className="h-4 w-4" />
            Back to Arena
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">{battle.title}</h1>
          
          <div className="flex flex-wrap gap-4 items-center text-foreground/60 text-sm mb-6">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{battle.timeLimit} min time limit</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{battle.participants} participants</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs capitalize ${
              battle.difficulty === 'beginner' ? 'bg-green-500/20 text-green-500' : 
              battle.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-500' : 
              'bg-red-500/20 text-red-500'
            }`}>
              {battle.difficulty}
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="battle-card">
              <h2 className="text-xl font-bold mb-4">Challenge Description</h2>
              <p className="text-foreground/80 mb-6">{battle.description}</p>
              
              <h3 className="text-lg font-semibold mb-2">Judging Criteria</h3>
              <p className="text-foreground/70 mb-6">{battle.criteria}</p>
              
              <h3 className="text-lg font-semibold mb-2">Example</h3>
              <div className="bg-battle-dark/50 p-4 rounded-lg text-foreground/90 text-sm">
                <p>{battle.example}</p>
              </div>
            </div>
            
            <PromptSubmission />
            
            <ScoreDisplay 
              criteria={scoreCriteria}
              totalScore={30}
              maxTotalScore={40}
            />
          </div>
          
          <div className="space-y-6">
            <div className="battle-card flex flex-col items-center text-center">
              <h2 className="text-xl font-bold mb-6">Your Judge</h2>
              <MasterVortex />
            </div>
            
            <Leaderboard entries={leaderboardEntries} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BattleDetail;
