import React from 'react'
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import CaseStudySection from '@/components/case-study-section';
import Gallery from '@/components/Gallery';

function BrandComms() {
    return (
        <div className='min-h-screen flex flex-col w-full justify-center items-center my-auto pt-20'>

            <div className='h-fit flex flex-col md:flex-row gap-4 flex-1 w-[80%] justify-between'>
                <div className='flex flex-1 flex-col justify-center align-middle mx-2 gap-4'>
                    <h1 className='text-custom-light-blue w-fit py-2 text-4xl md:text-6xl lg:text-8xl font-bold'>Who We Are<span className='text-custom-reddish-pink'>.</span></h1>
                    <p className='text-base md:text-lg lg:text-xl'>Transform IT aims to align and dedicate expert personnel
                        and tools to actualize our vision of being a regional leader
                        in creation and dissemination of knowledge for advancing
                        entrepreneurship and innovation.
                    </p>
                    <Link isExternal
                        className="px-6 py-3 bg-custom-dark-blue text-white hover:bg-custom-reddish-pink rounded-none  hover:shadow-[4px_4px_0px_0px_#4392AC] hover:animate-bounce w-fit transition-all"
                        href="https://cal.com/monkgogi-moshaga-9bp2as">
                        Let's Connect !
                    </Link>
                </div>
                <div className='hidden md:flex flex-1 items-center justify-center' >
                    <Image src="/Surreal Light Bulb Art.png" alt="Brand visual" width={450} height={550} />
                </div>
            </div>
            <section className='flex flex-col justify-center items-center w-full pt-10 md:pt-20'>
                <div className='w-full grid place-content-center mt-4'>
                    <h2 className='text-custom-light-blue text-2xl md:text-3xl lg:text-4xl w-fit px-4 px-2 mb-4 font-bold'>Brand Communications<span className='text-custom-reddish-pink'>.</span></h2>
                </div>
                <div className='bg-custom-light-grey h-full w-full flex flex-col lg:flex-row'>
                    <div className="hidden lg:flex flex-1 w-full h-64 lg:h-[800px] min-h-64 lg:min-h-full overflow-hidden"
                        style={{
                            backgroundImage: "url('/Man Shouting Pop Art.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat"
                        }}></div>
                    <div className='flex flex-col flex-1 items-center justify-center gap-5 p-4 md:p-8' style={{
                        backgroundImage: "url('/Asset 8@4x.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl text-custom-dark-blue'>External</h1>
                            <p className='text-base md:text-lg lg:text-xl text-darker-black'>
                                Our external Brand Communications and Marketing
                                services embrace three major Brand Management
                                disciplines: <span className='font-bold'>
                                    social listening, social analytics and social
                                    engagement.
                                </span>
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl text-custom-reddish-pink'>Internal</h1>
                            <p className='text-base md:text-lg lg:text-xl text-darker-black'>
                                Our internal communications strategies are aimed at
                                increasing productivity, improving innovation and
                                shaping organizational culture to improve employee
                                retention and brand ambassadorship
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery
                title="Gallery"
                subtitle="Explore our creative brand communications work and campaigns"
            />
            <CaseStudySection></CaseStudySection>

        </div>
    )
}

export default BrandComms