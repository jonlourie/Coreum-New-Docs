import type { NextPage } from "next";

export type NFTMintingContainerType = {
  actionDescription?: string;
  nftMintingStep?: string;
};

const NFTMintingContainer: NextPage<NFTMintingContainerType> = ({
  actionDescription,
  nftMintingStep,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-5xl text-primary-off-white font-regular-label">
      <div className="self-stretch relative tracking-[-0.02em] leading-[30px] font-medium">
        {actionDescription}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
        <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
          {nftMintingStep}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
          <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
            <div className="flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">1</p>
                <p className="m-0">2</p>
                <p className="m-0">3</p>
                <p className="m-0">4</p>
                <p className="m-0">5</p>
                <p className="m-0">6</p>
              </div>
            </div>
            <img
              className="self-stretch w-0 relative max-h-full"
              alt=""
              src="/divider4.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-start p-4 text-left">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0 text-primary-dim">
                  <span>{`cored tx staking `}</span>
                  <span className="text-mediumseagreen-100">--help</span>
                </p>
                <p className="m-0">
                  # create-validator create new validator initialized with a
                  self-delegation to it
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  # delegate Delegate liquid tokens to a validator
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  # edit-validator edit an existing validator account
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  # redelegate Redelegate illiquid tokens from one validator to
                  another
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  # unbond Unbond shares from a validator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTMintingContainer;
