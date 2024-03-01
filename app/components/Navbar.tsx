import Link from "next/link";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="w-full fixed inset-x-0 top-0 z-30 mx-auto max-w-screen-md bg-white/30 shadow backdrop-blur-lg md:top-3 md:rounded-3xl lg:max-w-screen-lg dark:bg-white/40">
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
