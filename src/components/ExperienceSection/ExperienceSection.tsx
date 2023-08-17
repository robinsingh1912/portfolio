'use client';
import { useState } from 'react';
import { BsArrowRight, BsChevronRight } from 'react-icons/bs';
import EXPERIENCES from '@/__data/experiences.json';
import classNames from '@/utils/classNames';
import { ExperienceListItem } from './ExperienceListItem';

const MAX_EXPERIENCE = 4;
const TOP_EXPERIENCES = EXPERIENCES.slice(0, MAX_EXPERIENCE);
const OTHER_EXPERIENCES = EXPERIENCES.slice(MAX_EXPERIENCE);

export default function ExperienceSection() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <section id='experience' className='container mt-16'>
      <h2 className='font-semibold font-mono text-2xl mb-4'>Experience</h2>
      <ul className='divide-y divide-gray-800'>
        {[...TOP_EXPERIENCES, ...(collapsed ? [] : OTHER_EXPERIENCES)].map(
          (experience) => (
            <ExperienceListItem
              experience={experience}
              key={experience.companyName}
            />
          )
        )}
      </ul>
      {OTHER_EXPERIENCES.length > 0 && (
        <button
          className='w-full bg-gray-100 hover:bg-gray-300 dark:bg-gray-900 group dark:hover:bg-gray-800 py-2 px-4 border-gray-500 hover:border-gray-800 hover:dark:border-gray-300 transition-all border font-mono text-sm rounded-md inline-flex items-center justify-center gap-2'
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed
            ? `Show all ${EXPERIENCES.length} `
            : `Show top ${MAX_EXPERIENCE} `}
          experiences
          <BsChevronRight
            className={classNames('transition-all', {
              'group-hover:rotate-90': collapsed,
              'group-hover:-rotate-90': !collapsed,
            })}
          />
        </button>
      )}
      <a
        href='./resume.pdf'
        className='font-mono font-semibold text-sm inline-flex items-center gap-1 hover:gap-3 hover:underline underline-offset-4 transition-all mt-4'
      >
        View Full Resume <BsArrowRight />
      </a>
    </section>
  );
}
