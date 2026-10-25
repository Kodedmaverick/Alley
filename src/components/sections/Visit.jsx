import {BookingDialog} from '../BookingDialog';
import {steps} from '../../data/content';

export function Visit() {
  return (
    <section className="section wrap visit-section" id="visit">
      <div className="section-heading">
        <div><h2>Your next step,<br /><span>made a little easier.</span></h2></div>
        <BookingDialog />
      </div>
      <div className="steps">
        {steps.map(([n, title, text]) => (
          <div key={n}><span className="step-number">{n}</span><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </section>
  );
}
