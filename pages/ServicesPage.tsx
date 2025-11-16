
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-primary">
        <div className="flex items-center mb-6">
            <div className="bg-primary-light p-3 rounded-full mr-4">
                {service.icon}
            </div>
            <div>
                <h3 className="text-2xl font-serif font-bold text-primary-dark">{service.title}</h3>
            </div>
        </div>
        <p className="text-secondary mb-6">{service.description}</p>
        <div className="space-y-4 mb-8 flex-grow">
            {service.details.map((detail, index) => (
                <div key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-secondary">{detail}</span>
                </div>
            ))}
        </div>
        <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">
            Start Your Transformation
        </a>
    </div>
);

const ServicesPage: React.FC = () => {
    return (
        <div className="py-16 sm:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-dark">Your Path to Confidence</h1>
                    <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
                        Tailored coaching packages designed to meet you where you are and guide you to where you want to be. Each program is a partnership to unlock your potential.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>

                 <div className="mt-20 text-center bg-primary-light p-10 rounded-lg">
                    <h2 className="text-3xl font-serif text-primary-dark mb-4">Ready to Begin?</h2>
                    <p className="text-secondary text-lg max-w-3xl mx-auto mb-6">
                        The first step is a simple conversation. Let's explore your goals and see how we can work together.
                    </p>
                    <a href="#contact" className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg text-lg">
                        Book Your Free 30-Min Session
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
