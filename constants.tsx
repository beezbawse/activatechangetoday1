
import React from 'react';
import type { Testimonial, FAQ, Service } from './types';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with her was life-changing. I rediscovered my strength after my divorce and now feel more in control and optimistic about my future than ever before.",
    name: "Sarah L.",
    role: "Recently Divorced",
    imageUrl: "https://picsum.photos/id/1027/200/200"
  },
  {
    quote: "I was consistently overlooked for promotions. This coaching helped me find my voice, assert my value, and finally get the recognition and respect I deserve at work.",
    name: "Jennifer M.",
    role: "Corporate Manager",
    imageUrl: "https://picsum.photos/id/1011/200/200"
  },
  {
    quote: "As an entrepreneur, I struggled with imposter syndrome. I now have the confidence to lead my team, make bold decisions, and grow my business with conviction.",
    name: "Emily R.",
    role: "Business Owner",
    imageUrl: "https://picsum.photos/id/1012/200/200"
  }
];

export const FAQS: FAQ[] = [
    {
        question: "Who is confidence coaching for?",
        answer: "Confidence coaching is for any woman who feels she's not living up to her full potential due to self-doubt, past experiences, or challenging life transitions. Whether you're navigating changes at home, striving for more in your career, or leading a business, this coaching provides the tools to build unshakeable self-belief."
    },
    {
        question: "What can I expect from a coaching session?",
        answer: "Our sessions are a safe, confidential space for you to explore your challenges and aspirations. We'll work together to identify limiting beliefs, set meaningful goals, and develop practical strategies. Expect empathetic listening, powerful questions, and actionable steps to move you forward. It's a collaborative partnership focused entirely on your growth."
    },
    {
        question: "How is coaching different from therapy?",
        answer: "While both are valuable, therapy often focuses on healing past trauma and treating clinical conditions. Coaching is forward-focused, centered on setting and achieving future goals. We work on closing the gap between where you are now and where you want to be, empowering you to create the life you desire."
    },
    {
        question: "How long does the coaching process take?",
        answer: "The duration varies for each individual. Most clients experience significant shifts within a 3-month period. We offer different packages to suit your needs, and progress is often noticeable after just a few sessions. The goal is to equip you with sustainable skills, not to create long-term dependency."
    },
    {
        question: "Is there a free consultation?",
        answer: "Absolutely. I offer a complimentary 30-minute discovery session. This is a chance for us to connect, discuss your goals, and see if we're a good fit for each other. There's no obligation, just an open conversation to explore the possibilities."
    }
];

export const SERVICES: Service[] = [
  {
    icon: <HomeIcon />,
    title: "Reclaiming Your Power at Home",
    description: "Navigate life's major transitions like divorce, loss, or financial strain with renewed strength and a clear sense of self.",
    details: [
        "Rebuilding self-esteem after a major life event.",
        "Developing resilience and coping strategies.",
        "Setting healthy boundaries with family.",
        "Creating a vision for your new chapter.",
        "Rediscovering personal joy and purpose."
    ]
  },
  {
    icon: <BriefcaseIcon />,
    title: "Thriving in Your Corporate Career",
    description: "Break through barriers, command respect, and achieve the recognition you deserve in the professional world.",
    details: [
        "Developing executive presence and assertive communication.",
        "Overcoming imposter syndrome and self-doubt.",
        "Navigating workplace politics with confidence.",
        "Strategizing for promotions and leadership roles.",
        "Building a powerful professional network."
    ]
  },
  {
    icon: <RocketIcon />,
    title: "Leading with Edge as an Entrepreneur",
    description: "Sharpen your leadership skills, overcome business hurdles, and scale your vision with unwavering confidence.",
    details: [
        "Cultivating a resilient and decisive leadership mindset.",
        "Mastering confident sales and negotiation techniques.",
        "Inspiring and leading your team effectively.",
        "Managing stress and preventing burnout.",
        "Embracing risk and making bold business moves."
    ]
  }
];
