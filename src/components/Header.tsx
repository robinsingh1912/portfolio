import { BsMoonStars, BsTranslate } from 'react-icons/bs';

export function Header() {
  return (
    <header>
      <div className="flex justify-between container h-16 items-center">
        <div className=""></div>
        <div className="flex gap-4">
          <button className="inline-flex justify-center p-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-0 transition-all">
            <BsMoonStars />
          </button>
          <button>
            <BsTranslate />
          </button>
        </div>
      </div>
    </header>
  );
}
