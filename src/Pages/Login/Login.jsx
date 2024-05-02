import { NavLink } from "react-router-dom";
import lock from "../../../public/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {
  const { logInEmailPassword } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInEmailPassword(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Please enter a valid email & password");
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 items-center my-4 lg:my-4 lg:grid-cols-5">
        <div className="col-span-2">
          <img src={lock} alt="" />
        </div>
        <div className="col-span-3 border-2 rounded-lg">
          <div className="lg:p-14">
            <h1 className="text-[40px] font-semibold text-center">Login</h1>
            <div>
              <form onSubmit={handleLogin}>
                <label className="text-[18px] font-semibold">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Type here"
                  name="email"
                  className="input input-bordered w-full my-4"
                />
                <br />
                <label className="text-[18px] font-semibold">
                  Confirm Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
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
                  You Have No Account ?{" "}
                  <NavLink to={"/signUp"} className="text-[#FF3811]">
                    Sign Up
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

export default Login;
