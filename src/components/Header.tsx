import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';

export function Header() {
  return (
    <header>
      <div className='flex justify-between container h-16 items-center'>
        <div className=''></div>
        <div className='flex gap-2 relative'>
          <ThemeSwitcher />
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </header>
  );
}
