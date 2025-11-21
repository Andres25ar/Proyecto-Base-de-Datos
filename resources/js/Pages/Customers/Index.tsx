import React from "react";
import AppLayout from "@/Layouts/app-layout";
import { Head, Link } from "@inertiajs/react";

interface Customer {
  customerid: string;
  companyname: string;
  contactname: string;
  contacttitle?: string | null;
  address?: string | null;
  city?: string | null;
  region?: string | null;
  postalcode?: string | null;
  country?: string | null;
  phone?: string | null;
  fax?: string | null;
}

interface Paginated<T> {
  data: T[];
  current_page: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

interface Props {
  customers: Paginated<Customer>;
}

export default function Index({ customers }: Props) {
  return (
    <AppLayout title="Clientes">
      <Head title="Listado de Clientes" />

      <div className="w-full mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-red-500">
            Listado de Clientes
          </h1>

          <Link
            href={route("customers.create")}
            className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded"
          >
            Crear Cliente
          </Link>
        </div>

        
        <div className="w-full overflow-x-auto rounded-md shadow border border-gray-700">
          <table className="w-full bg-black text-white">
            <thead>
              <tr className="bg-red-900 text-white">
                <th className="border border-gray-700 px-2 py-2">ID</th>
                <th className="border border-gray-700 px-2 py-2">Compañía</th>
                <th className="border border-gray-700 px-2 py-2">Contacto</th>
                <th className="border border-gray-700 px-2 py-2">Cargo</th>
                <th className="border border-gray-700 px-2 py-2">Dirección</th>
                <th className="border border-gray-700 px-2 py-2">Ciudad</th>
                <th className="border border-gray-700 px-2 py-2">Región</th>
                <th className="border border-gray-700 px-2 py-2">Código Postal</th>
                <th className="border border-gray-700 px-2 py-2">País</th>
                <th className="border border-gray-700 px-2 py-2">Teléfono</th>
                <th className="border border-gray-700 px-2 py-2">Fax</th>
                <th className="border border-gray-700 px-2 py-2">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {customers.data.map((c) => (
                <tr key={c.customerid} className="hover:bg-gray-900 transition">
                  <td className="border border-gray-700 px-2 py-2">{c.customerid}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.companyname}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.contactname}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.contacttitle}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.address}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.city}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.region}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.postalcode}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.country}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.phone}</td>
                  <td className="border border-gray-700 px-2 py-2">{c.fax}</td>

                  <td className="border border-gray-700 px-2 py-2">
                    <Link
                      href={route("customers.edit", c.customerid)}
                      className="mr-2 bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                    >
                      Editar
                    </Link>

                    <Link
                      as="button"
                      method="delete"
                      href=""
                      className="bg-red-800 hover:bg-red-900 text-white py-1 px-2 rounded"
                    >
                      Eliminar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
        <div className="flex justify-center items-center gap-4 mt-4">
          {customers.prev_page_url && (
            <Link
              href={customers.prev_page_url}
              className="bg-black-800 hover:bg-red-900 text-white py-2 px-4 rounded"
            >
              ← Anterior
            </Link>
          )}

          <span className="text-white">
            Página {customers.current_page} de {customers.last_page}
          </span>

          {customers.next_page_url && (
            <Link
              href={customers.next_page_url}
              className="bg-black-800 hover:bg-red-900 text-white py-2 px-4 rounded"
            >
              Siguiente →
            </Link>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
