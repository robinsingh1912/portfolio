const DEFAULT_LOGO = 'https://static.licdn.com/sc/h/aajlclc14rr2scznz5qm2rj9u';

export interface ExperienceListItemProps {
  experience: {
    companyLogo?: string;
    companyUrl?: string;
    title: string;
    companyName: string;
    employmentType: string;
    startDate: string;
    location: string;
    locationType: string;
    description?: string;
    skills: string[];
    endDate?: string;
  };
}
export function ExperienceListItem({ experience }: ExperienceListItemProps) {
  return (
    <li className='[all:unset]' key={experience.companyName}>
      <div className='flex gap-4 py-4'>
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
            {experience.skills?.map((skill: string) => (
              <div
                className='inline-flex justify-center px-2 py-1 border border-slate-300 dark:border-slate-800 font-medium rounded-md  text-xs font-mono transition-all'
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
