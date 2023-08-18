export default function Navbar() {
  return (
    <div className='mt-6 sm:mt-2 2xl:mt-5 sticky top-0 dark:bg-black shadow-lg bg-white shadow-gray-100 dark:shadow-gray-900 z-10'>
      <div className='border-b dark:border-gray-800 border-gray-300'>
        <div className={`container mt-10`}>
          <nav
            className='-mb-px flex gap-x-4 sm:gap-x-8 flex-wrap'
            aria-label='Tabs'
          >
            <a
              href='#about'
              className='hover:border-pink-600 dark:hover:text-white hover:text-black active:border-pink-600 border-transparent text-gray-700 dark:text-gray-400 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-mono'
            >
              About
            </a>
            <a
              href='#experience'
              className='hover:border-pink-600 dark:hover:text-white hover:text-black active:border-pink-600 border-transparent text-gray-700 dark:text-gray-400 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-mono'
            >
              Experience
            </a>
            <a
              href='#education'
              className='hover:border-pink-600 dark:hover:text-white hover:text-black active:border-pink-600 border-transparent text-gray-700 dark:text-gray-400 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-mono'
            >
              Education
            </a>
            <a
              href='#contact'
              className='hover:border-pink-600 dark:hover:text-white hover:text-black active:border-pink-600 border-transparent text-gray-700 dark:text-gray-400 whitespace-nowrap py-5 px-1 border-b-2 font-medium text-sm font-mono'
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
