
import { Shield, Mail, Database, Monitor } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const footerSections = [
    {
      title: "Technology",
      links: [
        { label: "Satellite Constellation", href: "#satellites" },
        { label: "Ground Arrays", href: "#ground" },
        { label: "AI Control Systems", href: "#ai" },
        { label: "Grid Integration", href: "#grid" }
      ]
    },
    {
      title: "Research",
      links: [
        { label: "Technical Papers", href: "#papers" },
        { label: "Space Weather Data", href: "#data" },
        { label: "Simulation Models", href: "#models" },
        { label: "Open Source Tools", href: "#tools" }
      ]
    },
    {
      title: "Partnerships",
      links: [
        { label: "Municipal Programs", href: "#municipal" },
        { label: "Research Institutions", href: "#research" },
        { label: "Space Agencies", href: "#agencies" },
        { label: "Industry Partners", href: "#industry" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "API Access", href: "#api" },
        { label: "Data Portal", href: "#portal" },
        { label: "Emergency Protocols", href: "#emergency" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-slate-900/90 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MagShield</h3>
                <p className="text-sm text-blue-300">Artificial Magnetosphere Shield</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Protecting urban populations from solar storms and geomagnetic hazards through revolutionary 
              space-ground magnetic field technology.
            </p>
            <div className="flex gap-2 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-400">
                Project 31/100
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-400">
                Active Development
              </Badge>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-lg mb-3">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Emergency Operations</h4>
              <p className="text-gray-400 text-sm">24/7 space weather monitoring</p>
              <p className="text-blue-400 text-sm font-mono">+1-555-MAGSHIELD</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-3">
                <Monitor className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Technical Support</h4>
              <p className="text-gray-400 text-sm">System integration assistance</p>
              <p className="text-blue-400 text-sm">support@magshield.org</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-3">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Research Collaboration</h4>
              <p className="text-gray-400 text-sm">Academic partnerships</p>
              <p className="text-blue-400 text-sm">research@magshield.org</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 MagShield Initiative. All rights reserved. | Advancing urban resilience through magnetic field technology.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#ethics" className="text-gray-400 hover:text-white transition-colors duration-200">
                Ethics Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
