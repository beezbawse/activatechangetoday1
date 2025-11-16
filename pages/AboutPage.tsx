
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-dark">My Journey to Empowering Women</h1>
                    <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">A little about me and why I'm so passionate about this work.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <img 
                            src="https://picsum.photos/id/237/600/800" 
                            alt="Coach Jane Doe" 
                            className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[3/4]"
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-serif text-primary-dark mb-4">Hello, I'm Jane Doe.</h2>
                        <div className="space-y-4 text-secondary text-base leading-relaxed">
                            <p>
                                I know what it’s like to feel stuck. For years, I navigated the demanding corporate world, feeling undervalued and unheard. I've also witnessed the silent struggles of friends and family rebuilding their lives after profound personal changes. I saw brilliant, capable women dim their own light because they'd lost touch with their inner strength.
                            </p>
                            <p>
                                My own journey of rediscovering my confidence wasn't a straight line. It was filled with challenges, learning, and ultimately, a profound transformation. This experience ignited a passion in me: to create the support system I wish I'd had. I decided to channel my experiences and professional training into a career dedicated to helping other women find their voice, own their worth, and lead lives of purpose and fulfillment.
                            </p>
                            <p>
                                As a certified coach, my approach is built on a foundation of empathy, trust, and proven strategies. I don’t offer one-size-fits-all solutions. Instead, I partner with you to uncover your unique strengths, dismantle the beliefs holding you back, and create a clear, actionable path toward the confident life you deserve.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 bg-primary-light p-10 rounded-lg">
                    <h3 className="text-3xl font-serif text-primary-dark text-center mb-8">My Credentials & Commitment</h3>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <li className="bg-white p-6 rounded-md shadow">
                            <h4 className="font-bold text-lg text-primary-dark">Certified Professional Coach (CPC)</h4>
                            <p className="text-sm text-secondary mt-1">Institute for Professional Excellence in Coaching (iPEC)</p>
                        </li>
                        <li className="bg-white p-6 rounded-md shadow">
                            <h4 className="font-bold text-lg text-primary-dark">Energy Leadership™ Index Master Practitioner</h4>
                            <p className="text-sm text-secondary mt-1">iPEC</p>
                        </li>
                        <li className="bg-white p-6 rounded-md shadow">
                            <h4 className="font-bold text-lg text-primary-dark">Member of International Coaching Federation (ICF)</h4>
                            <p className="text-sm text-secondary mt-1">Adhering to the highest ethical standards</p>
                        </li>
                        <li className="bg-white p-6 rounded-md shadow">
                             <h4 className="font-bold text-lg text-primary-dark">15+ Years Corporate Experience</h4>
                             <p className="text-sm text-secondary mt-1">Leadership & Development Roles</p>
                        </li>
                         <li className="bg-white p-6 rounded-md shadow">
                             <h4 className="font-bold text-lg text-primary-dark">B.A. in Psychology</h4>
                             <p className="text-sm text-secondary mt-1">Understanding the science of human behavior</p>
                        </li>
                         <li className="bg-white p-6 rounded-md shadow">
                             <h4 className="font-bold text-lg text-primary-dark">Continuous Education</h4>
                             <p className="text-sm text-secondary mt-1">Committed to the latest coaching methodologies</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
