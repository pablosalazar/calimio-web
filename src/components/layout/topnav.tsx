"use client";
import { MAIN_MENU } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MapIcon from "../icons/MapIcon";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";

const TopNav = () => {
  const pathname = usePathname();

  return (
    <header role="banner">
      <section
        className="bg-green-800 text-white py-1"
        aria-label="Información de contacto y ubicación"
      >
        <div className="container mx-auto flex justify-between">
          <div className="flex gap-4">
            <address className="flex gap-1">
              <MapIcon aria-label="Ubicación" />
              <a
                href="https://maps.google.com/?q=Cali, Colombia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cali - Colombia
              </a>
            </address>
            <address className="flex gap-1">
              <LocationIcon aria-label="Dirección" />
              <a
                href="https://maps.app.goo.gl/HPybfbE9FxYCjcnZA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carrera 15 No 15-12
              </a>
            </address>
            <address className="flex gap-1">
              <LocationIcon aria-label="Dirección" />
              <a
                href="https://maps.app.goo.gl/hypZsHvRZ85hvDh18"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carrera 15 No 12-22
              </a>
            </address>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:+573146896472"
              aria-label="Llamar al número 314 6896472"
            >
              <span className="flex gap-1">
                <PhoneIcon /> 314 689 6472
              </span>
            </a>
            <a
              href="tel:+573146868095"
              aria-label="Llamar al número 314 6868095"
            >
              <span className="flex gap-1">
                <PhoneIcon />
                314 686 8095
              </span>
            </a>
          </div>
        </div>
      </section>
      <nav
        aria-label="Menú principal"
        className="container mx-auto flex justify-between items-center py-2"
      >
        <Image
          src={"/logo-calimio.svg"}
          width={260}
          height={50}
          alt="Logotipo de Repuesto CALIMIO"
        />
        <div className="flex gap-4 font-bold">
          {MAIN_MENU.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`text-green-800 hover:text-yellow-400 uppercase transition-all
              ${pathname === item.path ? "text-yellow-400" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
