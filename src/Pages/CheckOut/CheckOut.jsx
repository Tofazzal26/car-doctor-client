import { useContext } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const loadedCheckOut = useLoaderData();
  const { user } = useContext(AuthContext);

  const { title, service_id, price, _id, img } = loadedCheckOut;

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;
    const message = form.message.value;
    const orderService = {
      customerName: name,
      email,
      date,
      service: _id,
      price: price,
      img,
    };

    fetch(`http://localhost:4000/car_doctor`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Order Confirm");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">{title}</h1>

      <div>
        <div>
          <div className=" my-4 lg:my-4">
            <div className="col-span-3 bg-[#f3f3f3] border-2 rounded-lg">
              <div className="lg:p-14">
                <div>
                  <form onSubmit={handleOrder}>
                    <br />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered w-full my-2"
                      />
                      <input
                        type="date"
                        name="date"
                        placeholder="Last Name"
                        className="input input-bordered w-full my-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        placeholder="Email"
                        className="input input-bordered my-2 w-full"
                      />
                      <input
                        type="text"
                        name="price"
                        defaultValue={`$${price}`}
                        readOnly
                        placeholder="Price"
                        className="input input-bordered my-2 w-full"
                      />
                    </div>
                    <textarea
                      className="textarea textarea-bordered w-full my-4 h-[300px]"
                      placeholder="Your Message"
                      name="message"
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="font-semibold text-[20px] bg-[#FF3811] cursor-pointer text-white w-full py-3 rounded-lg"
                      value="Confirm Order"
                    />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
