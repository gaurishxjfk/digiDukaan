import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  ArrowDownLeft,
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: <ArrowDownToLine />,
    description:
      " Get your assets deliverd to your email in seconds and download them right away",
  },
  {
    name: "Guranteed Quality",
    icon: <CheckCircle />,
    description:
      " Every assest on platform are verified by team for best interest",
  },
  {
    name: "For the Planet",
    icon: <Leaf />,
    description:
      "All the assets are pledged for reservation and restoration for environment",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper classNameProp={``}>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">Digial Assets</span>.
          </h1>
          <p className="mt-6 text-lg  max-w-prose text-gray-500">
            Welcome to DigiDukaan. Every asset is verified by our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Link
              href={"/products"}
              className="bg-blue-500 text-white  px-4 py-2 rounded-md tracking-tight text-sm hover:bg-blue-400 transition-all ease-in-out delay-100 "
            >
              Browse Trending
            </Link>
            <button className="rounded-md bg-gray-200 px-4 py-2 tracking-tight text-sm hover:bg-gray-100 transition-all ease-in-out delay-100">
              Our quality promise &rarr;
            </button>
          </div>
        </div>
        {
          // todo list products
        }
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper classNameProp="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <span className="w-1/3 h-1/3">{perk.icon}</span>
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-800">{perk.name}</h3>
                  <p className="mt-3 text-sm text-gray-500">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
