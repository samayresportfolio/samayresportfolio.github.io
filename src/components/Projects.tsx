
import { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          const cards = entry.target.querySelectorAll('.card-hover');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
            }, i * 100);
          });
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

  const projects = [
    {
      title: "Modern Web Application",
      description: "A sleek, responsive web application with dynamic content and smooth interactions.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      link: "#",
      delay: 100
    },
    {
      title: "E-Commerce Platform",
      description: "Fully-featured online store with product catalog, shopping cart, and secure checkout.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
      delay: 200
    },
    {
      title: "Portfolio Website",
      description: "Elegant portfolio showcasing creative work with smooth animations and transitions.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "GSAP", "CSS3"],
      link: "#",
      delay: 300
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive banking application with real-time transaction tracking.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
      delay: 400
    },
    {
      title: "AI-Powered Analytics",
      description: "Data visualization platform with advanced analytics and machine learning insights.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "TensorFlow", "D3.js"],
      link: "#",
      delay: 500
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with secure data handling and appointment scheduling.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Angular", "Node.js", "PostgreSQL"],
      link: "#",
      delay: 600
    }
  ];

  return (
    <section id="projects" className="section-container bg-gray-50" ref={sectionRef}>
      <h2 className="section-title text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            link={project.link}
            delay={project.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
