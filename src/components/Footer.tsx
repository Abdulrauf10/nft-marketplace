export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col bg-[#2B2B2B] text-white">
      {/* PAGE CONTENT (empty because this is independent) */}
      <div className="flex-1"></div>

      {/* FOOTER */}
      <footer className="w-full bg-[#3B3B3B] px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* LEFT */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" className="w-8" />
              <h2 className="text-xl font-bold">NFT Marketplace</h2>
            </div>

            <p className="mt-4 text-gray-300 max-w-sm">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="mt-6">Join our community</p>

            <div className="flex gap-4 mt-4">
              <img src="/discord.svg" className="w-7 h-7" />
              <img src="/youtube.svg" className="w-7 h-7" />
              <img src="/twitter.svg" className="w-7 h-7" />
              <img src="/instagram.svg" className="w-7 h-7" />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex-1">
            <h3 className="text-xl font-bold">Explore</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>Marketplace</li>
              <li>Rankings</li>
              <li>Connect a wallet</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex-1">
            <h3 className="text-xl font-bold">Join Our Weekly Digest</h3>
            <p className="mt-4 text-gray-300 max-w-sm">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row bg-white rounded-full overflow-hidden max-w-md">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-5 py-3 text-black outline-none"
              />
              <button className="bg-[#A259FF] px-6 py-3 text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-500 mt-12" />

        <p className="mt-6 text-gray-400 text-sm">
          © NFT Market. Use this template freely.
        </p>
      </footer>
    </div>
  );
}
