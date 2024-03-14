import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Card1Type = {
  cLILogo?: string;
  cLI?: string;
  transferFundsWithCLI?: string;
  sendMultisigTransaction?: string;
  smartFTWithAccessControlL?: string;
  ledgerNanoWithCLISupportA?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propWidth4?: CSSProperties["width"];
};

const Card1: NextPage<Card1Type> = ({
  cLILogo,
  cLI,
  transferFundsWithCLI,
  sendMultisigTransaction,
  smartFTWithAccessControlL,
  ledgerNanoWithCLISupportA,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
}) => {
  const cLIStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const usingCosmJSWithStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-base text-shades-light font-overline-footer">
      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
        <img
          className="h-9 w-9 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={cLILogo}
        />
        <div
          className="relative tracking-[-0.01em] leading-[28px]"
          style={cLIStyle}
        >
          {cLI}
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[12px_8px] min-h-[156px] max-w-full">
        <input
          className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
          placeholder="Transfer funds with CLI"
          type="text"
        />
        <input
          className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
          placeholder="Send multisig Transaction"
          type="text"
        />
        <input
          className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
          placeholder="Smart FT with Access Control List (ACL)"
          type="text"
        />
        <input
          className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
          placeholder="Ledger Nano with CLI: Support and Usage"
          type="text"
        />
      </div>
    </div>
  );
};

export default Card1;
