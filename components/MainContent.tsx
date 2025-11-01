import React from 'react';
import type { WorkExperienceItem, EducationItem, Skill, Language, ProjectItem } from '../types';
import { PROFESSIONAL_SUMMARY, WORK_EXPERIENCE, EDUCATION, ACHIEVEMENTS, SKILLS, LANGUAGES, PROJECTS } from '../constants';

const ContentSection: React.FC<{ title: string; children: React.ReactNode; id: string }> = ({ title, children, id }) => (
  <section id={id} className="mb-12">
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-1/2 after:h-1 after:bg-[#ffdb70]">
        {title}
    </h2>
    {children}
  </section>
);

// FIX: Made the children prop optional to support timeline items without descriptive content, such as education entries.
const TimelineItem: React.FC<{ title: string; subtitle: string; period: string; children?: React.ReactNode }> = ({ title, subtitle, period, children }) => (
    <div className="relative pl-12 pb-8 border-l-2 border-gray-700 last:border-l-0 last:pb-0">
        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-[#ffdb70] rounded-full border-4 border-[#1E1E1E]"></div>
        <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-md mb-2 inline-block">{period}</span>
        <h3 className="text-xl font-semibold text-white">{title} <span className="text-gray-400 font-normal">- {subtitle}</span></h3>
        <div className="text-gray-400 mt-2 leading-relaxed">{children}</div>
    </div>
);

const SkillItem: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-lg">
        {name}
    </div>
);

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3 cursor-pointer">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white text-center mb-2">{project.title}</h3>
            <p className="text-gray-300 text-center text-sm">{project.description}</p>
        </div>
    </div>
);


export default function MainContent() {
  return (
    <div>
      <ContentSection title="About Me" id="about">
        <p className="text-gray-400 leading-relaxed mb-4">{PROFESSIONAL_SUMMARY}</p>
        <p className="text-gray-400 leading-relaxed">{ACHIEVEMENTS}</p>
      </ContentSection>

      <ContentSection title="Resume" id="resume">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6"><i className="fas fa-briefcase mr-3 text-[#ffdb70]"></i>Experience</h3>
                <div>
                {WORK_EXPERIENCE.map((job: WorkExperienceItem, index: number) => (
                  <TimelineItem key={index} title={job.title} subtitle="Freelance" period="Ongoing">
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        {job.points.map((point: string, pIndex: number) => (
                            <li key={pIndex}>{point}</li>
                        ))}
                    </ul>
                  </TimelineItem>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6"><i className="fas fa-graduation-cap mr-3 text-[#ffdb70]"></i>Education</h3>
                <div>
                {EDUCATION.map((edu: EducationItem, index: number) => {
                    // FIX: Corrected typo in closing tag of TimelineItem component.
                    return (
                      <TimelineItem key={index} title={edu.degree} subtitle={edu.school} period={edu.period}>
                          {/* No additional description for education in the data */}
                      </TimelineItem>
                    );
                })}
                </div>
            </div>
        </div>
      </ContentSection>
      
      <ContentSection title="My Projects" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
      </ContentSection>

      <ContentSection title="My Skills" id="skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {SKILLS.map((skill: Skill) => (
                        <SkillItem key={skill.name} name={skill.name} />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
                 <div className="flex flex-wrap gap-3">
                    {LANGUAGES.map((lang: Language) => (
                        <SkillItem key={lang.name} name={lang.name} />
                    ))}
                </div>
            </div>
        </div>
      </ContentSection>
    </div>
  );
}