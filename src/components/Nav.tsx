import NavLogo from "./NavLogo";
import NavTab from "./NavTab";

const Nav = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 mx-auto z-50">
      <div className="flex justify-around">
        <NavLogo />
        <div className="hidden md:flex items-center space-x-1">
          <NavTab tabName="Home" selected={true} />
          <NavTab tabName="Services" selected={false} />
          <NavTab tabName="About Us" selected={false} />
          <NavTab tabName="Job Offers" selected={false} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
