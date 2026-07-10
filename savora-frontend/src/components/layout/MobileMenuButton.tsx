import { Menu } from "lucide-react";

function MobileMenuButton() {
  return (
    <button
      aria-label="Open navigation menu"
      className="md:hidden"
    >
      <Menu size={30} />
    </button>
  );
}

export default MobileMenuButton;