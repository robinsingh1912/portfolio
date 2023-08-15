export default function Navbar() {
  return (
    <div className='mt-6 sm:mt-2 2xl:mt-5 sticky top-0 bg-black shadow-lg shadow-gray-900'>
      <div className='border-b border-gray-800'>
        <div className={`container mt-10`}>
          <nav className='-mb-px flex gap-x-8 flex-wrap py-2' aria-label='Tabs'>
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
  );
}
