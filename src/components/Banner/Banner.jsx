import React, { useState, useCallback } from "react";
import BannerPng from "../../assets/Banner.png";
import { motion } from "framer-motion";

const slideFromLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: delay, duration: 0.6, ease: "easeInOut" },
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: delay, duration: 0.6, ease: "easeInOut" },
  },
});

// Button animation variants
const buttonVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const TextSection = ({ children, delay }) => (
  <motion.p
    variants={fadeIn(delay)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-xl lg:w-[400px] xl:w-[485px] text-justify"
  >
    {children}
  </motion.p>
);

const Banner = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToggleText = useCallback(() => {
    setShowMore((prev) => !prev);
  }, []);

  return (
    <section>
      <div className="container pt-2 pb-10 md:pt-10 lg:pt-14 md:pb-16 lg:pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-14">
        {/* Banner Image */}
        <div className="flex justify-center items-start">
          <motion.img
            variants={slideFromLeft(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            src={BannerPng}
            alt="Banner"
            className="w-[300px] lg:w-[400px] xl:w-[450px] relative object-cover drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-5">
            <h1 className="text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-primaryBold !leading-snug">
              Ferdinan Law Firm & Partner's
            </h1>
            <TextSection delay={0.4}>
              <span>
                Ferdinan Law Firm & Partner’s (“FLF”) adalah firma hukum
                Indonesia yang independen dan memberikan layanan hukum penuh
                yang berbasis di jantung ibu kota Indonesia, yakni Jakarta.
              </span>
            </TextSection>
            {showMore ? (
              <>
                <TextSection delay={0.4}>
                  <span>
                    FLF didirikan oleh seorang Pengacara senior yang memiliki
                    segudang pengalaman organisasi dalam berbagai bidang, serta
                    pengalaman kerja yang bersentuhan langsung dengan lingkup
                    permasalahan hukum dalam ruang layanan jasa keuangan, selain
                    itu pendiri adalah seorang pribadi yang menjunjung tinggi
                    kualitas profesionalisme, keterampilan, integritas dan
                    kejujuran.
                  </span>
                </TextSection>
                <TextSection delay={0.4}>
                  <span>
                    Para pengacara yang tergabung di FLF memiliki pengetahuan
                    yang mumpuni dalam bidang korporasi, litigasi, hukum
                    komersial, asurasi dan ketenagakerjaan serta memilik koneksi
                    di berbagai sektor termasuk instansi-instansi pemerintahan
                    yang memberikan pengalaman yang sangat baik dalam memberikan
                    solusi untuk setiap masalah klien melalui penelitian yang
                    komprehensif, analisis yang mendalam, pemikiran yang kritis,
                    inovatif dan kreatif.
                  </span>
                </TextSection>
                <TextSection delay={0.4}>
                  <span>
                    FLF juga berkomitmen pada standar tertinggi dalam memberikan
                    pelayanan kepada klien dengan mengedepankan sikap responsif
                    dan kerahasiaan. Nilai-nilai inti kami terdiri dari
                    kepentingan klien , kepercayaan, efektifitas, efisiensi,
                    proaktif, komunikatif, adaptif, dan berintegritas.
                  </span>
                </TextSection>
                <TextSection delay={0.4}>
                  <span>
                    FLF berdedikasi penuh dan berkomitmen dalam membantu klien
                    menemukan solusi yang tepat untuk masalah-masalah spesifik
                    mereka dan/atau masalah-masalah hukum di Indonesia.
                  </span>
                </TextSection>
                <TextSection delay={0.4}>
                  <span>
                    Tim pengacara kami yang lengkap memiliki keahlian dan
                    pengalaman untuk mengidentifikasi, mengumpulkan fakta dan
                    bukti yang diperlukan untuk membantu klien kami mencapai
                    hasil yang terbaik; baik di pengadilan, forum penyelesaian
                    sengketa hukum lainnya, atau dalam skenario transaksi
                    komersial/bisnis.
                  </span>
                </TextSection>
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleToggleText}
                  aria-expanded={showMore}
                  className="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg hover:underline font-primaryMedium"
                >
                  Show Less
                </motion.button>
              </>
            ) : (
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                onClick={handleToggleText}
                aria-expanded={showMore}
                className="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg hover:underline font-primaryMedium"
              >
                Read More...
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
