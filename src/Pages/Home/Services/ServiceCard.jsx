import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ SrvCard }) => {
  const { title, price, img, _id } = SrvCard;

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
            <NavLink to={`/checkOut/${_id}`}>
              <GoArrowRight size={25} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
