import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            alt="menu"
            src="/assets/icons/menu.svg"
            width={24}
            height={24}
            className="cursor-pointer text-primary"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 md:hidden">
          <Link href="/" className="w-36 font-bold text-3xl">
            Tom<span className="text-primary">Blog</span>
          </Link>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
