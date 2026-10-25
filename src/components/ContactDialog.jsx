import {useEffect, useRef} from 'react';
import {X} from 'lucide-react';

// Native modal <dialog>: browser-managed focus trap, Escape to close, focus return.
export function ContactDialog({open, onClose}) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={ref} id="contact-info" aria-labelledby="contact-title" onClose={onClose}>
      <button aria-label="Close contact information" className="dialog-close" onClick={onClose}><X /></button>
      <h2 id="contact-title">Find us at The Alley</h2>
      <p>Address, contact information, and clinic hours will be added here once confirmed.</p>
    </dialog>
  );
}
