import {Users, Heart, ShieldCheck} from 'lucide-react';

export function CareBand() {
  return (
    <section className="care-band">
      <div className="wrap band-inner">
        <p>Care that meets you<br /> <strong>where you are.</strong></p>
        <div><Users /><span>Every generation</span></div>
        <div><Heart /><span>The whole person</span></div>
        <div><ShieldCheck /><span>A thoughtful approach</span></div>
      </div>
    </section>
  );
}
