import { BsFillSendFill } from 'react-icons/bs';

export default function ContactSection() {
  return (
    <section id='contact' className={`container mt-16 grid gap-4`}>
      <h2 className=''>Contact</h2>

      <p className='max-w-2xl'>
        Feel free to reach out if you have any questions or collaboration
        opportunities. I’m always eager to work on exciting projects and
        contribute to the success of innovative teams. Let’s build amazing
        experiences together!
      </p>
      <div className='sm:border-l sm:border-transparent'>
        <h3 className='font-display text-base font-semibold text-white'>
          Follow me on:
        </h3>
        <ul role='list' className='flex gap-x-10 text-white mt-4 list-none'>
          <li className='border-gray-800'>
            LinkedIn:{' '}
            <a
              aria-label='Linkedin'
              className='transition hover:text-neutral-200'
              href=''
            >
              @robinsingh1912
            </a>
          </li>
        </ul>
      </div>
      <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
        <div className='relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:duration-1000 animate-pulse'></div>
          <a
            href='mailto:robinsingh1912@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='relative px-6 py-3 bg-black leading-none flex items-center divide-x divide-gray-600  text-sm font-medium rounded-md font-mono focus:outline-none focus:ring-0 transition-all justify-center'
          >
            <BsFillSendFill className='mr-3 h-4 w-4' />
            <span className='text-gray-100 pl-3 group-hover:text-pink-600 transition-colors'>
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
