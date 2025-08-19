import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";

const Locations = () => {
  const counties = [
    { code: "001", name: "Mombasa" },
    { code: "002", name: "Kwale" },
    { code: "003", name: "Kilifi" },
    { code: "004", name: "Tana River" },
    { code: "005", name: "Lamu" },
    { code: "006", name: "Taita-Taveta" },
    { code: "007", name: "Garissa" },
    { code: "008", name: "Wajir" },
    { code: "009", name: "Mandera" },
    { code: "010", name: "Marsabit" },
    { code: "011", name: "Isiolo" },
    { code: "012", name: "Meru" },
    { code: "013", name: "Tharaka-Nithi" },
    { code: "014", name: "Embu" },
    { code: "015", name: "Kitui" },
    { code: "016", name: "Machakos" },
    { code: "017", name: "Makueni" },
    { code: "018", name: "Nyandarua" },
    { code: "019", name: "Nyeri" },
    { code: "020", name: "Kirinyaga" },
    { code: "021", name: "Murang'a" },
    { code: "022", name: "Kiambu" },
    { code: "023", name: "Turkana" },
    { code: "024", name: "West Pokot" },
    { code: "025", name: "Samburu" },
    { code: "026", name: "Trans Nzoia" },
    { code: "027", name: "Uasin Gishu" },
    { code: "028", name: "Elgeyo-Marakwet" },
    { code: "029", name: "Nandi" },
    { code: "030", name: "Baringo" },
    { code: "031", name: "Laikipia" },
    { code: "032", name: "Nakuru" },
    { code: "033", name: "Narok" },
    { code: "034", name: "Kajiado" },
    { code: "035", name: "Kericho" },
    { code: "036", name: "Bomet" },
    { code: "037", name: "Kakamega" },
    { code: "038", name: "Vihiga" },
    { code: "039", name: "Bungoma" },
    { code: "040", name: "Busia" },
    { code: "041", name: "Siaya" },
    { code: "042", name: "Kisumu" },
    { code: "043", name: "Homa Bay" },
    { code: "044", name: "Migori" },
    { code: "045", name: "Kisii" },
    { code: "046", name: "Nyamira" },
    { code: "047", name: "Nairobi City" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "start" }}>
      {/* Sidebar */}
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-6" style={{ width: "80%", height: "100vh" }}>
        <Navbar />

        <div className="container mt-4 border rounded p-2">

          {/* Counties Table */}
          <table className="table table-hover table-striped text-center w-100">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>#</th>
                <th>County Code</th>
                <th>County Name</th>
              </tr>
            </thead>
            <tbody>
              {counties.map((c, idx) => (
                <tr key={c.code} style={{ transition: "background 0.2s" }}>
                  <td>{idx + 1}</td>
                  <td>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: 600,
                        minWidth: 60,
                      }}
                    >
                      {c.code}
                    </span>
                  </td>
                  <td style={{ color: "black", fontWeight: 500 }}>{c.name}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={3}
                  className="text-end"
                  style={{ color: "black", fontWeight: 600 }}
                >
                  Total Counties:{" "}
                  <span style={{ color: "green" }}>{counties.length}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Locations;
