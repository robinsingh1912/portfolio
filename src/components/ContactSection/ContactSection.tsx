import { BsFillSendFill } from 'react-icons/bs';
import Button from '@/components/Button/Button';

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
        <h3 className='font-display text-base font-semibold'>Follow me on:</h3>
        <ul role='list' className='flex gap-x-10 mt-4 list-disc'>
          <li className='border-gray-800'>
            LinkedIn:{' '}
            <a
              aria-label='Linkedin'
              className='transition dark:hover:text-neutral-300 hover:text-neutral-700'
              href='https://www.linkedin.com/in/robinsingh1912/'
            >
              @robinsingh1912
            </a>
          </li>
        </ul>
      </div>
      <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
        <Button href='mailto:robinsingh1912@gmail.com' Icon={BsFillSendFill}>
          Contact Me
        </Button>
      </div>
    </section>
  );
}
