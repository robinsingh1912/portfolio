'use client';
import classNames from '@/utils/classNames';
import { useState, useEffect } from 'react';
import { BsChevronDown, BsTranslate } from 'react-icons/bs';

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('english');

  const updateLang = (lang: string) => {
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <>
      <button
        className='inline-flex text-gray-700 dark:text-gray-300 justify-center items-center h-10 p-2 border gap-1 border-gray-400 hover:border-gray-800 dark:hover:border-white shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-0 transition-all'
        onClick={() => setOpen(!open)}
      >
        <BsTranslate />
        <span className='capitalize min-w-[4rem]'>{selectedLang}</span>
        <BsChevronDown />
      </button>
      {open && (
        <ul className='absolute top-full mt-3 right-0 min-w-[9rem] list-none bg-white dark:bg-gray-950 z-50 border rounded-md divide-y overflow-hidden'>
          <li>
            <button
              className={classNames(
                'px-4 py-2 w-full text-start hover:bg-gray-100 dark:hover:bg-gray-900',
                { 'bg-gray-200 dark:bg-gray-800': selectedLang === 'english' }
              )}
              onClick={() => updateLang('english')}
            >
              English
            </button>
          </li>
          <li>
            <button
              className={classNames(
                'px-4 py-2 w-full text-start hover:bg-gray-100 dark:hover:bg-gray-900',
                { 'bg-gray-200 dark:bg-gray-800': selectedLang === 'hindi' }
              )}
              onClick={() => updateLang('hindi')}
            >
              Hindi
            </button>
          </li>
        </ul>
      )}
    </>
  );
};
