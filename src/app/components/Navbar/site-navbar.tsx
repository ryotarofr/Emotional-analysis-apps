"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { AiOutlineBarChart } from "react-icons/ai"
import { GiNotebook } from "react-icons/gi"

const navItems = [
  {
    path: "/note",
    name: "Note",
    icon: <GiNotebook size={24} />
  },
  {
    path: "/chart",
    name: "Chart",
    icon: <AiOutlineBarChart size={24} />
  },
];

export default function NavBar() {
  //パスを変数を定義
  let pathname = usePathname() || "/";

  return (
    <div className=" p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100]">
      <div className="flex gap-2 relative justify-around items-center w-full z-[100]  rounded-lg">
        <div className="hidden sm:block">
          <Link href="/" className="flex items-center no-underline text-zinc-900">
            <Image width={36} height={36} alt="Logo" src="/logo.png" />
            <span className="text-2xl">
              My-App
            </span>
          </Link>
        </div>
        <div className="flex">
          {navItems.map((item) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base hover:bg-slate-200 relative no-underline duration-300 ease-in ${isActive ? "text-zinc-400" : "text-zinc-900"
                  }`}
                href={item.path}
              >
                <div className="flex items-center">
                  <div className="">{item.icon}</div>
                  <div className="hidden sm:block">{item.name}</div>

                </div>
              </Link>
            );
          })}
        </div>

        <UserButton afterSignOutUrl="/" />

      </div>
    </div>
  );
}