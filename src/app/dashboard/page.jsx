"use client";
import { ArrowUpRight } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";

function DashboardPage() {
  return (
    <section className="h-[calc(100vh-5rem)] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/hiring.png"}
          width={800}
          height={600}
          alt="Ilustración"
          className="w-[60%] h-full mt-5 md:w-[70%] lg:mt-0 lg:w-[60%]"
        />
        <h1 className="text-black text-5xl mb-3">Panel de trabajo</h1>
        <button
          className="inline-flex group py-2 px-10 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(0_172_211)]"
          onClick={() => signOut()}
        >
          <p>Salir</p>
          <div className="relative ml-1 h-7 w-7 overflow-hidden">
            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
              <ArrowUpRight className="h-full w-full" />
              <ArrowUpRight className="h-full w-full -translate-x-4" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
export default DashboardPage;
