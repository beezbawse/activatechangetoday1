
import React, { useState } from 'react';
import { FAQS } from '../constants';
import type { FAQ } from '../types';

const AccordionIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg className={`w-6 h-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

const FAQItem: React.FC<{ faq: FAQ; index: number; openIndex: number | null; setOpenIndex: (index: number | null) => void }> = ({ faq, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    const toggleOpen = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={toggleOpen}
                className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
            >
                <h3 className="text-lg font-semibold text-primary-dark">{faq.question}</h3>
                <AccordionIcon isOpen={isOpen} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-6 pb-5 text-secondary">
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-dark">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
                        Find answers to common questions about confidence coaching and how it works.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
                    {FAQS.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            faq={faq}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                        />
                    ))}
                </div>

                 <div className="mt-20 text-center">
                    <h2 className="text-2xl font-serif text-primary-dark mb-4">Still have questions?</h2>
                    <p className="text-secondary text-lg max-w-xl mx-auto mb-6">
                        I'd love to hear from you. Reach out, and let's start a conversation.
                    </p>
                    <a href="#contact" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg">
                        Contact Me Directly
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
