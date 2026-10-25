import {ArrowUpRight} from 'lucide-react';
import {asset} from '../lib/assets';

export function Footer({onOpenContact}) {
  return (
    <footer className="wrap">
      <div className="footer-top">
        <div>
          <a href="#home" className="brand footer-brand"><img src={asset('logo.png')} alt="The Alley Medical Clinic" /></a>
          <p>Personal care. Meaningful connection.</p>
        </div>
        <div>
          <span className="footer-label">EXPLORE</span>
          <a href="#care">Our care</a>
          <a href="#about">About The Alley</a>
          <a href="#visit">Your visit</a>
        </div>
        <div>
          <span className="footer-label">HERE TO HELP</span>
          <a href="#faq">Frequently asked questions</a>
          <button onClick={onOpenContact}>Contact & location <ArrowUpRight size={14} /></button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} The Alley Medical Clinic</span>
        <span>Design preview · Clinic information to be confirmed</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
