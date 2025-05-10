
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="container mx-auto flex items-center justify-center py-16 px-4">
        <div className="battle-card max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-battle-primary/20 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-battle-primary">404</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
          <p className="text-foreground/70 mb-6">
            The battle you're looking for doesn't exist or has been relocated to another dimension.
          </p>
          
          <div className="text-xs text-foreground/50 mb-6">
            Path: {location.pathname}
          </div>
          
          <Button asChild className="bg-battle-primary hover:bg-battle-primary/90 text-white">
            <Link to="/">Return to Home Base</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
