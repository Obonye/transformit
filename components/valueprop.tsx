import ValueCard from "./value_card";

const valuePropositions = [
  {
    title: "Our Target",
    description: "To expand and increase your presence through traditional and digital marketing.",
    backgroundImage: "/Professional Woman at Work.jpeg"
  },
  {
    title: "Our Goal",
    description: "To pursue the best possible option for our clients business development",
    backgroundImage: "/Abstract Dynamic Silhouette.jpeg"
  },
  {
    title: "Client Success",
    description: "Proven track record of successful IT transformations",
    backgroundImage: "/Abstract Human Figures.jpeg"
  }
];

function ValueProps() {
  return (
    <section id="process" className="px-4 md:px-6 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium text-center mb-8 md:mb-12">
          The Right Solution For Your Business<span className="text-custom-reddish-pink">.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valuePropositions.map((prop, index) => (
            <ValueCard 
              key={index}
              title={prop.title}
              description={prop.description}
              backgroundImage={prop.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProps;
