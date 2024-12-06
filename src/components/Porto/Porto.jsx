import React from "react";

const Porto = () => {
  const timelineData = [
    {
      title: "PT BCA Multifinance",
      description:
        "Kuasa Hukum di Pengadilan Negeri Cibinong selaku Tergugat I Perkara No. 63/Pdt.G/2022/PN. Cbi",
    },
    {
      title: "PT BCA Multifinance",
      description:
        "Kuasa Hukum di Pengadilan Negeri Pandeglang selaku Tergugat I Perkara No. 8/Pdt.G/2022/PN. Pdl",
    },
    {
      title: "Pembeli Objek Lelang Sengketa",
      description:
        "Kuasa Hukum di Pengadilan Negeri Jakarta Barat selaku Tergugat I Perkara No. 63/Pdt.G/2022/PN. Cbi",
    },
    {
      title: "PT Asuransi Jiwa Bumiputera 1912",
      description:
        "Kuasa Hukum di Pengadilan Hubungan Industrial Jakarta Pusat selaku Tergugat Perkara No. 331/Pdt.sus.PHI/2022/PN. Jkt. Pst",
    },
  ];

  const TableData = [
    {
      client: "PT Bank Central Asia, Tbk Kantor Wilayah X",
      service: "Litigasi Pendampingan Saksi",
      period: "Oktober 2021 s/d. saat ini",
    },
    {
      client:
        "PT Bank Central Asia, Tbk Kantor Pusat Satuan Kerja Penyelamatan Kredit",
      service: "Somasi Pengosongan & Debitur Macet",
      period: "1 (satu) Tahun 2022",
    },
    {
      client: "PT Bank Central Asia, Tbk Kantor Wilayah X",
      service: "Litigasi Pendampingan Saksi",
      period: "Agustus 2024 s/d. saat ini",
    },
  ];

  return (
    <section>
      <div className="container pt-3 pb-14">
        <h1 className="text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-primaryBold text-center md:text-left pb-10">
          Portofolio Penanganan Kasus
        </h1>
        <h2 className="text-md sm:text-md md:text-md lg:text-xl xl:text-2xl font-primaryBold text-center md:text-left pb-5">
          Penanganan Kasus Perdata
        </h2>
        <p className="text-center md:text-left text-md md:text-sm lg:text-lg pb-5">
          Tingkat kemenanangan 99% dalam penanganan Perkara Perdata
        </p>
        {/* Timeline Container */}
        <div>
          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 md:space-y-4 p-4"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                {/* Content */}
                <div className="mt-5 md:mt-0">
                  <h2 className="text-center text-md md:text-sm lg:text-lg font-primaryBold pb-4">
                    {item.title}
                  </h2>
                  <p className="text-center md:text-left text-sm md:text-xs lg:text-sm !tracking-tighter">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-md sm:text-md md:text-md lg:text-xl xl:text-2xl font-primaryBold text-center md:text-left pt-8 pb-5">
          Penanganan Kasus Pidana
        </h2>
        <p className="text-center text-md md:text-left md:text-sm lg:text-lg pb-8">
          Dalam menangani Perkara Pidana yakni sudah berbagai Laporan Pidana
          yang sukses dilakukan dengan tingkat penyelesaian dan dianggap menang
          80%, khususnya dalam penanganan Perkara Tindak Pidana Penipuan, Tindak
          Pidana Penggelapan, Tindak Pidana Pencucian Uang, Tindak Pidana
          Perbuatan tidak menyenangkan, Tindak Pidana pelanggaran Rahasia Bank
          dan Penyalagunaan Data Pribadi;
        </p>
        {/* Kasus Pidana Table */}
        <div className="overflow-x-auto border-collapse border border-notsowhite rounded-2xl">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-sm md:text-sm lg:text-md border border-gray-300 px-4 py-2 text-left">
                  Klien
                </th>
                <th className="text-sm md:text-sm lg:text-md border border-gray-300 px-4 py-2 text-left">
                  Layanan
                </th>
                <th className="text-sm md:text-sm lg:text-md border border-gray-300 px-4 py-2 text-left">
                  Periode
                </th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-notsowhite"}
                >
                  <td className="text-sm md:text-sm lg:text-md border border-gray-300 px-4 py-2">
                    {row.client}
                  </td>
                  <td className="text-sm md:text-sm lg:text-md border border-gray-300 px-4 py-2">
                    {row.service}
                  </td>
                  <td className="text-sm md:text-sm lg:text-md border border-gray-300 px-4 py-2">
                    {row.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Porto;
