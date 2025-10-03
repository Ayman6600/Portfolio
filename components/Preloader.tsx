'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.out',
                },
            });

            // Fast letter entry
            tl.to('.name-text span', {
                y: 0,
                stagger: {
                    each: 0.04,
                    from: 'center',
                },
                duration: 0.3,
            })
                // Quick jump effect
                .to('.name-text span', {
                    y: -20,
                    stagger: {
                        each: 0.02,
                        from: 'random',
                    },
                    duration: 0.2,
                    ease: 'power2.inOut',
                    repeat: 1,
                    yoyo: true,
                })
                // Fast scale pulse
                .to('.name-text span', {
                    scale: 1.1,
                    stagger: 0.01,
                    duration: 0.15,
                    ease: 'power1.inOut',
                    yoyo: true,
                    repeat: 1,
                })
                // Quick exit
                .to('.name-text span', {
                    y: -30,
                    opacity: 0,
                    stagger: {
                        each: 0.03,
                        from: 'edges',
                    },
                    duration: 0.25,
                });

            // Fast background bars animation
            tl.to(
                '.preloader-item',
                {
                    scaleY: 0,
                    transformOrigin: 'bottom',
                    stagger: {
                        each: 0.04,
                        from: 'center',
                    },
                    duration: 0.4,
                },
                '-=0.2',
            )
                // Quick fade out
                .to(preloaderRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        if (preloaderRef.current) {
                            preloaderRef.current.style.display = 'none';
                        }
                    },
                });
        },
        { scope: preloaderRef },
    );

    return (
        <div
            className="fixed inset-0 z-[6] flex items-center justify-center bg-black"
            ref={preloaderRef}
        >
            {/* Black background bars */}
            <div className="absolute inset-0 flex">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="preloader-item h-full w-[10%] bg-black"
                    />
                ))}
            </div>

            {/* White text on black background */}
            <p className="name-text flex text-[20vw] md:text-[120px] font-anton text-center absolute leading-none overflow-hidden">
                <span className="inline-block translate-y-full text-white">
                    A
                </span>
                <span className="inline-block translate-y-full text-white">
                    Y
                </span>
                <span className="inline-block translate-y-full text-white">
                    M
                </span>
                <span className="inline-block translate-y-full text-white">
                    A
                </span>
                <span className="inline-block translate-y-full text-white">
                    N
                </span>
                <span className="inline-block translate-y-full w-4 md:w-8 opacity-0">
                    {' '}
                </span>

                <span className="inline-block translate-y-full text-white">
                    S
                </span>
                <span className="inline-block translate-y-full text-white">
                    H
                </span>
                <span className="inline-block translate-y-full text-white">
                    I
                </span>
                <span className="inline-block translate-y-full text-white">
                    L
                </span>
                <span className="inline-block translate-y-full text-white">
                    L
                </span>
                <span className="inline-block translate-y-full text-white">
                    E
                </span>
                <span className="inline-block translate-y-full text-white">
                    D
                </span>
                <span className="inline-block translate-y-full text-white">
                    A
                </span>
                <span className="inline-block translate-y-full text-white">
                    R
                </span>
            </p>
        </div>
    );
};

export default Preloader;
