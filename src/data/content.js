import {Users, Stethoscope, Heart, Sprout} from 'lucide-react';
import {photo} from './images';

export const navLinks = [
  ['Our care', 'care'],
  ['About us', 'about'],
  ['Your visit', 'visit'],
  ['FAQs', 'faq'],
];

export const services = [
  {id: 'family', image: photo('doctorMotherSon', 700), alt: 'A doctor talking with a mother and her son', title: 'Family medicine', description: 'A familiar place for your everyday health and the people you love.', icon: Users},
  {id: 'walk-in', image: photo('doctorChild', 700), alt: 'A doctor examining a child with a stethoscope', title: 'Walk-in care', description: 'A little reassurance when life doesn’t go according to plan.', icon: Stethoscope},
  {id: 'preventive', image: photo('doctorMotherChild', 700), alt: 'A doctor consulting with a mother and child', title: 'Preventive health', description: 'Thoughtful conversations and checkups with your future in mind.', icon: Heart},
  {id: 'ongoing', image: photo('doctorGrandfather', 700), alt: 'A doctor meeting with a grandfather and grandson', title: 'Ongoing care', description: 'Support that looks at the whole picture, every step of the way.', icon: Sprout},
];

export const steps = [
  ['01', 'Find the right care', 'Explore our services and find the support that fits your needs.'],
  ['02', 'Plan your visit', 'Booking options, opening hours, and directions will be added here.'],
  ['03', 'Let’s talk about you', 'Bring your questions. Your visit is a space to feel heard.'],
];

export const faqs = [
  ['How do I book an appointment?', 'Use the booking button to preview the appointment entry point. The clinic’s booking service has not yet been connected.'],
  ['What should I bring to my first visit?', 'Visit preparation details will be provided by the clinic before launch, including any documents or information you may need.'],
  ['Where is the clinic located?', 'The clinic address, directions, contact details, and opening hours will be added once confirmed.'],
  ['Are you accepting new patients?', 'New-patient registration and availability will be confirmed by the clinic.'],
];
