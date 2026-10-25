import {ArrowUpRight} from 'lucide-react';
import {services} from '../../data/content';

export function Services() {
  return (
    <section className="section wrap" id="care">
      <div className="section-heading">
        <div><h2>Different needs.<br /><span>One welcoming place.</span></h2></div>
        <p>From everyday questions to ongoing support,<br />discover a more connected approach to care.</p>
      </div>
      <div className="service-grid">
        {services.map((s) => (
          <a href="#visit" className="service-card" key={s.id}>
            <div className="service-photo"><img src={s.image} alt={s.alt} loading="lazy" /></div>
            <div className="service-body">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="card-bottom">Explore care <ArrowUpRight size={19} /></span>
            </div>
          </a>
        ))}
      </div>
      <p className="section-note">Illustrative service categories for this design. Services and availability will be confirmed by the clinic.</p>
    </section>
  );
}
