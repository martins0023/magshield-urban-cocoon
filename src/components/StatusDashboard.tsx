
import { useState, useEffect } from 'react';
import { Shield, Database, Monitor, ArrowUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const StatusDashboard = () => {
  const [solarActivity, setSolarActivity] = useState(2);
  const [shieldStatus, setShieldStatus] = useState('Monitoring');
  const [gicLevels, setGicLevels] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarActivity(prev => Math.max(1, Math.min(5, prev + (Math.random() - 0.5) * 2)));
      setGicLevels(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 10)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getActivityColor = (level) => {
    if (level <= 2) return 'text-green-400';
    if (level <= 3.5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getActivityStatus = (level) => {
    if (level <= 2) return 'Low';
    if (level <= 3.5) return 'Moderate';
    return 'High';
  };

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Live System Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring of space weather conditions, shield status, and grid protection metrics.
          </p>
        </div>

        {/* Main Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/70 border-slate-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                Shield Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400 mb-2">{shieldStatus}</div>
              <Badge className="bg-green-500/20 text-green-400 border-green-400">
                All Systems Operational
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/70 border-slate-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2">
                <Monitor className="h-5 w-5 text-orange-400" />
                Solar Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold mb-2 ${getActivityColor(solarActivity)}`}>
                {getActivityStatus(solarActivity)}
              </div>
              <div className="text-sm text-gray-400">Level: {solarActivity.toFixed(1)}/5.0</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/70 border-slate-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-400" />
                GIC Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400 mb-2">{gicLevels.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Of threshold limit</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Monitoring Grid */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6">System Monitoring</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Satellite Constellation Status */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Satellite Constellation</h4>
              <div className="space-y-3">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Satellite Group {i + 1}</span>
                    </div>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      Online
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Ground Station Network */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Ground Stations</h4>
              <div className="space-y-3">
                {['North Array', 'South Array', 'East Array', 'West Array'].map((station, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{station}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {(Math.random() * 20 + 80).toFixed(1)}% Power
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Controls */}
          <div className="mt-8 pt-6 border-t border-slate-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <ArrowUp className="h-4 w-4 mr-2" />
                Activate Emergency Shield
              </Button>
              <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800">
                Download System Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusDashboard;
