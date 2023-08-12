import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

export default function classNames(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
