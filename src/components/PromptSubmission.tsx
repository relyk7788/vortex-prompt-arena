
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const PromptSubmission = () => {
  const [prompt, setPrompt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission - would be replaced with actual API call
    setTimeout(() => {
      toast({
        title: "Prompt Submitted!",
        description: "Master Vortex is judging your submission...",
      });
      setPrompt('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="battle-card">
      <h3 className="text-xl font-bold mb-4">Submit Your Prompt</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Craft your prompt here... Be creative, clear, and effective!"
          className="min-h-[150px] bg-battle-dark/50 border-battle-primary/30 focus:border-battle-primary focus:ring-battle-primary"
        />
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-foreground/60">
            <span className="font-medium">{prompt.length}</span> characters
          </div>
          
          <Button 
            type="submit"
            className="bg-battle-primary hover:bg-battle-primary/90 text-white"
            disabled={isSubmitting || prompt.length < 10}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Prompt'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PromptSubmission;
