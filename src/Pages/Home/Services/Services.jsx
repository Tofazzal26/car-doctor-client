import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-10">
        <p className="lg:text-[23px] font-bold text-[#FF3811]">Service</p>
        <h1 className="text-[45px] font-bold mb-2">Our Service Area</h1>
        <p className="lg:w-[650px] text-[#737373] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {service.map((SrvCard) => (
            <ServiceCard key={SrvCard._id} SrvCard={SrvCard} />
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-3 border rounded-md font-semibold border-[#FF3811] text-[#FF3811]">
            More Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
