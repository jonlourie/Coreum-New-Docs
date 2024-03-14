import type { NextPage } from "next";

export type KeplrWalletTransferContainerType = {
  stepDescription?: string;
  imageDimensions?: string;
  keplrWalletInstructions?: string;
};

const KeplrWalletTransferContainer: NextPage<
  KeplrWalletTransferContainerType
> = ({ stepDescription, imageDimensions, keplrWalletInstructions }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-5xl text-primary-off-white font-regular-label">
      <div className="self-stretch relative tracking-[-0.02em] leading-[30px] font-medium">
        {stepDescription}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
        <img
          className="w-[384.2px] relative h-[640px] object-cover"
          alt=""
          src={imageDimensions}
        />
        <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
          {keplrWalletInstructions}
        </div>
      </div>
    </div>
  );
};

export default KeplrWalletTransferContainer;
