import {ArrowUpRight, Heart, Plus} from 'lucide-react';
import {photo} from '../../data/images';

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="wrap about-grid">
        <div className="about-image">
          <img src={photo('doctorGrandfather', 1100)} alt="A doctor consulting with a grandfather and grandson" />
          <div className="image-caption"><span>A little more listening.<br />A lot more understanding.</span><Heart strokeWidth={1.3} /></div>
        </div>
        <div className="about-copy">
          <h2>Healthcare begins<br />with <span>being heard.</span></h2>
          <p>We envision a clinic where you feel comfortable asking questions, sharing concerns, and taking the next step in your health.</p>
          <p>At The Alley, the design of care starts with a simple idea: make room for the person, not just the appointment.</p>
          <div className="about-points">
            <div><Plus size={16} /> Time for meaningful conversations</div>
            <div><Plus size={16} /> A clear path to your next step</div>
            <div><Plus size={16} /> A welcoming space for every family</div>
          </div>
          <a className="text-link" href="#visit">Get to know your clinic <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
