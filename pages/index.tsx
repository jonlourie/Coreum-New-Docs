import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import LiquidityProvidersAndMarket from "../components/liquidity-providers-and-market";
import Footer from "../components/footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start gap-[7.5rem] tracking-[normal] mq750:gap-[3.75rem_7.5rem] mq450:gap-[1.875rem_7.5rem]">
      <div className="self-stretch h-[0.063rem] relative box-border hidden z-[0] border-t-[1px] border-solid border-shades-dark-1" />
      <img
        className="w-full h-[40rem] absolute !m-[0] top-[4rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/bg@2x.png"
      />
      <main className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
        <NavBar />
        <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <LiquidityProvidersAndMarket />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
