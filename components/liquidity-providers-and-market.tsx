import type { NextPage } from "next";
import Card from "./card";

const LiquidityProvidersAndMarket: NextPage = () => {
  return (
    <div className="w-[1216px] flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-xs text-shades-carbon font-overline-footer mq750:gap-[20px_40px]">
      <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] max-w-full z-[1] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[32px] min-w-[478px] max-w-full mq750:gap-[16px_32px] mq750:min-w-full">
          <div className="rounded-11xl [background:linear-gradient(-89.25deg,_rgba(94,_103,_115,_0.2),_rgba(94,_103,_115,_0.02))] [backdrop-filter:blur(10px)] flex flex-row items-center justify-center py-1 px-[15px] whitespace-nowrap border-[1px] border-solid border-dimgray-200">
            <div className="relative tracking-[-0.01em] leading-[18px]">
              Last Updated: 12/14/2023, 6:39:40 AM
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-45xl text-primary-off-white font-regular-label">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full">
              <h1 className="m-0 w-[683px] relative text-inherit tracking-[-0.02em] leading-[80px] font-bold font-inherit inline-block shrink-0 max-w-full mq1050:text-32xl mq1050:leading-[64px] mq450:text-19xl mq450:leading-[48px]">
                <span className="[background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  The World’s First
                </span>
                <span>{` `}</span>
                <span className="[background:linear-gradient(180deg,_#25d695,_#046c45)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Super Ledger
                </span>
              </h1>
            </div>
            <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[35px] font-overline-footer text-primary-dim mq450:text-base mq450:leading-[28px]">
              Coreum is a scalable, secure, and interoperable blockchain for
              business, enriched with smart tokens and smart contract
              functionalities.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 pr-5 pl-6 bg-[transparent] rounded-lg [background:linear-gradient(180deg,_#25d695,_#046c45)] flex flex-col items-center justify-center">
            <div className="rounded-xl [backdrop-filter:blur(10px)] flex flex-row items-center justify-start gap-[2px]">
              <div className="relative text-sm tracking-[-0.02em] leading-[20px] font-semibold font-overline-footer text-shades-dark-3 text-left whitespace-nowrap">
                Get Started
              </div>
              <img
                className="h-5 w-5 relative min-h-[20px]"
                alt=""
                src="/iconlink.svg"
              />
            </div>
          </button>
        </div>
        <img
          className="h-[560px] w-[480px] relative overflow-hidden shrink-0 object-cover max-w-full mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/landing-img@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-2 pl-0 gap-[12px_9.333333333333334px] z-[1] text-base text-primary-dim font-regular-label">
        <div className="h-[244px] flex-1 rounded-2xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-col items-end justify-start pt-px pb-0 pr-[23px] pl-px box-border relative gap-[8px] min-w-[118px] text-primary-off-white">
          <div className="w-[247px] h-[15px] flex flex-row items-start justify-start pt-0 pb-[15px] pr-[5px] pl-0 box-border">
            <div className="h-0.5 flex-1 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
          </div>
          <div className="mr-[-24.299999999999272px] w-[271.3px] flex flex-col items-start justify-start gap-[8px]">
            <img
              className="w-12 h-12 relative"
              loading="lazy"
              alt=""
              src="/decentralized-exchanges.svg"
            />
            <div className="self-stretch h-10 flex flex-row items-start justify-start gap-[24.299999999999272px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                  Features
                </div>
              </div>
              <div className="h-10 w-0.5 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 gap-[23px] text-sm text-primary-dim font-overline-footer">
            <div className="h-[92px] flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border">
              <div className="w-0.5 h-10 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
            </div>
            <div className="flex-1 relative tracking-[-0.01em] leading-[21px]">
              Dive into the protocol's capabilities,. including Smart Tokens,
              CosmWasm Smart Contracts and Coreum's gas fee model.
            </div>
          </div>
          <div className="w-60 h-0.5 absolute !m-[0] right-[22px] bottom-[-2px] box-border border-t-[1px] border-solid border-mediumseagreen-400" />
        </div>
        <div className="flex-[0.9114] rounded-2xl bg-shades-pitch flex flex-col items-start justify-start pt-6 px-6 pb-8 box-border gap-[24px] min-w-[118px]">
          <img
            className="w-12 h-12 relative"
            loading="lazy"
            alt=""
            src="/liquidity-providers-and-market-makers.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
              Validators
            </div>
            <div className="self-stretch h-[84px] relative text-sm tracking-[-0.01em] leading-[21px] font-overline-footer text-shades-carbon inline-block">
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
