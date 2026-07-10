import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import MobileMenuButton from "./MobileMenuButton";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Logo />
        <NavLinks />
        <NavButtons />
        <MobileMenuButton />
      </div>
    </nav>
  );
}

export default Navbar;