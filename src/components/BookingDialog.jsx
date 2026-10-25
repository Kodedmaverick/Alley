import * as Dialog from '@radix-ui/react-dialog';
import {ArrowUpRight, ArrowRight, CalendarDays, X} from 'lucide-react';
import {Button} from './ui/Button';

// Accessible preview dialog (Radix handles focus trap, Escape, and focus return).
export function BookingDialog({children, variant = 'default'}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant={variant}>{children || <>Book an appointment <ArrowUpRight size={17} /></>}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Close className="dialog-close" aria-label="Close"><X /></Dialog.Close>
          <div className="icon-tile"><CalendarDays /></div>
          <Dialog.Title>Let’s make time for your health.</Dialog.Title>
          <Dialog.Description>This is a design preview. Online booking will be available here once the clinic’s appointment service is connected.</Dialog.Description>
          <p className="preview-note">No appointment is created and no personal information is collected.</p>
          <Dialog.Close asChild>
            <Button>Back to the website <ArrowRight size={17} /></Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
