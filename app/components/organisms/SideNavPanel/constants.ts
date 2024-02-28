import { HeartIcon, HomeIcon, PastaIcon } from "@/app/components/atoms/Icon";

// TODO: Add icons Components
export const SIDE_NAV_ITEMS = [
  {
    title: 'Home',
    icon: HomeIcon,
    isLink: true,
    to: '/'
  },
  {
    title: 'Go to food',
    isLink: true,
    icon: PastaIcon,
    to:'/food'
  },
  {
    title: 'Favorite',
    isLink: true,
    to: '/user/favorite',
    icon: HeartIcon
  }
];
