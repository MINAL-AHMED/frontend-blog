import Link from "next/link";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <nav className="flex items-center justify-between max-w-3xl mx-auto px-4 py-5">
        <Link href="/" className="w-36 font-bold text-3xl">
          Tom<span className="text-primary">Blog</span>
        </Link>

        <div className="hidden md:flex font-semibold">
          <NavItems />
        </div>
        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
