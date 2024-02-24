"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItems() {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start md:flex-row gap-5">
      {headerLinks.map((link) => {
        const isActive = pathName == link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary"
            } flex-center whitespace-nowrap font-semibold`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
