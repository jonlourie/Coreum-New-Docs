import type { NextPage } from "next";
import Card from "./card";

const LiquidityProvidersAndMarket: NextPage = () => {
  return (
    <div className="w-[76rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-left text-[0.75rem] text-shades-carbon font-overline-footer mq750:gap-[1.25rem_2.5rem]">
      <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] max-w-full z-[1] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[2rem] min-w-[29.875rem] max-w-full mq750:gap-[1rem_2rem] mq750:min-w-full">
          <div className="rounded-11xl [background:linear-gradient(-89.25deg,_rgba(94,_103,_115,_0.2),_rgba(94,_103,_115,_0.02))] [backdrop-filter:blur(10px)] flex flex-row items-center justify-center py-[0.25rem] px-[0.938rem] whitespace-nowrap border-[1px] border-solid border-dimgray-200">
            <div className="relative tracking-[-0.01em] leading-[1.125rem]">
              Last Updated: 12/14/2023, 6:39:40 AM
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-[4rem] text-primary-off-white font-regular-label">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full">
              <h1 className="m-0 w-[42.688rem] relative text-inherit tracking-[-0.02em] leading-[5rem] font-bold font-inherit inline-block shrink-0 max-w-full mq1050:text-[3.188rem] mq1050:leading-[4rem] mq450:text-[2.375rem] mq450:leading-[3rem]">
                <span className="[background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  The World’s First
                </span>
                <span>{` `}</span>
                <span className="[background:linear-gradient(180deg,_#25d695,_#046c45)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Super Ledger
                </span>
              </h1>
            </div>
            <div className="self-stretch relative text-[1.25rem] tracking-[-0.01em] leading-[2.188rem] font-overline-footer text-primary-dim mq450:text-[1rem] mq450:leading-[1.75rem]">
              Coreum is a scalable, secure, and interoperable blockchain for
              business, enriched with smart tokens and smart contract
              functionalities.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[0.5rem] pr-[1.25rem] pl-[1.5rem] bg-[transparent] rounded-lg [background:linear-gradient(180deg,_#25d695,_#046c45)] flex flex-col items-center justify-center">
            <div className="rounded-xl [backdrop-filter:blur(10px)] flex flex-row items-center justify-start gap-[0.125rem]">
              <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[1.25rem] font-semibold font-overline-footer text-shades-dark-3 text-left whitespace-nowrap">
                Get Started
              </div>
              <img
                className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                alt=""
                src="/iconlink.svg"
              />
            </div>
          </button>
        </div>
        <img
          className="h-[35rem] w-[30rem] relative overflow-hidden shrink-0 object-cover max-w-full mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/landing-img@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] pr-[0.5rem] pl-[0rem] gap-[0.75rem_0.581rem] z-[1] text-[1rem] text-primary-dim font-regular-label">
        <div className="h-[15.25rem] flex-1 rounded-2xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-col items-end justify-start pt-[0.063rem] pb-[0rem] pr-[1.438rem] pl-[0.063rem] box-border gap-[0.5rem] min-w-[7.375rem] text-primary-off-white">
          <div className="w-[15.438rem] h-[0.938rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.938rem] pr-[0.313rem] pl-[0rem] box-border">
            <div className="h-[0.125rem] flex-1 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
          </div>
          <div className="mr-[-1.519rem] w-[16.956rem] flex flex-col items-start justify-start gap-[0.5rem]">
            <img
              className="w-[3rem] h-[3rem] relative"
              loading="lazy"
              alt=""
              src="/decentralized-exchanges.svg"
            />
            <div className="self-stretch h-[2.5rem] flex flex-row items-start justify-start gap-[1.519rem]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem] font-medium">
                  Features
                </div>
              </div>
              <div className="h-[2.625rem] w-[0.125rem] relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[1.438rem] text-[0.875rem] text-primary-dim font-overline-footer">
            <div className="h-[5.75rem] flex flex-col items-start justify-start pt-[3.25rem] px-[0rem] pb-[0rem] box-border">
              <div className="w-[0.125rem] h-[2.625rem] relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
            </div>
            <div className="flex-1 relative tracking-[-0.01em] leading-[1.313rem]">
              Dive into the protocol's capabilities,. including Smart Tokens,
              CosmWasm Smart Contracts and Coreum's gas fee model.
            </div>
          </div>
          <div className="w-[15.125rem] h-[0.125rem] relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
        </div>
        <div className="flex-[0.9114] rounded-2xl bg-shades-pitch flex flex-col items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[2rem] box-border gap-[1.5rem] min-w-[7.375rem]">
          <img
            className="w-[3rem] h-[3rem] relative"
            loading="lazy"
            alt=""
            src="/liquidity-providers-and-market-makers.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              Validators
            </div>
            <div className="self-stretch h-[5.25rem] relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-overline-footer text-shades-carbon inline-block">
              <p className="m-0">{`Guides and updates on node set up for deploying on devnet, testnet, or mainnet. `}</p>
            </div>
          </div>
        </div>
        <Card
          metaverseApplications="/metaverse-applications.svg"
          title="Developers "
          description="A full suite of development tooling: Coreum's CLI, Smart Contract Playground, and complete TypeScript / Go modules, and tutorials."
        />
        <Card
          metaverseApplications="/stablecoin-ecosystems.svg"
          title="Community"
          description="Explore community resources and initiatives across the Coreum ecosystem. Open-source knowledge and research materials."
        />
      </div>
    </div>
  );
};

export default LiquidityProvidersAndMarket;
