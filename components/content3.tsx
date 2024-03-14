import type { NextPage } from "next";

const Content3: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px] max-w-full text-left text-base text-shades-light font-overline-footer lg:pt-5 lg:pb-[34px] lg:box-border mq750:pb-[22px] mq750:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-13xl font-regular-label mq450:gap-[20px_40px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          API List
        </h1>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full text-base font-overline-footer">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
            <img
              className="h-9 w-9 relative rounded-3xl overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className="relative tracking-[-0.01em] leading-[28px]">
              Coreum:
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[12px_8px] min-h-[240px] max-w-full">
            <input
              className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
              placeholder="Asset"
              type="text"
            />
            <input
              className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
              placeholder="Custom Params"
              type="text"
            />
            <input
              className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
              placeholder="Delay"
              type="text"
            />
            <input
              className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
              placeholder="Fee Model"
              type="text"
            />
            <input
              className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
              placeholder="NFT"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
          <img
            className="h-9 w-9 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/cli-logo.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[28px]">
            Amino:
          </div>
        </div>
        <div className="relative w-full [border:none] bg-[transparent] self-stretch h-[72px] flex flex-row flex-wrap items-start justify-start box-border min-w-[250px] text-primary-dim font-regular-label">
          <input
            className="[outline:none] p-6 font-regular-label font-medium text-base text-primary-dim [border:none] w-full h-full [background:transparent] relative z-[3]"
            placeholder="Amino.proto"
            type="text"
          />
          <div className="h-[] w-[49%] rounded-xl bg-shades-pitch flex flex-col items-start justify-start p-6 box-border absolute z-[1] left-[0px] top-[0px] [pointer-events:none]">
            <div className="w-[354px] h-6 flex flex-col items-start justify-start">
              <div className="w-[92px] h-6 relative tracking-[-0.02em] leading-[24px] font-medium inline-block">
                Amino.proto
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
          <img
            className="h-9 w-9 relative rounded-13xl overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/cosmos-logo@2x.png"
          />
          <div className="relative tracking-[-0.01em] leading-[28px]">
            Cosmos:
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[12px_8px] min-h-[1164px] max-w-full">
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="App"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Auth"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Authorization"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Auto CLI"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Bank"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Base"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Capability"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Consensus"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Crisis"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Crypto"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Distribution"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Evidence"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Fee Grant"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Genesis Utility"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Governance"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Group"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Mint"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Message"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="ORM"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Params"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Query"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Reflection"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Slashing"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Staking"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Transaction"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Upgrade"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="VEsting"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
          <img
            className="h-9 w-9 relative"
            loading="lazy"
            alt=""
            src="/group-1597883278.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[28px]">
            Tendermint:
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[12px_8px] min-h-[240px] max-w-full">
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="ABCI - Application Blockchain Interface"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Crypto"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Libs"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="P2P"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Types"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
            placeholder="Version"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
          <img
            className="h-9 w-9 relative object-cover"
            loading="lazy"
            alt=""
            src="/group-1597883278-1@2x.png"
          />
          <div className="relative tracking-[-0.01em] leading-[28px]">
            CosmWasm
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full text-primary-dim font-regular-label">
          <div className="w-[402px] rounded-xl bg-shades-pitch flex flex-col items-start justify-start p-6 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                WASM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
