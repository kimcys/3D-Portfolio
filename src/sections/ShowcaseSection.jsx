import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.1 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* Left */}
                    <div ref={rydeRef} className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src='/images/cx.png' alt='CX-Portal'></img>
                        </div>
                        <div className='text-content'>
                            <h2>Go Serve Portal</h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with Angular for 
                                an online platform designed to provide you with 
                                convenient access to manage your Takaful certificate(s) 
                                account, view and manage certificate details, 
                                make payments, and seek support for all your Takaful needs.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#F2F1EB]">
                                <img
                                    src="/images/ic.png"
                                    alt="IC"
                                />
                            </div>
                            <h2>Ice Cold FC Portal</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#F2F1EB]">
                                <img src="/images/cms.png" alt="CMS App" />
                            </div>
                            <h2>Computer Maintenance System</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection