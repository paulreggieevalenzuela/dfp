import s from './TopNav.module.scss';

import Avatar from '@/components/Avatar';

import NavLogo from '~/svg/nav-logo.svg';

type Props = {
  tabNames: TabNames[];
};

type TabNames = {
  label: string;
};

const TopNav = ({ tabNames }: Props) => {
  return (
    <div className={s.TopNav}>
      <div className={s.navLogo}>
        <NavLogo />
      </div>
      <ul>
        {tabNames.map((tabName, key) => {
          return (
            <li key={key} className={s.navStyle}>
              {tabName.label}
            </li>
          );
        })}
      </ul>
      {/* avatar src to be updated once we can fetch user data with corresponding avatars */}
      <div className={s.navAvatar}>
        <Avatar src='/images/mock/profile3.png' />
      </div>
    </div>
  );
};

export default TopNav;
