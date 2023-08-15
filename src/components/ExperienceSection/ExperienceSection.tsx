import { BsArrowRight } from 'react-icons/bs';
import EXPERIENCES from './experiences.json';

const DEFAULT_LOGO = 'https://static.licdn.com/sc/h/aajlclc14rr2scznz5qm2rj9u';
export default function ExperienceSection() {
  return (
    <section id='experience' className='container mt-16'>
      <h2 className='font-semibold font-mono text-2xl mb-4'>Experience</h2>
      <div className='divide-y divide-gray-800'>
        {EXPERIENCES.map((experience) => (
          <div className='flex gap-4 py-4' key={experience.companyName}>
            <a href={experience.companyUrl} target='_blank'>
              <img
                src={experience.companyLogo || DEFAULT_LOGO}
                alt={`${experience.companyName} logo`}
                className='w-12 h-12 object-cover object-center'
              />
            </a>
            <div className='flex flex-col flex-1'>
              <h3>{experience.title}</h3>
              <small>
                {experience.companyName} · {experience.employmentType}
              </small>
              <small>
                {experience.startDate} - {experience.endDate || 'Present'}
              </small>
              <small>
                {experience.location} · {experience.locationType}
              </small>
              {experience.description && (
                <p className='text-xs [text-wrap:balance] mt-2'>
                  {experience.description}
                </p>
              )}
              <div className='flex gap-2 mt-2 flex-wrap'>
                {experience.skills?.map((skill) => (
                  <div
                    className='inline-flex justify-center px-2 py-1 border border-gray-800 hover:border-white shadow-sm font-medium rounded-md text-white text-xs font-mono bg-black focus:outline-none focus:ring-0 transition-all'
                    key={skill}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href='./resume.pdf'
        className='font-mono font-semibold text-sm inline-flex items-center gap-1 hover:gap-3 hover:underline underline-offset-4 transition-all'
      >
        View Full Resume <BsArrowRight />
      </a>
    </section>
  );
}
