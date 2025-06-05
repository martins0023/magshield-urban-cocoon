
import { Satellite, Shield, Monitor, Database, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechnologyOverview = () => {
  const technologies = [
    {
      icon: Satellite,
      title: "Orbital Coil Constellation",
      description: "Fleet of 12 CubeSats with superconducting loops generating adjustable magnetic fields",
      features: ["Inter-satellite laser links", "Superconducting YBCO tapes", "500km LEO orbit"],
      status: "Development Phase"
    },
    {
      icon: Layers,
      title: "Ground-Based Array",
      description: "Ring of high-current transmitters reinforcing the projected magnetic field footprint",
      features: ["Distributed substations", "Real-time feedback sensors", "GIC monitoring"],
      status: "Testing Phase"
    },
    {
      icon: Monitor,
      title: "AI Control Center",
      description: "Space weather prediction and autonomous shield control using ML models",
      features: ["LSTM + Transformer AI", "Solar observatory feeds", "Real-time calibration"],
      status: "Active Development"
    },
    {
      icon: Shield,
      title: "Grid Protection Interface",
      description: "Bi-directional connection with utility networks for induced current management",
      features: ["SCADA integration", "Automatic rerouting", "Transformer protection"],
      status: "Design Phase"
    }
  ];

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MagShield combines cutting-edge space technology with ground-based infrastructure 
            to create an unprecedented urban protection system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    {tech.status}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl">{tech.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  {tech.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">System Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-gray-300">CubeSats in LEO</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50km</div>
              <div className="text-gray-300">Protection Radius</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">&lt;2min</div>
              <div className="text-gray-300">Activation Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;
