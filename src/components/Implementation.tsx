
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Implementation = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      phase: 1,
      title: "Research & Development",
      duration: "18 months",
      status: "In Progress",
      progress: 65,
      tasks: [
        "Superconducting coil prototype testing",
        "CubeSat platform development", 
        "Ground array site surveys",
        "AI prediction model training"
      ]
    },
    {
      phase: 2,
      title: "Pilot Deployment",
      duration: "12 months",
      status: "Planning",
      progress: 0,
      tasks: [
        "First constellation launch (4 satellites)",
        "Ground station installation",
        "System integration testing",
        "Beta municipal partnerships"
      ]
    },
    {
      phase: 3,
      title: "Full Scale Deployment",
      duration: "24 months",
      status: "Future",
      progress: 0,
      tasks: [
        "Complete 12-satellite constellation",
        "Multi-city coverage expansion",
        "Autonomous operation systems",
        "International collaboration framework"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-500';
      case 'Planning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="implementation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic phased approach to deploying MagShield technology across metropolitan areas worldwide.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className={`absolute left-0 md:left-1/2 w-8 h-8 ${getStatusColor(phase.status)} rounded-full transform md:-translate-x-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{phase.phase}</span>
                </div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-white">{phase.title}</CardTitle>
                        <Badge className={getStatusColor(phase.status)}>
                          {phase.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300">
                        Duration: {phase.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {phase.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-300 mb-1">
                            <span>Progress</span>
                            <span>{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${phase.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership & Funding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/30 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Strategic Partners</CardTitle>
              <CardDescription className="text-gray-300">
                Collaborating with leading space agencies and technology companies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['NASA Space Technology Mission', 'ESA Space Safety Programme', 'Municipal Power Authorities', 'Defense Research Labs'].map((partner, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <span className="text-gray-300">{partner}</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      Active
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Funding & Support</CardTitle>
              <CardDescription className="text-gray-300">
                Multi-tiered funding approach ensuring sustainable development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Government Grants</span>
                    <span>$45M</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Private Investment</span>
                    <span>$30M</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Municipal Contracts</span>
                    <span>$25M</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the Future of Urban Protection
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Partner with us to deploy the first artificial magnetosphere shield and revolutionize how cities prepare for space weather events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Request Partnership Info
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Technical Brief
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
