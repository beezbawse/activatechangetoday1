// FIX: Import React to use the React.ReactNode type.
import type React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}
