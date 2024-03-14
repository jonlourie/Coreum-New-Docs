import type { NextPage } from "next";

const SitemapLink: NextPage = () => {
  return (
    <div className="h-[652px] flex-1 relative max-w-[calc(100%_-_277px)] text-left text-13xl text-shades-light font-regular-label mq1050:max-w-full mq450:h-auto mq450:min-h-[652]">
      <h1 className="m-0 absolute top-[24px] left-[40px] text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[816px] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
        Coreum Modules
      </h1>
      <div className="absolute top-[104px] left-[40px] rounded-xl w-[816px] flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-primary-off-white font-overline-footer">
        <div className="w-[522px] relative tracking-[-0.02em] leading-[24px] font-medium inline-block max-w-full box-border pr-5">
          Each instruction is comprehensive and has links to all dependencies:
        </div>
        <div className="self-stretch h-60 flex flex-row flex-wrap items-start justify-start relative gap-[12px_4px] max-w-full mq450:h-auto mq450:min-h-[240]">
          <div className="w-[402px] !m-[0] absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-row items-start justify-start pt-px pb-0 pr-0 pl-px box-border gap-[11.649999999999636px] max-w-full mq450:flex-wrap mq450:pr-px mq450:pb-px mq450:box-border">
            <div className="h-[59px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border">
              <div className="w-0.5 h-6 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
            </div>
            <div className="h-[71px] flex-1 flex flex-col items-start justify-start gap-[23.5px] min-w-[246px] max-w-full">
              <div className="w-60 h-0.5 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
              <input
                className="w-[315px] [border:none] [outline:none] bg-[transparent] h-6 flex flex-row items-start justify-start py-0 px-3 box-border font-regular-label font-medium text-base text-primary-off-white"
                placeholder="Fungible Tokens"
                type="text"
              />
              <div className="self-stretch h-0 flex flex-row items-start justify-end">
                <div className="h-0.5 w-60 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
              </div>
            </div>
            <div className="h-[35px] w-[-0.3px] flex flex-col items-start justify-start pt-[11px] pb-0 px-0 box-border">
              <div className="w-0.5 h-6 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
            </div>
          </div>
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[0px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
            placeholder="Non-Fungible Tokens"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
            placeholder="Deterministic Gas"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
            placeholder="Fee Model"
            type="text"
          />
          <input
            className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[168px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
            placeholder="Cosmos Non-Fungible Tokens"
            type="text"
          />
        </div>
      </div>
      <div className="absolute top-[472px] left-[0px] w-[896px] flex flex-row flex-wrap items-start justify-start p-10 box-border gap-[40px] max-w-full text-xs font-overline-footer">
        <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border min-w-[291px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
              PREVIOUS
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
              IBC Channels
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border min-w-[291px] max-w-full text-right">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
              NEXT
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
              IBC Smart Contract Call Tutorial
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[892px] w-[272px] h-[652px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0] z-[1] text-sm">
        <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0 text-primary-green">
          <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
            IBC Transfer to Osmosis Using Keplr Wallet
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              1. Open Keplr Wallet
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              2. Navigate to Advanced IBC Transaction
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              3. Select Asset
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              4. Choose Destination Chain
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              5. Enter Wallet Address
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              6. Enter Amount
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              7. Review Transaction
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 flex flex-col items-start justify-start py-0 px-[9px] box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              10. Final Transaction Confirmation
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              11. Transaction Explorer
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              12. Transaction Hash
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 flex flex-col items-start justify-start py-0 px-3 box-border z-[1]">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              13. Explorer Transaction Messages
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border z-[2]">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              Transfer Logs
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 flex flex-col items-start justify-start py-0 px-3 box-border z-[3]">
          <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              14. Verify Successful Transfer to Osmosis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapLink;
