import React from "react";
import AppLayout from "@/Layouts/app-layout";
import { Head, Link, router } from "@inertiajs/react";

interface Order {
  orderid: number;
  orderdate: string;
  companyname: string;
  employname: string;
}

interface Props {
  orders: {
    data: Order[];
    links: any[];
  };
  filters: {
    customer: string;
    employee: string;
  };
}

export default function Index({ orders, filters }: Props) {
  const handleFilter = (key: string, value: string) => {
    router.get(route("orders.index"), { ...filters, [key]: value }, { preserveState: true });
  };

  return (
    <AppLayout title="Órdenes">
      <Head title="Órdenes" />

      <div className="max-w-5xl mx-auto p-6 text-white">

        <h1 className="text-3xl font-bold text-red-500 mb-6">Órdenes</h1>


        <div className="bg-black border border-gray-700 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
            <label className="block mb-1 text-red-300">Filtrar por Cliente</label>
            <input
              type="text"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
              value={filters.customer || ""}
              onChange={(e) => handleFilter("customer", e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-red-300">Filtrar por Empleado</label>
            <input
              type="text"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
              value={filters.employee || ""}
              onChange={(e) => handleFilter("employee", e.target.value)}
            />
          </div>
        </div>


        <div className="overflow-x-auto bg-black border border-gray-700 rounded-lg shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-red-400">
              <tr>
                <th className="px-4 py-2 border-b border-gray-700">ID</th>
                <th className="px-4 py-2 border-b border-gray-700">Fecha</th>
                <th className="px-4 py-2 border-b border-gray-700">Cliente</th>
                <th className="px-4 py-2 border-b border-gray-700">Empleado</th>
              </tr>
            </thead>

            <tbody>
              {orders.data.map((o) => (
                <tr key={o.orderid} className="hover:bg-gray-800">
                  <td className="px-4 py-2 border-b border-gray-700">{o.orderid}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{o.orderdate}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{o.companyname}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{o.employname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
          <div className="flex gap-2 flex-wrap justify-center">

            {/* 1. BOTÓN "INICIO" (Primera página) */}
            {orders.current_page > 1 && (
              <Link
                key="first"
                href={`?page=1&customer=${filters.customer || ""}&employee=${filters.employee || ""}`}
                className="px-3 py-2 rounded bg-gray-800 text-white hover:bg-red-800 font-bold hidden sm:inline-block" // Ocultar en móviles pequeños
              >
                « Inicio
              </Link>
            )}
            
            {/* 2. NÚMEROS DE PÁGINA CALCULADOS */}
            {(() => {
              const total = orders.last_page;
              const current = orders.current_page;
              const max = 9; // máximo de páginas visibles

              let start = Math.max(1, current - 4);
              let end = Math.min(total, current + 4);

              // Ajustar si al principio faltan páginas
              if (current <= Math.ceil(max / 2)) {
                  start = 1;
                  end = Math.min(total, max);
              }

              // Ajustar si estamos cerca del final
              if (current >= total - (Math.floor(max / 2) - 1)) {
                  end = total;
                  start = Math.max(1, total - (max - 1));
              }

              const pages = [];
              for (let i = start; i <= end; i++) {
                pages.push(i);
              }

              return pages.map((page) => (
                <Link
                  key={page}
                  href={`?page=${page}&customer=${filters.customer || ""}&employee=${filters.employee || ""}`}
                  className={`
                    px-3 py-2 rounded
                    ${
                      page === current
                        ? "bg-red-700 text-white font-bold"
                        : "bg-gray-800 text-white hover:bg-red-800"
                    }
                  `}
                >
                  {page}
                </Link>
              ));
            })()}

            {/* 3. BOTÓN "FIN" (Última página) */}
            {orders.current_page < orders.last_page && (
              <Link
                key="last"
                href={`?page=${orders.last_page}&customer=${filters.customer || ""}&employee=${filters.employee || ""}`}
                className="px-3 py-2 rounded bg-gray-800 text-white hover:bg-red-800 font-bold hidden sm:inline-block" // Ocultar en móviles pequeños
              >
                Fin »
              </Link>
            )}
            
          </div>
  
  
          <div className="flex items-center gap-4">
            
            {/* Botón Anterior */}
            {orders.prev_page_url && (
              <Link
                href={orders.prev_page_url}
                className="bg-gray-800 hover:bg-red-900 text-white py-2 px-4 rounded"
              >
                ← Anterior
              </Link>
            )}

            {/* Indicador de página actual */}
            <span className="text-white">
              Página {orders.current_page} de {orders.last_page}
            </span>

            {/* Botón Siguiente */}
            {orders.next_page_url && (
              <Link
                href={orders.next_page_url}
                className="bg-gray-800 hover:bg-red-900 text-white py-2 px-4 rounded"
              >
                Siguiente →
              </Link>
            )}
          </div>
      </div>


      </div>
    </AppLayout>
  );
}
