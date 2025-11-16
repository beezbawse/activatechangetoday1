
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission to a backend
        console.log('Form data submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    };

    return (
        <div id="contact" className="bg-primary-light p-8 rounded-lg shadow-lg w-full max-w-2xl">
            {submitted ? (
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary-dark">Thank You!</h3>
                    <p className="text-secondary mt-2">Your message has been sent. I will get back to you shortly.</p>
                </div>
            ) : (
                <>
                    <h3 className="text-3xl font-serif text-primary-dark text-center mb-2">Get In Touch</h3>
                    <p className="text-center text-secondary mb-6">Have a question or want to book a session? Send me a message!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea name="message" id="message" rows={4} placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
        <div className="container mx-auto py-12 px-4 flex justify-center">
             <ContactForm />
        </div>
      <div className="bg-slate-900">
        <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Activate Change Today. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-slate-400 hover:text-white">Privacy Policy</Link>
            <Link to="#" className="text-slate-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;