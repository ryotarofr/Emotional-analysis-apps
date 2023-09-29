"use client";

import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav
      className="mx-4 py-8 bg-transparent flex items-center justify-between
      md:mx-20
    ">
      <div className="flex items-center gap-x-2">
        <Link
          href={isSignedIn ? "/note" : "/sign-up"}
          className="no-underline text-white bg-indigo-900 px-4 py-2 rounded-full hover:bg-indigo-800"
        >
          ログイン
        </Link>
      </div>
    </nav>
  )
}