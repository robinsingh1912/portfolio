import { BsGithub, BsPatchCheckFill } from 'react-icons/bs';
import Button from '@/components/Button/Button';

const PROFILE_IMAGE_URL = './avatar.jpeg';

export default function HeroSection() {
  return (
    <section>
      <div
        className='h-48 w-full lg:h-64 bg-gradient-radial dark:bg-gradient-radial-dark'
        style={{
          backgroundSize: '10px 10px',
        }}
      ></div>
      <div
        className={`container -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}
      >
        <div className='relative group h-24 w-24 rounded-md overflow-hidden sm:h-32 sm:w-32 ring-2 ring-white ring-offset-4 ring-offset-black'>
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
          <div className='mt-6'>
            <Button href='https://github.com/robinsingh1912' Icon={BsGithub}>
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
