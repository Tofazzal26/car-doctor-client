import logo from "../../../public/assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside className="space-y-2">
          <img className="h-[80px]" src={logo} alt="" />
          <p className="w-[260px] font-semibold text-[16px]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
        </aside>
        <nav className="space-y-2">
          <h6 className=" font-semibold text-[20px]">About</h6>
          <a className="link link-hover font-semibold text-[16px]">Branding</a>
          <a className="link link-hover font-semibold text-[16px]">Design</a>
          <a className="link link-hover font-semibold text-[16px]">Marketing</a>
          <a className="link link-hover font-semibold text-[16px]">
            Advertisement
          </a>
        </nav>
        <nav className="space-y-2">
          <h6 className="font-semibold text-[20px]">Company</h6>
          <a className="link link-hover font-semibold text-[16px]">About us</a>
          <a className="link link-hover font-semibold text-[16px]">Contact</a>
          <a className="link link-hover font-semibold text-[16px]">Jobs</a>
          <a className="link link-hover font-semibold text-[16px]">Press kit</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="font-semibold text-[20px]">Support</h6>
          <a className="link link-hover font-semibold text-[16px]">
            Terms of use
          </a>
          <a className="link link-hover font-semibold text-[16px]">
            Privacy policy
          </a>
          <a className="link link-hover font-semibold text-[16px]">
            Cookie policy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
