import Reservation from "@/app/_components/Reservation";

import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

// export const metadata = {
//     title: "Cabin - Dolomites",
// }

export async function generateMetadata({ params }) {
  const { cabinId } = params;

  const { name, description, image } = await getCabin(cabinId);

  return {
    title: `Cabin ${name} - Dolomites`,
    description,
    image,
  };
}

// TODO Making Dynamic Pages Static With generateStaticParams
export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = params;

  const cabin = await getCabin(cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <section>
        <Cabin cabin={cabin} />
      </section>

      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
