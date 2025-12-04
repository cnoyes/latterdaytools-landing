import { ArrowUpRight, BarChart3, Map, MessageSquare } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  techniques: string[];
  url: string;
  github?: string;
  icon: React.ReactNode;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Prophet Probability Tracker",
    description: "Statistical analysis tool using Monte Carlo simulation to estimate apostolic succession probabilities based on actuarial life expectancy data.",
    techStack: ["Next.js", "TypeScript", "Recharts", "R", "Tailwind CSS"],
    techniques: ["Monte Carlo Simulation", "Actuarial Modeling", "Statistical Analysis", "Data Visualization"],
    url: "https://prophet.latterdaytools.io",
    github: "https://github.com/cnoyes/apostles",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "Temple Construction Tracker",
    description: "Interactive map visualization tracking temple construction progress worldwide with historical data and predictive analytics.",
    techStack: ["R Shiny", "Leaflet", "ggplot2"],
    techniques: ["Geospatial Analysis", "Interactive Mapping", "Data Visualization", "Time Series Analysis"],
    url: "https://claynoyes.shinyapps.io/temple-construction/",
    icon: <Map className="w-6 h-6" />,
    gradient: "from-emerald-600 to-teal-500"
  },
  {
    title: "General Conference Analytics",
    description: "Natural language processing and text analytics on General Conference talks, featuring word clouds, topic modeling, and semantic analysis.",
    techStack: ["Python", "R", "NLTK", "Shiny"],
    techniques: ["Natural Language Processing", "Text Analytics", "Topic Modeling", "Sentiment Analysis", "Word Cloud Generation"],
    url: "#",
    icon: <MessageSquare className="w-6 h-6" />,
    gradient: "from-purple-600 to-pink-500"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Latter-day Tools
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
            Data Science Projects for LDS Data Analysis
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Exploring faith through data: statistical modeling, predictive analytics, and interactive visualizations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Techniques */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Data Science Techniques</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techniques.map((technique, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium text-center hover:opacity-90 transition-opacity`}
                    >
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 border-2 border-slate-200 text-slate-700 rounded-lg font-medium hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.url === "#" && (
                    <div className="flex-1 py-2 px-4 bg-slate-100 text-slate-500 rounded-lg font-medium text-center cursor-not-allowed">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-slate-200">
          <p className="text-slate-600 mb-2">
            Built with Next.js, TypeScript, R, and Python
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Latter-day Tools | Not affiliated with The Church of Jesus Christ of Latter-day Saints
          </p>
        </div>
      </div>
    </div>
  );
}
