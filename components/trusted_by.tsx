import React from "react";

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
    alt: "Furniture Paradise",
  },
  {
    src: "/SAIS.png",
    alt: "SAIS",
  },
  {
    src: "/black.jpg",
    alt: "SAIS",
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
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium text-center mb-6">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="w-12 h-12 relative group">
              <img
                alt={company.alt}
                className="w-full h-full object-contain rounded-full border border-gray-200 transition-transform duration-300 group-hover:scale-110"
                src={company.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
