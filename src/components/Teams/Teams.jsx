import React, { useState } from "react";
import Team1Png from "../../assets/Team-1.jpg";
import Team2Png from "../../assets/Team-2.jpg";
import Team3Png from "../../assets/Team-3.jpg";
import Team4Png from "../../assets/Team-4.jpg";
import Team5Png from "../../assets/Team-5.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamData = [
  {
    id: 1,
    img: Team3Png,
    name: "Adi Wiriadi, S.H.",
    title: "Associate",
    bio: [
      "Adi lulus dari Fakultas Hukum Universitas Jenderal Soedirman pada tahun 1985. Setelah lulus Adi sudah pernah bergabung di beberapa Firma Hukum sebagai Associate dan di beberapa perusahaan sebagai staf hukum sejak tahun 1998 sampai dengan tahun 2020. Adi tentunya sudah menangani berbagai permasalahan hukum yang khususnya pada lingkup pidana dan perdata.",
      "Adi bergabung di FLF sejak tahun 2021. Adi berpengalaman menangani kasus-kasus tindak pidana, penanganan kasus sengketa perdata, penangan sengketa pertanahan, pendampingan saksi pada instansi penegakkan hukum, non litigasi, penyelesaian sengketa diluar persidangan dan penagihan hutang (collection).",
    ],
  },
  {
    id: 2,
    img: Team2Png,
    name: "Elfiansyah, S.H.",
    title: "Senior Associate",
    bio: [
      "Elfiansyah lulus dari Fakultas Hukum Universitas Andalas pada tahun 1992. Setelah lulus Elfiansyah bergabung dengan salah satu Perusahaan jasa keuangan terbaik se-Asia Tenggara yakni BCA pada tahun 1993 dan menjabat pertama kali sebagai Staff Operational sampai tahun 2009 dan kemudian di tahun 2009 beralih jabatan menjadi Legal Officer. Ia berkarir pada Perusahaan tersebut sampai tahun 2020 dengan jabatan terakhir sebagai Associate Officer Legal (Head of section), dimana tentunya ia telah menangani berbagai permasalahan hukum yang khususnya pada lingkup perbankan/jasa keuangan dengan spesialisasi pada bidang litigasi, penyelesaian sengketa komersial, penyelesaian kredit bermasalah, kontrak komersial hukum perbankan, hukum perdata, hukum pidana dan hukum perusahaan.",
      "Elfiansyah mulai bergabung di FLF pada tahun 2021, Elfiansyah berpengalaman menangani kasus-kasus ketenagakerjaan, pidana, penanganan kasus sengketa perdata, penangan sengketa tata usaha negara, pendampingan saksi pada instansi penegakkan hukum, litigasi komersial, penyelesaian sengketa diluar persidangan dan penagihan hutang (collection), Elfiansyah juga merupakan anggota Kongres Advokat Indonesia sejak tahun 2015.",
    ],
  },
  {
    id: 3,
    img: Team1Png,
    name: "Bobby Ferdinan, SH.",
    title: "Managing Partner/Director",
    bio: [
      "Beliau merupakan pendiri dari FLF yang dirintis sejak Mei 2021, sebelum mendirikan FLF beliau memiliki segudang pengalaman sebagai seorang Legal Officer disalah satu perusahaan jasa keuangan (perbankan) terbaik se-Asia Tenggara yakni PT Bank Central Asia, Tbk, (“BCA”), dimana beliau berkarir selama 31 tahun di BCA sejak September 1990 sampai memasuki purna bakti pada Agustus 2021 dengan jabatan terakhir sebagai Head Of Legal Regional, tentunya sebagai seorang yang menduduki tingkatan Manajerial, beliau sudah menangani berbagai permasalahan Hukum serta  bagaimana mengatur dan memanajemen sebuah team untuk memberikan layanan hukum terbaik bagi para pihak yang membutuhkan.",
      "Selain itu, beliau juga memiliki segudang pengalaman organisasi, beberapa yang beliau sampaikan yakni pernah menjabat sebagai Ketua Umum Serikat Pekerja Niaga Bank (SP NIBA) di BCA periode kepemimpinan tahun 2019 sampai 2021, dan saat ini juga masih memegang tanggung jawab sebagai Ketua Umum Federasi SP NIBA se-Indonesia (FSP NIBA Indonesia) periode tahun 2022 sampai 2025 dan Ketua Bidang Hukum dan HAM Konfederasi Serikat Pekerja Seluruh Indonesia (KSPSI) periode tahun 2022 sampai 2025.",
      "Selama bertahun-tahun berpraktik di bidang hukum, beliau memiliki keahlian khusus dalam penanganan permasalahan Hukum Ketenagakerjaan, Asuransi, Hukum Perusahaan dan Litigasi penyelesaian Sengketa pada Lembaga peradilan.",
    ],
  },
  {
    id: 4,
    img: Team4Png,
    name: "Elia Daniel Gagola, SH.,CLD.,CLA.",
    title: "Associate",
    bio: [
      "Daniel lulus dengan predikat cum laude dari Fakultas Hukum Universitas Sam Ratulangi pada Agustus 2018,  setelah lulus Daniel telah bergabung di beberapa Firma Hukum sebagai paralegal dan pada Mei 2019 ia bergabung dengan salah satu perusahaan jasa keuangan (perbankan) terbaik se-Asia Tenggara yakni BCA sebagai Legal Officer dimana ia berkarir pada perusahaan tersebut sampai April 2024 dengan jabatan terakhir sebagai Associate Officer Legal (Head of section), dimana tentunya Daniel memiliki expertise dalam berbagai softskill dan sudah menangani berbagai permasalahan hukum yang khususnya pada lingkup perbankan/jasa keuangan dengan spesialisasi pada bidang litigasi, penyelesaian sengketa komersial, penagihan utang, penyelesaian kredit bermasalah,  kontrak komersial, hukum perbankan, hukum perdata, hukum perdata internasional, hukum perusahaan serta hukum pewarisan.",
      "Daniel mulai bergabung di FLF sejak bulan Juli 2024, praktiknya terutama difokuskan pada hukum perdata, litigasi komersial, drafting perjanjian/kontrak dan penyelesaian sengketa diluar persidangan (alternative dispute  resolution). Daniel juga merupakan anggota Perhimpunan Advokat Indonesia (PERADI) sejak tahun 2019 dan berkomitmen untuk memberikan pembelaan yang komprehensif, efektif dan efisien kepada para klien. Bergairah dan tegas dalam mengadvokasi keadilan dan memastikan hasil yang adil dalam sistem hukum Indonesia.",
    ],
  },
  {
    id: 5,
    img: Team5Png,
    name: "Bimo Prasetyo, S.H.",
    title: "Junior Associate",
    bio: [
      "Bimo lulus dari Fakultas Hukum Universitas Jenderal Soedirman pada tahun 2020. mengawali karirnya di FLF sebagai staf magang sejak tahun 2021. Bimo berpengalaman menangani kasus-kasus tindak pidana, penanganan kasus sengketa perdata, pendampingan saksi pada instansi penegakkan hukum, litigasi komersial, penyelesaian sengketa diluar persidangan dan permasalahan dalam lingkup Perasuransian.",
      "Bimo berkomitmen mengikatkan diri secara hukum untuk tidak memberikan bantuan dan konsultasi hukum dalam perkara yang bertentangan dengan perkara klien dan karenanya mengikatkan diri untuk tidak menangani perkara-perkara yang langsung atau tidak langsung berlawanan dengan kepentingan klien.",
    ],
  },
];

const TeamCard = ({ img, name, title, bio, onReadMore, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className="relative group snap-center flex-shrink-0 w-[150px] lg:w-[165px] xl:w-auto overflow-hidden hover:overflow-visible transition-transform duration-500 ease-in-out transform-gpu"
    >
      {/* Image */}
      <img
        className="w-full h-auto rounded-2xl"
        src={img}
        alt={`${name} - ${title}`}
      />
      {/* Info */}
      <div className="w-5/6 bg-white px-4 py-6 shadow-lg rounded-xl absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:translate-y-[-15px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
        <span className="block font-primaryRegular text-xs pb-1">{title}</span>
        <h2 className="font-primaryBold text-sm pb-3">{name}</h2>
        <button
          className="text-xs font-primaryRegular hover:underline"
          onClick={onReadMore}
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

const Modal = ({ team, onClose }) => {
  if (!team) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Team Image */}
        <div className="flex-shrink-0 lg:w-1/3 mt-1 lg:mt-0 mb-6 lg:mb-0 flex justify-center items-center">
          <img
            className="w-full h-auto rounded-2xl"
            src={team.img}
            alt={`${team.name} - ${team.title}`}
          />
        </div>
        {/* Team Info */}
        <div className="lg:w-2/3 lg:pl-6 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-bold mb-2 text-center lg:text-left">
            {team.name}
          </h2>
          <p className="text-base md:text-lg lg:text-sm xl:text-base text-gray-700 mb-4 text-center lg:text-left">
            {team.title}
          </p>
          {/* Mapping bio paragraphs */}
          {team.bio.map((paragraph, index) => (
            <p
              key={index}
              className="mt-2 text-justify text-sm md:text-base lg:text-xs xl:text-sm leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
          <button
            onClick={onClose}
            className="mt-7 px-4 py-2 primary-btn shadow-none hover:shadow-none text-white rounded-lg lg:hidden"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleReadMore = (team) => {
    setSelectedTeam(team);
  };

  const handleCloseModal = () => {
    setSelectedTeam(null);
  };

  return (
    <section className="bg-notsowhite pt-10 pb-3 lg:pt-14 lg:pb-16">
      <div className="container mx-auto">
        <h1 className="text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-primaryBold text-left pb-10">
          Profil Anggota
        </h1>
        {/* Slider for small and medium screens */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex space-x-4 md:space-x-6 pb-10 md:pb-8">
          {teamData.map((team, index) => (
            <TeamCard
              key={team.id}
              img={team.img}
              name={team.name}
              title={team.title}
              bio={team.bio}
              onReadMore={() => handleReadMore(team)}
              index={index}
            />
          ))}
        </div>
        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {teamData.map((team, index) => (
            <TeamCard
              key={team.id}
              img={team.img}
              name={team.name}
              title={team.title}
              bio={team.bio}
              onReadMore={() => handleReadMore(team)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal team={selectedTeam} onClose={handleCloseModal} />
    </section>
  );
};

export default Teams;
