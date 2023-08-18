import EDUCATION from '@/__data/educations.json';

export default function EducationSection() {
  return (
    <section id='education' className='container mt-16'>
      <h2 className='font-semibold font-mono text-2xl mb-4'>Education</h2>
      <ul className='divide-y divide-gray-800 list-none'>
        {EDUCATION.map((education) => (
          <EducationListItem education={education} key={education.sNo} />
        ))}
      </ul>
    </section>
  );
}

interface Props {
  education: {
    sNo: number;
    instituteLogo: string;
    instituteUrl: string;
    degree: string;
    field: string;
    institute: string;
    location: string;
    startYear: string;
    endYear: string;
    description: string;
  };
}

const DEFAULT_LOGO = 'https://static.licdn.com/sc/h/8zzzkhxduv0r11cuxbs48pg03';

function EducationListItem({ education }: Props) {
  return (
    <li className='[all:unset]' key={education.sNo}>
      <div className='flex gap-4 py-4'>
        <a href={education.instituteLogo} target='_blank'>
          <img
            src={education.instituteLogo || DEFAULT_LOGO}
            alt={`${education.institute} logo`}
            className='w-12 h-12 object-cover object-center rounded'
          />
        </a>
        <div className='flex flex-col flex-1'>
          <a
            href={education.instituteLogo}
            target='_blank'
            className='hover:underline underline-offset-2'
          >
            <h3>
              {education.institute}, {education.location}
            </h3>
          </a>
          <small>
            {education.degree} - {education.field}
          </small>
          <small>
            {education.startYear} - {education.endYear || 'Present'}
          </small>

          {education.description && (
            <p className='text-xs [text-wrap:balance] mt-2'>
              {education.description}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
