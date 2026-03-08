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

    // New refs for additional projects
    const ecommerceRef = useRef(null);
    const dashboardRef = useRef(null);
    const mobileAppRef = useRef(null);
    const analyticsRef = useRef(null);
    const socialRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [
            rydeRef.current,
            libraryRef.current,
            ycDirectoryRef.current,
            ecommerceRef.current,
            dashboardRef.current,
            mobileAppRef.current,
            analyticsRef.current,
            socialRef.current
        ];

        cards.forEach((card, index) => {
            if (card) { // Check if card exists
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
            }
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

                    {/* Right - First two projects */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#F2F1EB]">
                                <img
                                    src="/images/conves.png"
                                    alt="Conves"
                                    className="w-full"
                                />
                            </div>
                            <h2>Smart FMS</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#F2F1EB]">
                                <img src="/images/ehealth-c.png" alt="CMS App" />
                            </div>
                            <h2>eHealth Clinical</h2>
                        </div>
                    </div>
                </div>

                {/* Additional Projects Section */}
                <div className="additional-projects mt-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">More Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Project 3 - eHealth Analytics */}
                        <div className="project-card" ref={ecommerceRef}>
                            <div className="image-wrapper bg-[#F2F1EB] rounded-lg overflow-hidden">
                                <img
                                    src="/images/ehealth-a.png"
                                    alt="E-commerce Platform"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">eHealth Analytics</h3>
                                <p className="text-white-70">
                                    The eHealth Analytics Portal is designed to transform health data
                                    collected from both kiosks and mobile applications into actionable insights.
                                    It allows organizations to monitor population health trends, track risk factors,
                                    and evaluate engagement across different user groups.
                                </p>
                            </div>
                        </div>

                        {/* Project 4 - HujanKe? Dashboard */}
                        <div className="project-card" ref={dashboardRef}>
                            <div className="image-wrapper bg-[#F2F1EB] rounded-lg overflow-hidden">
                                <img
                                    src="/images/hujanke.png"
                                    alt="Analytics Dashboard"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">HujanKe?</h3>
                                <p className="text-white-70">
                                    HujanKe? provides ramalan cuaca Malaysia with a 7-day hourly forecast,
                                    including precipitation probability, rain, temperature, wind, and visibility data.
                                    Users can view statistics based on their current location, as well as
                                    Home and Work locations to quickly check the probability of rain.
                                    It also integrates Google Maps for easy location selection,
                                    supports dark mode, and is fully responsive for mobile use.
                                </p>
                            </div>
                        </div>

                        {/* Project 5 - Pokedex */}
                        <div className="project-card" ref={mobileAppRef}>
                            <div className="image-wrapper bg-[#F2F1EB] rounded-lg overflow-hidden">
                                <img
                                    src="/images/pokedex.png"
                                    alt="Mobile Banking App"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Pokedex</h3>
                                <p className="text-white-70">
                                    I spent some of my free time creating a Pokédex web app,
                                    combining nostalgia with modern frontend development.
                                    I built it with Angular and styled everything using Tailwind CSS.
                                    It is not just for fun although it was fun haha, but to sharpen
                                    my technical skills and get more hands-on with cleaner component structure
                                    and responsive UI design.
                                </p>
                            </div>
                        </div>

                        {/* Project 6 - Healthcare Management */}
                        <div className="project-card" ref={analyticsRef}>
                            <div className="image-wrapper bg-[#F2F1EB] rounded-lg overflow-hidden">
                                <img
                                    src="/images/lightech.png"
                                    alt="Healthcare Management"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Lightech Showcase Portal</h3>
                            </div>
                        </div>

                        {/* Project 7 - Ice Cold FC */}
                        <div className="project-card" ref={socialRef}>
                            <div className="image-wrapper bg-[#F2F1EB] rounded-lg overflow-hidden">
                                <img
                                    src="/images/ic.png"
                                    alt="IC"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Ice Cold FC Portal</h3>
                            </div>
                        </div>

                        {/* Project 8 - Computer Management System */}
                        <div className="project-card">
                            <div className="image-wrapper bg-[#F2F1EB] rounded-lg overflow-hidden">
                                <img src="/images/cms.png" alt="CMS App"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Computer Maintenenace System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection