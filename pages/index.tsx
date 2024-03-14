import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import LiquidityProvidersAndMarket from "../components/liquidity-providers-and-market";
import Footer from "../components/footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start gap-[120px] tracking-[normal] mq750:gap-[60px_120px] mq450:gap-[30px_120px]">
      <div className="self-stretch h-px relative box-border hidden z-[0] border-t-[1px] border-solid border-shades-dark-1" />
      <img
        className="w-full h-[640px] absolute !m-[0] top-[64px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/bg@2x.png"
      />
      <main className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
        <NavBar />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <LiquidityProvidersAndMarket />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
