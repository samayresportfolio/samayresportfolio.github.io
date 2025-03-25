
import { useRef, useEffect } from 'react';
import { FileText, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    "UX Design", "UI Design", "User Research", "Prototyping", 
    "Wireframing", "Usability Testing", "Figma", "Sketch", 
    "Adobe XD", "Design Systems", "Responsive Design", 
    "Information Architecture", "Accessibility", "HTML/CSS"
  ];

  return (
    <section id="about" className="section-container bg-white" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="lg:col-span-1">
            <div className="relative w-48 h-48 mx-auto lg:w-full lg:h-auto aspect-square rounded-full overflow-hidden shadow-lg animate-image-glow">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Hi, I'm Sam Ayres</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate UX designer with a keen eye for creating intuitive, user-centered digital experiences. 
                I specialize in transforming complex problems into simple, elegant solutions that delight users while meeting business objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach combines thorough user research with creative problem-solving, resulting in designs that are both functional and engaging. 
                I believe that the best digital experiences arise from a deep understanding of user needs, meticulous attention to detail, 
                and thoughtful implementation of design principles.
              </p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">Connect with me:</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Resume"
                >
                  <FileText size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
