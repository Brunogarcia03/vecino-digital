import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

async function Navbar() {
  const session = await getServerSession(authOptions);

  if (session) console.log(session);

  return (
    <nav className="flex justify-between items-center bg-white text-black shadow-md shadow-black px-16 lg:px-24 py-2 md:py-3">
      <Link href={"/"}>
        <Image
          className="hidden md:block"
          src={"/logo.webp"}
          width={200}
          height={100}
          alt="Logo Laboro"
        />
        <Image
          className="block md:hidden"
          src={"/icon.png"}
          width={32}
          height={32}
          alt="Logo Laboro"
        />
      </Link>

      <ul className="flex gap-x-2 md:gap-x-4">
        {!session?.user ? (
          <>
            <Link
              href="/"
              className="inline-flex py-2 px-5 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(0_172_211)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(0_172_211)]"
            >
              <p>Inicio</p>
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex py-2 px-5 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(0_172_211)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(0_172_211)]"
            >
              <p>Ingresar</p>
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex group py-2 px-5 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(0_172_211)]"
            >
              <p>Registrarse</p>
              <div className="relative ml-1 h-7 w-7 overflow-hidden">
                <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <ArrowUpRight className="h-full w-full" />
                  <ArrowUpRight className="h-full w-full -translate-x-4" />
                </div>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="inline-flex py-2 px-5 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(0_172_211)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(0_172_211)]"
            >
              <p>Dashboard</p>
            </Link>
            <Link
              href="/api/auth/signout"
              className="inline-flex group py-2 px-5 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(0_172_211)]"
            >
              <p>Salir</p>
              <div className="relative ml-1 h-7 w-7 overflow-hidden">
                <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <ArrowUpRight className="h-full w-full" />
                  <ArrowUpRight className="h-full w-full -translate-x-4" />
                </div>
              </div>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
