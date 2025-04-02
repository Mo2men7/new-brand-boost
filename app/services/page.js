import { ThreeDCardDemo } from "../_components/ui/3d-card";

function Services() {
  const services = Array.from({ length: 10 }, (_, i) => {
    return {
      id: i * 215,
      name: `Service ${i + 1}`,
      image: `https://images.unsplash.com/photo-1667835949495-78a1ea9ecd77?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      description:
        i % 2 == 0
          ? `lorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisicing elit . Talent ${i}`
          : `lorem ipsum dolor sit amet consectetur adipisicing elit . Talent ${i}`,
    };
  });

  return (
    <section>
      <main className="pt-32">
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl uppercase font-bold text-transparent sm:text-7xl text-center">
          Our{" "}
          <span className="bg-gradient-to-b from-green-400 to-lightGreen bg-clip-text py-8 uppercase font-bold text-transparent">
            Services
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-10 px-7">
          {services.map((service, i) => (
            <ThreeDCardDemo key={i} item={service} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default Services;
