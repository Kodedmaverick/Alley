import * as Accordion from '@radix-ui/react-accordion';
import {Plus} from 'lucide-react';
import {faqs} from '../../data/content';

export function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="wrap faq-grid">
        <div>
          <h2>A few things<br /><span>you may be wondering.</span></h2>
          <p>Feeling prepared is part of feeling cared for.</p>
        </div>
        <Accordion.Root type="single" collapsible className="accordion">
          {faqs.map(([q, a], i) => (
            <Accordion.Item value={'item' + i} key={q} className="accordion-item">
              <Accordion.Header>
                <Accordion.Trigger className="accordion-trigger">{q}<Plus size={18} /></Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content">{a}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
