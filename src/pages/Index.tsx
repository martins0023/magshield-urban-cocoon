
import { useState } from 'react';
import { ChevronDown, Shield, Satellite, Monitor, Database, ArrowUp, Grid2x2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechnologyOverview from '@/components/TechnologyOverview';
import StatusDashboard from '@/components/StatusDashboard';
import Implementation from '@/components/Implementation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      <Hero />
      <TechnologyOverview />
      <StatusDashboard />
      <Implementation />
      <Footer />
    </div>
  );
};

export default Index;
