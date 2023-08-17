import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

interface Props {
  Icon: IconType;
  href: string;
}
export default function Button({
  href,
  Icon,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className='relative group'>
      <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:duration-1000 animate-pulse'></div>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='relative px-6 py-3 bg-slate-100 dark:bg-black leading-none flex gap-3 items-center divide-x divide-gray-600  text-sm font-medium rounded-md font-mono focus:outline-none focus:ring-0 transition-all justify-center'
      >
        {Icon && <Icon className='h-4 w-4' />}
        <span className='pl-3 group-hover:text-pink-600 transition-colors'>
          {children}
        </span>
      </a>
    </div>
  );
}
