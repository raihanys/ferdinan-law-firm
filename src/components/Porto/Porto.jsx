import React from "react";
import { motion } from "framer-motion";

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
      title: "Pemenang Lelang dengan Objek Tanah Bangunan Sengketa",
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
      service: "Retainer Litigasi & Pendampingan Saksi",
      period: "Oktober 2021 s/d. saat ini",
    },
    {
      client:
        "PT Bank Central Asia, Tbk Kantor Pusat Satuan Kerja Penyelamatan Kredit",
      service: "Retainer Somasi Pengosongan & Debitur Macet",
      period: "1 (satu) Tahun 2022",
    },
    {
      client: "PT Bank Central Asia, Tbk Kantor Wilayah X",
      service: "Retainer Litigasi & Pendampingan Saksi",
      period: "Agustus 2024 s/d. saat ini",
    },
  ];

  return (
    <section>
      <div className="container pt-3 pb-14">
        <h1 className="text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-primaryBold text-center md:text-left pb-5 lg:pb-10">
          Portofolio Penanganan Kasus
        </h1>

        <motion.h2
          className="text-md sm:text-md md:text-md lg:text-xl xl:text-2xl font-primaryBold text-center md:text-left pb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Penanganan Kasus Perdata
        </motion.h2>

        <motion.p
          className="text-center md:text-left text-sm lg:text-base pb-3 md:pb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Tingkat kemenanangan 90% dalam penanganan Perkara Perdata
        </motion.p>

        {/* Timeline Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 md:space-y-4 p-4"
              >
                {/* Dot */}
                <motion.div
                  className="flex-shrink-0 w-6 h-6 bg-primary rounded-full border-4 border-white"
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                ></motion.div>
                {/* Content */}
                <div className="mt-5 md:mt-0">
                  <h2 className="text-center text-sm md:text-sm lg:text-lg font-primaryBold pb-4">
                    {item.title}
                  </h2>
                  <p className="text-center md:text-left text-xs md:text-xs lg:text-sm !tracking-tighter">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h2
          className="text-md sm:text-md md:text-md lg:text-xl xl:text-2xl font-primaryBold text-center md:text-left pt-8 pb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Penanganan Kasus Pidana
        </motion.h2>

        <motion.p
          className="text-center md:text-justify text-sm md:text-sm lg:text-base pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dalam menangani Perkara Pidana yakni sudah Berbagai Laporan pidana
          sukses dilakukan dengan tingkat penyelesaian yang efisien dengan
          presentasi dianggap menang 80% serta dalam beberapa kasus dapat
          membuat klien lepas dari jeratan pidana; Spesialitas dalam penanganan
          Perkara Tindak Pidana Penipuan, Tindak Pidana Penggelapan, Tindak
          Pidana Pencucian Uang, Tindak Pidana Perbuatan tidak menyenangkan,
          Tindak Pidana pelanggaran Rahasia Bank dan Penyalagunaan Data Pribadi;
        </motion.p>
        {/* Kasus Pidana Table */}
        <motion.div
          className="overflow-x-auto border-collapse border border-notsowhite rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-xs md:text-sm lg:text-md border border-gray-300 px-4 py-2 text-left">
                  Klien
                </th>
                <th className="text-xs md:text-sm lg:text-md border border-gray-300 px-4 py-2 text-left">
                  Layanan
                </th>
                <th className="text-xs md:text-sm lg:text-md border border-gray-300 px-4 py-2 text-left">
                  Periode
                </th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView="animate"
                  viewport={{ once: true }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={index % 2 === 0 ? "bg-white" : "bg-notsowhite"}
                >
                  <td className="text-xs md:text-sm lg:text-md border border-gray-300 px-4 py-2">
                    {row.client}
                  </td>
                  <td className="text-xs md:text-sm lg:text-md border border-gray-300 px-4 py-2">
                    {row.service}
                  </td>
                  <td className="text-xs md:text-sm lg:text-md border border-gray-300 px-4 py-2">
                    {row.period}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Porto;
