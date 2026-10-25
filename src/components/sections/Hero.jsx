import {ArrowUpRight, ArrowRight, Heart, Stethoscope, Sprout} from 'lucide-react';
import {BookingDialog} from '../BookingDialog';
import {photo} from '../../data/images';

export function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <h1>Good care.<br />Real connection.<br /><span>A healthier you.</span></h1>
        <p>A welcoming place for you and your family.<br className="desktop" /> Personal care, thoughtful conversations, and support<br className="desktop" /> for every chapter of life.</p>
        <div className="hero-actions">
          <BookingDialog />
          <a className="text-link" href="#care">Explore our care <ArrowRight size={17} /></a>
        </div>
        <div className="hero-foot"><div className="small-icon"><Heart size={18} /></div><span>People first. Always.</span><span className="hairline" /><span>Care for the whole family</span></div>
      </div>
      <div className="hero-art">
        <div className="hero-photo">
          <img src={photo('doctorMotherSon', 1000)} alt="A doctor discussing care with a mother and her son" />
          <span className="photo-tag"><span className="green-dot" /> A personal approach to care</span>
        </div>
        <div className="art-bottom">
          <div className="blue-block"><Stethoscope strokeWidth={1.1} /><span>Here for<br />your everyday.</span><ArrowUpRight size={23} /></div>
          <div className="leaf-block family-photo"><img src={photo('newbornFamily', 600)} alt="Parents cuddling their newborn baby" /></div>
        </div>
        <div className="floating-seal"><Sprout size={21} /><span>ROOTED<br />IN CARE</span></div>
      </div>
    </section>
  );
}
