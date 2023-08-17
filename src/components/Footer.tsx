export function Footer() {
  return (
    <footer className='py-4 border-t bg-gray-100 dark:border-gray-800 dark:bg-gray-950'>
      <div className='container flex justify-between'>
        <p className='text-xs text-gray-700 dark:text-gray-300'>
          Inspired by{' '}
          <a
            href='https://mongodb.vercel.app/'
            target='_blank'
            rel='noreferrer'
            className='underline underline-offset-2'
          >
            MongoDB Starter
          </a>{' '}
          and coded with ❤️ in 🇮🇳. Built with Next.js and Tailwind CSS, deployed
          with Github pages.
        </p>
      </div>
    </footer>
  );
}
