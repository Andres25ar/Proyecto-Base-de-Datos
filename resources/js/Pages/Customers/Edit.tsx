import React from "react";
import AppLayout from "@/Layouts/app-layout";
import { Head, Link, useForm } from "@inertiajs/react";

interface Country {
  country: string;
  descripcountry: string;
}

interface Customer {
  id: number;
  customerid: string;
  companyname: string;
  contactname: string;
  contacttitle: string;
  address: string;
  city: string;
  region: string;
  postalcode: string;
  country: string;
  phone: string;
  fax: string;
}

interface Props {
  customer: Customer;
  countries: Country[];
}

export default function Edit({ customer, countries }: Props) {
  const { data, setData, put, processing, errors } = useForm({
    customerid: customer.customerid,
    companyname: customer.companyname,
    contactname: customer.contactname,
    contacttitle: customer.contacttitle,
    address: customer.address,
    city: customer.city,
    region: customer.region,
    postalcode: customer.postalcode,
    country: customer.country,
    phone: customer.phone,
    fax: customer.fax
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route("customers.update", customer.id));
  };

  return (
    <AppLayout title="Editar Cliente">
      <Head title="Editar Cliente" />

      <div className="max-w-3xl mx-auto p-6 text-white">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Editar Cliente</h1>

        <form onSubmit={submit} className="text-white bg-black p-6 rounded-lg border border-gray-700 shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* ---- MISMO FORM QUE CREATE ---- */}

            <div>
              <label className="block mb-1 text-red-400">ID del Cliente</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.customerid}
                onChange={(e) => setData("customerid", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Nombre de la Compañía</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.companyname}
                onChange={(e) => setData("companyname", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Nombre de Contacto</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.contactname}
                onChange={(e) => setData("contactname", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Cargo</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.contacttitle}
                onChange={(e) => setData("contacttitle", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Dirección</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Ciudad</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.city}
                onChange={(e) => setData("city", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Región</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.region}
                onChange={(e) => setData("region", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Código Postal</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.postalcode}
                onChange={(e) => setData("postalcode", e.target.value)}
              />
            </div>

            {/* ---- PAÍS ---- */}
            <div>
              <label className="block mb-1 text-red-400">País</label>
              <select
                value={data.country}
                onChange={(e) => setData("country", e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                style={{ color: "white", backgroundColor: "#111827" }}
              >
                <option value="" style={{ color: "white", backgroundColor: "#111827" }}>
                  Seleccione un país
                </option>

                {countries.map((c) => (
                  <option
                    key={c.country}
                    value={c.country}
                    style={{ color: "white", backgroundColor: "#111827" }}
                  >
                    {c.descripcountry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-red-400">Teléfono</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-red-400">Fax</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
                value={data.fax}
                onChange={(e) => setData("fax", e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <Link
              href={route("customers.index")}
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
            >
              Volver
            </Link>

            <button
              type="submit"
              disabled={processing}
              className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
