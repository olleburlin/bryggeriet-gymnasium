import React from "react";
import Link from "next/link";
import HeroMovie from "./HeroMovie";
import { ArrowRightIcon } from "@heroicons/react/outline";
export default function Hero() {
  return (
    <div className="w-full bg-black relative overflow-hidden h-full">
      <div className="relative h-full">
        <HeroMovie />
      </div>

      <div className="absolute flex flex-col items-center xl:items-end justify-end bg-opacity-50 top-0 w-full h-full">
        <div className="bg-black text-white bg-opacity-90 max-w-2xl p-4 xl:p-8 m-4 xl:m-8 space-y-4">
          <p className="text-xl xl:text-5xl font-bold">
            huvudrubrikRutaStartsida
          </p>
          <p className="text-lg xl:text-3xl">underrubrikRutaStartsida</p>
          <div className="flex flex-row gap-2 items-center text-lg xl:text-xl">
            <Link href="/" className="font-bold">
              lanktextRutaStartsida
            </Link>
            <div className="w-4">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
