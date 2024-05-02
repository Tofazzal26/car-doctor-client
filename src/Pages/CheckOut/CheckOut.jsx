import { NavLink, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const loadedCheckOut = useLoaderData();

  const { title, service_id, price, _id } = loadedCheckOut;

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const firstName = form.lastName.value;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(email, firstName, phone, name, message);
  };

  return (
    <div>
      <h1>Check Out</h1>
      <h1>Name: {title}</h1>

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
                        placeholder="First Name"
                        className="input input-bordered w-full my-2"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="input input-bordered w-full my-2"
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="input input-bordered my-2 w-full"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
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
