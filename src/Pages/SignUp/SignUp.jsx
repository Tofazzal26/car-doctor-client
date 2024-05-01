import lock from "../../../public/assets/images/login/login.svg";
import { NavLink } from "react-router-dom";

const handleSignUp = (e) => {
  e.preventDefault();
};

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 items-center my-4 lg:my-4 lg:grid-cols-5">
        <div className="col-span-2">
          <img src={lock} alt="" />
        </div>
        <div className="col-span-3 border-2 rounded-lg">
          <div className="lg:p-14">
            <h1 className="text-[40px] font-semibold text-center">Sign In</h1>
            <div>
              <form onSubmit={handleSignUp}>
                <label className="text-[18px] font-semibold">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full my-4"
                />
                <label className="text-[18px] font-semibold">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full my-4"
                />
                <br />
                <label className="text-[18px] font-semibold">
                  Confirm Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered my-4 w-full"
                />
                <br />
                <input
                  type="submit"
                  className="font-semibold text-[20px] bg-[#FF3811] cursor-pointer text-white w-full py-2 rounded-lg"
                  value="Sign In"
                />
                <br />
                <h2 className="text-lg text-center mt-4 font-semibold">
                  Have An Account ?{" "}
                  <NavLink to={"/login"} className="text-[#FF3811]">
                    Sign In
                  </NavLink>
                </h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;