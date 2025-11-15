import HNft from '../assets/hero/highlight-nft.svg';
import Card from '../components/3DCard';
import Rocket from '../assets/icons/rocket.svg';
import Dog from '../assets/trending-collection/dog.svg';
import Cat from '../assets/trending-collection/cat.svg';
import Bear from '../assets/trending-collection/bear.svg';
import Avatar1 from '../assets/trending-collection/avatar1.svg';
import Avatar2 from '../assets/trending-collection/avatar2.svg';
import Avatar3 from '../assets/trending-collection/avatar3.svg';
import Mashroom from '../assets/trending-collection/mashroom.svg';
import Mashroom2 from '../assets/trending-collection/mashroom2.svg';
import Mashroom3 from '../assets/trending-collection/mashroom3.svg';
import Person1 from '../assets/trending-collection/person1.svg';
import Person2 from '../assets/trending-collection/person2.svg';
import Person3 from '../assets/trending-collection/person3.svg';

const Home = () => {
  return (
    <>
      <main>
        <section className="flex flex-col md:flex-row gap-[30px] justify-center items-center text-white">
          <div className="w-full md:w-[50%]">
            <h1 className="font-semibold text-[28px] xl:text-[67px] md:text-[38px]">
              Discover{' '}
              <span className="hidden xl:inline">
                <br />
              </span>
              Digital Art & Collect Nfts
            </h1>
            <p className="text-[16px] md:text-[16px] lg:text-[22px]">
              NFT marketplace UI created with Anima for{' '}
              <span className="hidden xl:inline">
                <br />
              </span>{' '}
              Figma. Collect, buy and sell art from more{' '}
              <span className="hidden xl:inline">
                <br />
              </span>{' '}
              than 20k NFT artists.
            </p>

            <button className="p-4 rounded-3xl bg-[#A259FF] text-white w-56 flex justify-center items-center mt-10 cursor-pointer hover:scale-95 transition">
              <img src={Rocket} alt="get started" /> <span>Get Started</span>
            </button>

            <div className="flex gap-8 mt-6">
              <div className="text-white ">
                <p className="font-bold text-[28px]">240K+</p>
                <p className="text-[23.99px]">Total Sale</p>
              </div>
              <div className="text-white ">
                <p className="font-bold text-[28px]">100K+</p>
                <p className="text-[23.99px]">Auctions</p>
              </div>
              <div className="text-white ">
                <p className="font-bold text-[28px]">240K+</p>
                <p className="text-[23.99px]">Artists</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Card image={HNft} />
          </div>
        </section>

        <section className="w-full mt-28 text-white">
          <h2 className="text-[38px] font-bold ">Trending Collection</h2>
          <p className="text-[22px] mb-9">
            Checkout our weekly updated trending collection.
          </p>
          <div className="flex lg:grid lg:grid-cols-3 gap-10 overflow-x-auto md:overflow-visible px-4 no-scrollbar">
            <div className="min-w-[280px] md:min-w-0 shrink-0">
              <img src={Dog} className="w-full rounded-3xl mb-4" alt="" />

              <div className="flex items-center gap-3">
                <img src={Cat} className="w-20 h-20 rounded-2xl" />
                <img src={Bear} className="w-20 h-20 rounded-2xl" />
                <div className="w-20 h-20 rounded-2xl bg-[#A259FF] flex items-center justify-center  text-xl font-bold">
                  1025+
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4 ">DSGN Animals</h2>

              <div className="flex items-center gap-2 mt-2">
                <img src={Avatar1} className="w-6 h-6 rounded-full" />
                <p className="text-gray-300">MrFox</p>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-0 shrink-0">
              <img src={Mashroom} className="w-full rounded-3xl mb-4" alt="" />

              <div className="flex items-center gap-3">
                <img src={Mashroom2} className="w-20 h-20 rounded-2xl" />
                <img src={Mashroom3} className="w-20 h-20 rounded-2xl" />
                <div className="w-20 h-20 rounded-2xl bg-[#A259FF] flex items-center justify-center text-white text-xl font-bold">
                  1025+
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4 text-white">
                Magic Mashrooms
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <img src={Avatar2} className="w-6 h-6 rounded-full" />
                <p className="text-gray-300">Shro0mie</p>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-0 shrink-0">
              <img src={Person1} className="w-full rounded-3xl mb-4" alt="" />

              <div className="flex items-center gap-3">
                <img src={Person2} className="w-20 h-20 rounded-2xl" />
                <img src={Person3} className="w-20 h-20 rounded-2xl" />
                <div className="w-20 h-20 rounded-2xl bg-[#A259FF] flex items-center justify-center text-white text-xl font-bold">
                  1025+
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4 text-white">
                Disco Machines
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <img src={Avatar3} className="w-6 h-6 rounded-full" />
                <p className="text-gray-300">BeKind2Robots</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
