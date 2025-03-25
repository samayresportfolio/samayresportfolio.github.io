
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  delay: number;
}

const ProjectCard = ({ title, description, imageUrl, tags, link, delay }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card-hover rounded-xl overflow-hidden bg-white border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full transform scale-90 hover:scale-100 transition-transform duration-300"
            aria-label={`View ${title} project`}
          >
            <ExternalLink size={24} className="text-primary" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
