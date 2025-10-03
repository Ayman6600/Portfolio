'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Certificates = () => {
    const container = React.useRef<HTMLDivElement>(null);

    // Animate in
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'certificates-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    // Animate out
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'certificates-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    // Certificate data
    const certificates = [
        {
            id: 1,
            title: 'MERN Stack Developer',
            issuer: 'Online Certification',
            date: '2025',
            description:
                'Certification in MongoDB, Express.js, React, and Node.js full-stack development.',
            credentialLink: '',
            image: '/certificates/mern.jpg',
        },
        {
            id: 2,
            title: 'JP Morgan Certification',
            issuer: 'JP Morgan',
            date: 'September 2025',
            description:
                '✨ Excited to share that I have successfully completed the J.P. Morgan Software Engineering Job Simulation on Forage! 🚀\n\nGained hands-on experience in project setup, Kafka & H2 integration, REST API development, and controller implementation.',
            credentialLink: 'https://www.credly.com/badges/your-badge-url',
            image: '/certificates/jp.jpeg',
        },
    ];

    return (
        <section className="pb-section" id="certificates">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Certifications
                </h2>

                <p className="pb-3 border-b text-2xl md:text-4xl font-thin mb-15 slide-up-and-fade">
                    Professional Credentials
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-10">
                    {certificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="md:col-span-6 slide-up-and-fade"
                        >
                            <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                                {certificate.title}
                            </h3>
                            <p className="text-lg text-muted-foreground">
                                {certificate.issuer} <br />
                                {certificate.date}
                            </p>
                            <p className="text-base mt-3 text-muted-foreground">
                                {certificate.description}
                            </p>
                            {certificate.credentialLink && (
                                <a
                                    href={certificate.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline mt-2 inline-block"
                                >
                                    View Credential
                                </a>
                            )}
                            {/* Certificate Image using Next.js Image */}
                            {certificate.image && (
                                <Image
                                    src={certificate.image}
                                    alt={`${certificate.title} Certificate`}
                                    className="mt-4 rounded-lg shadow-md"
                                    width={600} // adjust width
                                    height={400} // adjust height
                                    priority={true} // optional: for better LCP
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
