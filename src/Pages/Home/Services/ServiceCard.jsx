import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ SrvCard }) => {
  const { title, price, img } = SrvCard;

  return (
    <div>
      <div className="card bg-base-100 h-full border rounded-md">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-lg" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex text-[#FF3811] font-semibold items-center">
            <p className="text-start">Price: ${price}</p>
            <GoArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
