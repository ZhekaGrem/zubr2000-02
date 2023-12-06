import {createSharedPathnamesNavigation,Pathnames} from 'next-intl/navigation';
 
export const locales = ['uk', 'en',  'pl', 'ru', 'it', 'fr', 'de', 'sv', 'da'] as const;
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});