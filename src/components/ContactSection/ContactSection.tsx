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
        <Button Icon={BsFillSendFill}>Contact Me</Button>
      </div>
    </section>
  );
}
