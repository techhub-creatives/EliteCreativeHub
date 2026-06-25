import Title from "./Title";
import { serviceDate } from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="Services" className="section-offset">
      <div className="container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12">
        <Title
          title="How can we help you grow?"
          description="In a crowded digital world, we transform your expertise into a powerful, credible brand that attracts, converts, and retains your ideal clients."
        />

        <div className="flex flex-col gap-8 mt-8 md:mt-12 w-full max-w-6xl">
          {serviceDate.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;