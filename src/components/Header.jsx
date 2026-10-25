import {useState} from 'react';
import {ArrowUpRight, Menu, X} from 'lucide-react';
import {BookingDialog} from './BookingDialog';
import {navLinks} from '../data/content';
import {asset} from '../lib/assets';

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header wrap">
      <a href="#home" className="brand" aria-label="The Alley Medical Clinic home"><img src={asset('logo.png')} alt="The Alley Medical Clinic" /></a>
      <nav className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
        {navLinks.map(([label, id]) => <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{label}</a>)}
      </nav>
      <div className="header-book"><BookingDialog>Book a visit <ArrowUpRight size={16} /></BookingDialog></div>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
    </header>
  );
}
