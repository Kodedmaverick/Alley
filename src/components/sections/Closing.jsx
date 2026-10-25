import {ArrowUpRight, Sprout} from 'lucide-react';
import {BookingDialog} from '../BookingDialog';

export function Closing() {
  return (
    <section className="wrap closing">
      <h2>A healthier tomorrow<br />starts with a conversation.</h2>
      <BookingDialog variant="secondary">Make time for your health <ArrowUpRight size={18} /></BookingDialog>
      <div className="closing-decoration"><Sprout strokeWidth={0.65} /></div>
    </section>
  );
}
