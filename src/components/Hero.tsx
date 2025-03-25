
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('opacity-100');
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

  return (
    <section 
      id="home" 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center bg-white transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center">
          <div className="stagger-animation">
            <p className="text-lg md:text-xl text-gray-600 mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 text-balance">
              Sam Ayres
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance">
              UX Designer crafting intuitive digital experiences that put users first.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#projects" className="button-primary">
                View My Work
              </a>
              <a href="#contact" className="button-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Scroll down"
            >
              <ArrowDown size={20} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
