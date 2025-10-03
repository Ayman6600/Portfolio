'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Education = () => {
    const container = React.useRef<HTMLDivElement>(null);

    // Animate in
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'education-in',
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
                    id: 'education-out',
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

    return (
        <section className="pb-section" id="education">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Education Journey
                </h2>

                <p className="pb-3 border-b text-2xl md:text-4xl font-thin mb-15 slide-up-and-fade">
                    My Academic Background
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-10">
                    {/* Degree 1 */}
                    <div className="md:col-span-6 slide-up-and-fade">
                        <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                            B.E. in Computer Science
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            KLS Vishwanathrao Deshpande Institute of Technology{' '}
                            <br />
                            2022 – 2026
                        </p>
                        <p className="text-base mt-3 text-muted-foreground">
                            Focused on software engineering, web development,
                            and embedded systems. Completed major projects in
                            MERN stack and AI applications.
                        </p>
                    </div>

                    {/* Degree 2 */}
                    <div className="md:col-span-6 slide-up-and-fade">
                        <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                            Pre-University College (PUC)
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Sana Shaheen College <br />
                            Graduated: 2022
                        </p>
                        <p className="text-base mt-3 text-muted-foreground">
                            Completed Pre-University education with focus on
                            Science and Mathematics, building a strong
                            foundation for engineering studies.
                        </p>
                    </div>

                    {/* Degree 3 */}
                    <div className="md:col-span-6 slide-up-and-fade">
                        <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                            High School
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            AL MUNA INTL&apos;S SCHOOL, Dammam, KSA <br />
                            2016 - 2020
                        </p>
                        <p className="text-base mt-3 text-muted-foreground">
                            Studied Physics, Chemistry, and Mathematics with
                            Computer Science. Built a strong foundation in logic
                            and problem-solving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
