"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const page = pathname.split("/")[1]
  return (
    <div className="lg:flex gap-20 hidden items-center justify-center">
      <Link href={"/"}>
        <p className= { `${page == ""? " text-white":"text-[#8F8F8F]"} cursor-pointer` }>Home</p>
      </Link>
      <Link href={"/discover"}>
        <p className={ `${page == "discover"? " text-white":"text-[#8F8F8F]"} cursor-pointer` }>Discover</p>
      </Link>
      <Link href={"/watch-list"}>
        <p className={ `${page == "watch-list"? " text-white":"text-[#8F8F8F]"} cursor-pointer` }>Watchlist</p>
      </Link>
      <Link href={"/live-TV"}>
        <p className={ `${page == "live-TV"? " text-white":"text-[#8F8F8F]"} cursor-pointer`}>Live&nbsp;TV</p>
      </Link>
    </div>
  );
};

export default Navbar;
