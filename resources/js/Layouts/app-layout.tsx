import React from "react";
import { Link, usePage} from "@inertiajs/react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function AppLayout({ title, children }: Props) {
  const { url } = usePage();

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-red-900 shadow mb-6">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            {title ?? "Mi Proyecto"}
          </h1>

          <nav className="flex gap-4">
            <Link href={route("customers.index")} className="text-white/80 hover:text-white">Inicio</Link>
            <Link href={route("orders.index")} className="text-white/80 hover:text-white">Órdenes</Link>
          </nav>
        </div>
      </header>

     
      <main className="max-w-7xl mx-auto px-6">{children}</main>
    </div>
  );
}
