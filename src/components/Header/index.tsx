import Link from 'next/link';
import { useState } from 'react';

import s from './Header.module.scss';

import Container from '@/components/layouts/Container';
import Switch from '@/components/Switch';

import LogoDark from '~/svg/df-logo-dark.svg';
import LogoLight from '~/svg/df-logo-light.svg';

const links = [
  { href: '/', label: 'Styles' },
  { href: '/', label: 'Components' },
  { href: '/login', label: 'login' },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);



  const handleThemeChange = () => {
    setIsDark(!isDark);
  };


  return (
    <header className={`${s.Header} ${isDark ? s.Dark : ''}`}>
      <Container>
        <Link href='/'>
          <a className='home-link'>{isDark ? <LogoLight /> : <LogoDark />}</a>
        </Link>
        <nav>
          <ul>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch
          labelText=''
          labelA='Light Mode'
          labelB='Dark Mode'
          id='themeToggle'
          onClick={handleThemeChange}
        />
      </Container>
    </header>
  );
}
