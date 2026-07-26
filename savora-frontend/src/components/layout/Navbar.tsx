import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import MobileMenuButton from "./MobileMenuButton";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Desktop Buttons */}
        <NavButtons />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MobileMenuButton />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;