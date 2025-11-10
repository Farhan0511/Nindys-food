import Button from "../components/Button";

function HomePage() {
  return (
    <div className="heroPage bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-10 md:mt-0">
        {/* Bagian kiri - teks */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-snug">
            Selamat Datang di Nindy's Food 🍜
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quisquam dignissimos doloremque? Soluta eius ea quisquam fuga
            recusandae non sed.
          </p>
          <Button />
        </div>

        {/* Bagian kanan - gambar */}
        <div className="right-hero md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/image/mieayam.png" alt="gambar home" className="w-3/4 " />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
