"use client";

import React from "react";

import LogoLoop from "./animations/LogoLoop/LogoLoop";
interface TrustedLogoProps {
  src: string;
  alt: string;
}

const trustedCompanies: TrustedLogoProps[] = [
  {
    src: "/bpomas.jpg",
    alt: "bpomas",
  },
  {
    src: "/timbercity.png",
    alt: "timber city",
  },
  {
    src: "/seza.png",
    alt: "Seza",
  },
  {
    src: "/techno-feeds.jpg",
    alt: "techno-feeds",
  },
  {
    src: "/furnp.png",
    alt: "Furniture Paradise",
  },
  {
    src: "/IEP.png",
    alt: "Institute of entrepreneurial development",
  },
  {
    src: "/SAIS.png",
    alt: "SAIS",
  },
  {
    src: "/black.jpg",
    alt: "Black",
  },
  {
    src: "/boardmaster.png",
    alt: "board master",
  },
  {
    src: "/flo-tek.png",
    alt: "flo-tek",
  },
  {
    src: "/Nonna.png",
    alt: "Nonna's",
  },
  {
    src: "/shieldvet.png",
    alt: "shield-vet",
  },
  {
    src: "/stockbrokers.jpg",
    alt: "stock brokers",
  },
  {
    src: "/trans.jpg",
    alt: "TRANS",
  },
  {
    src: "/veld-master.png",
    alt: "veldmaster",
  },
  {
    src: "/tyremart.png",
    alt: "Tyre-mart",
  },
  {
    src: "/bb logo.png",
    alt: "Business Botswana",
  },
  {
    src: "/gdg.png",
    alt: "Google Developers Group",
  },
  {
    src: "/HCIB.jpg",
    alt: "High Commission Of India Botswana",
  },
  {
    src: "/PACCI.png",
    alt: "Pan African Chamber Of Commerce and Industry",
  },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-custom-dark-blue relative" >
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-medium text-center text-custom-light-sky-blue mb-8 ">Join Industry Leaders Who Trust Our
          Solutions<span className="text-custom-reddish-pink">.</span></h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <LogoLoop logoHeight={55} logos={trustedCompanies} speed={75} />
        </div>

      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 0.5'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23F76A73'/%3E%3C/svg%3E\")",
          backgroundSize: "150px 150px"
        }}
      />
    </section>
  );
};

export default TrustedBy;
