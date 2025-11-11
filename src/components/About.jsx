function About() {
  return (
    <div className="container mx-auto px-4 py-12" id="about">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-center gap-10">
        {/* Kolom Kiri (Desktop) / Bawah (Mobile) - Gambar */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/image/mieayam.png"
            alt="gambar home"
            className="w-3/4 md:w-2/3"
          />
        </div>

        {/* Kolom Kanan (Desktop) / Atas (Mobile) - About Us */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-4xl mb-6 text-amber-800">About Us</h1>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Di{" "}
            <span className="font-semibold text-amber-700">Nindy’s Food</span>,
            kami percaya bahwa semangkuk mie bisa membawa kebahagiaan. Dari
            aroma kuah yang menggoda hingga tekstur mie yang kenyal, setiap
            detail kami buat dengan sepenuh hati. Kami ingin setiap pelanggan
            merasakan kehangatan yang sama seperti menikmati masakan buatan
            rumah sendiri.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Semua bahan kami pilih dengan cermat — mulai dari ayam segar, bumbu
            pilihan, hingga mie buatan sendiri yang lembut di lidah. Resep kami
            merupakan perpaduan tradisi dan sentuhan modern, menciptakan rasa
            khas yang bikin siapa pun ingin kembali lagi.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Lebih dari sekadar tempat makan,{" "}
            <span className="font-semibold text-amber-700">Nindy’s Food</span>{" "}
            adalah ruang untuk berbagi cerita dan tawa. Kami terus berinovasi
            agar setiap kunjunganmu jadi pengalaman yang menyenangkan — hangat,
            akrab, dan pastinya lezat. Karena di sini, kami tidak hanya
            menyajikan mie, tapi juga kenangan yang ingin kamu ulangi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
