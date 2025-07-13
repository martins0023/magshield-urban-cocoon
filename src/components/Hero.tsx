import { useState, useEffect } from 'react';
import { Shield, ArrowDown, Grid2X2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const [shieldActive, setShieldActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShieldActive(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 pt-10">
        <div className="mb-8">
          <Badge variant="outline" className="border-blue-400 text-blue-300 mb-4">
            Project 31 of 100 • Pressing Societal Needs
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protecting Cities with
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Artificial Magnetosphere
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            MagShield harnesses city-scale magnetic shields to safeguard populations from solar storms, 
            radiation bursts, and geophysical hazards through revolutionary space-ground technology.
          </p>
        </div>

        {/* Shield Visualization */}
        <div className="relative mb-12">
          <div className="mx-auto w-64 h-64 md:w-80 md:h-80 relative">
            {/* City core */}
            <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
              <Grid2X2 className="h-8 w-8 text-white" />
            </div>
            
            {/* Magnetic field rings */}
            <div className={`absolute inset-0 border-2 rounded-full transition-all duration-1000 ${
              shieldActive ? 'border-green-400 shadow-lg shadow-green-400/50' : 'border-blue-400 shadow-lg shadow-blue-400/50'
            }`}></div>
            <div className={`absolute inset-4 border-2 rounded-full transition-all duration-1000 ${
              shieldActive ? 'border-green-400/70' : 'border-blue-400/70'
            }`}></div>
            <div className={`absolute inset-8 border-2 rounded-full transition-all duration-1000 ${
              shieldActive ? 'border-green-400/40' : 'border-blue-400/40'
            }`}></div>
            
            {/* Satellites */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-4 h-4 bg-orange-400 rounded animate-pulse"></div>
            </div>
            <div className="absolute bottom-0 right-1/4 transform translate-y-2">
              <div className="w-4 h-4 bg-orange-400 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="absolute left-0 top-1/3 transform -translate-x-2">
              <div className="w-4 h-4 bg-orange-400 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <div className="mt-6">
            <Badge className={`${shieldActive ? 'bg-green-500' : 'bg-blue-500'} text-white transition-all duration-1000`}>
              <Shield className="h-4 w-4 mr-2" />
              {shieldActive ? 'Shield Active' : 'Monitoring Mode'}
            </Badge>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Explore Technology
          </Button>
          <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
            View Live Dashboard
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
