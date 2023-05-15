import { DesktopNavbar } from "./components/DesktopNavbar";
import { MobileNavbar } from "./components/MobileNavbar";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
        <DesktopNavbar />
        <MobileNavbar />
      </nav>
    </>
  );
};
