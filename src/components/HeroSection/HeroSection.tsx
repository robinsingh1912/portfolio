import { BsGithub, BsPatchCheckFill } from 'react-icons/bs';

const PROFILE_IMAGE_URL =
  'https://media.licdn.com/dms/image/C5103AQHKW4CYTw4qBw/profile-displayphoto-shrink_400_400/0/1517339505489?e=1694649600&v=beta&t=u037OaLDs7jgPdIwUA69DFyFcSmBAqKDbnWVNO3LIjc';

export default function HeroSection() {
  return (
    <section>
      <div
        className='h-48 w-full lg:h-64 
          bg-gradient-to-r from-indigo-200 via-red-200 to-blue-100'
      ></div>
      <div
        className={`container -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}
      >
        <div className='relative group h-24 w-24 rounded-full overflow-hidden sm:h-32 sm:w-32 ring-4 ring-black ring-offset-4'>
          <img
            src={PROFILE_IMAGE_URL}
            alt='robin singh'
            width={300}
            height={300}
          />
        </div>
        <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
          <div className='flex min-w-0 flex-1 items-center gap-4'>
            <h1 className='text-3xl font-semibold truncate'>ROBIN SINGH</h1>
            <BsPatchCheckFill className='w-6= h-6 text-[#0070F3]' />
          </div>
          <div className='flex gap-4 mt-6 '>
            {/* <a
                  href={`https://github.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                >
                  <BsLinkedin className="h-5 w-5 text-white" />
                </a> */}
            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <div className='relative group'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:duration-1000 animate-pulse'></div>
                <a
                  href='https://github.com/robinsingh1912'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative px-6 py-3 bg-black leading-none flex items-center divide-x divide-gray-600  text-sm font-medium rounded-md font-mono focus:outline-none focus:ring-0 transition-all justify-center'
                >
                  <BsGithub className='mr-3 h-5 w-5' />
                  <span className='text-gray-100 pl-3 group-hover:text-pink-600 transition-colors'>
                    View GitHub Profile
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className='mt-6 sm:mt-2 2xl:mt-5'>
        <div className='border-b border-gray-800'>
          <div className={`container mt-10`}>
            <nav className='-mb-px flex gap-x-8 flex-wrap' aria-label='Tabs'>
              <a
                href='#about'
                className='hover:border-pink-600 hover:text-white active:border-pink-600 border-transparent text-gray-400 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono'
              >
                About
              </a>
              <a
                href='#experience'
                className='hover:border-pink-600 hover:text-white active:border-pink-600 border-transparent text-gray-400 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono'
              >
                Experience
              </a>
              <a
                href='#projects'
                className='hover:border-pink-600 hover:text-white active:border-pink-600 border-transparent text-gray-400 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='hover:border-pink-600 hover:text-white active:border-pink-600 border-transparent text-gray-400 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono'
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
