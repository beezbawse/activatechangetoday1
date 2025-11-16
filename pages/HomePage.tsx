
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, SERVICES } from '../constants';
import type { Testimonial } from '../types';

const HeroSection: React.FC = () => (
    <div className="bg-primary-light">
        <div className="container mx-auto px-4 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary-dark leading-tight">
                    Unlock the Confident, Powerful You.
                </h1>
                <p className="mt-6 text-lg text-secondary max-w-xl mx-auto lg:mx-0">
                    It's time to move past self-doubt and step into your power. Whether you're navigating a life change, climbing the corporate ladder, or building your empire, I'm here to help you build the unshakable confidence to thrive.
                </p>
                <a href="#contact" className="mt-8 inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg text-lg">
                    Book a Free 30-Min Session
                </a>
            </div>
            <div>
                <img src="https://picsum.photos/id/367/800/600" alt="Confident woman smiling" className="rounded-lg shadow-2xl object-cover w-full h-full" />
            </div>
        </div>
    </div>
);

const ServicesOverview: React.FC = () => (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark">How I Can Help You</h2>
                <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">I specialize in helping women just like you overcome unique challenges and build lasting confidence in all areas of life.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
                    <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">{service.title}</h3>
                        <p className="text-secondary">{service.description}</p>
                        <Link to="/services" className="inline-block mt-6 text-primary font-semibold hover:text-primary-dark transition">
                            Learn More &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
        <p className="text-secondary italic flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center mt-6">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
            <div>
                <p className="font-bold text-primary-dark">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => (
    <div className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark">What My Clients Are Saying</h2>
                <p className="mt-4 text-lg text-secondary">Real stories from women who have transformed their lives.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    </div>
);


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <ServicesOverview />
            <TestimonialsSection />
        </div>
    );
};

export default HomePage;
