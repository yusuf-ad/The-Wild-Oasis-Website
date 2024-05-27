import Link from "next/link";
import Image from "next/image";

import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bgImage}
        fill
        // to preserve the aspect ratio we used object-cover
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
