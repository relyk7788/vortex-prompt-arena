
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import MasterVortex from '@/components/MasterVortex';
import BattleCard from '@/components/BattleCard';
import { Rocket, Trophy, Star } from 'lucide-react';

const featuredBattles = [
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
    isActive: false,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Master the Art of <span className="bg-clip-text text-transparent bg-gradient-to-r from-battle-primary to-battle-accent">Prompt Craft</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Join the arena where prompt engineers battle to create the most creative and effective AI prompts. Learn, compete, and rise to the top!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-battle-primary hover:bg-battle-primary/90 text-white flex items-center gap-2 px-6 py-5">
                <Rocket className="h-4 w-4" />
                Enter the Arena
              </Button>
              <Button variant="outline" className="border-battle-primary/50 hover:bg-battle-primary/10 flex items-center gap-2 px-6 py-5">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 text-foreground/50 text-sm">
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-battle-accent" />
                <span>Weekly Tournaments</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-battle-accent" />
                <span>Skill-Based Matching</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-radial from-battle-primary/20 to-transparent blur-2xl"></div>
              <div className="animated-border rounded-xl p-1">
                <div className="bg-battle-dark rounded-xl p-8 backdrop-blur">
                  <MasterVortex />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Battles */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Battles</h2>
            <Link to="/arena" className="text-battle-primary hover:text-battle-accent transition-colors text-sm">
              View All Battles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBattles.map((battle) => (
              <BattleCard key={battle.id} {...battle} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">How PromptBattle Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="battle-card text-center">
              <div className="w-16 h-16 rounded-full bg-battle-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-battle-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enter a Battle</h3>
              <p className="text-foreground/70">
                Choose from daily challenges and themed competitions that test your prompt engineering skills.
              </p>
            </div>
            
            <div className="battle-card text-center">
              <div className="w-16 h-16 rounded-full bg-battle-primary/20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-battle-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Craft Your Prompt</h3>
              <p className="text-foreground/70">
                Submit your carefully crafted prompt, designed to achieve the given objective with creativity and precision.
              </p>
            </div>
            
            <div className="battle-card text-center">
              <div className="w-16 h-16 rounded-full bg-battle-primary/20 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-battle-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Win & Learn</h3>
              <p className="text-foreground/70">
                Get scored by Master Vortex, rise up the leaderboards, and learn from the community of prompt engineers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="battle-card text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Test Your Skills?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of prompt enthusiasts already sharpening their AI communication skills in our daily battles.
            </p>
            <Button className="bg-battle-primary hover:bg-battle-primary/90 text-white px-8 py-6 text-lg">
              Start Battling Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
