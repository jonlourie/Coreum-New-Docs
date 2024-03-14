import type { NextPage } from "next";

export type GoCodeSkeletonContainerType = {
  codeSnippetTitle?: string;
  mainGoFileContentSnippet?: string;
};

const GoCodeSkeletonContainer: NextPage<GoCodeSkeletonContainerType> = ({
  codeSnippetTitle,
  mainGoFileContentSnippet,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-primary-off-white font-regular-label">
      <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
            {codeSnippetTitle}
          </div>
          <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[24px] font-overline-footer text-shades-light">
            {mainGoFileContentSnippet}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
        <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start p-4 z-[0]">
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
            className="self-stretch w-0 relative max-h-full z-[1]"
            alt=""
            src="/divider4.svg"
          />
          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 z-[2] text-left">
            <div className="relative tracking-[-0.01em] leading-[24px]">
              <p className="m-0 text-primary-dim">
                cored tx bank send my-sender-wallet
                testcore1snn05vrzvnwy7t0g00rr7hva63hmwxuuv7nrj0 1000000utestcore
                --node=$CORED_NODE --chain-id=$CHAIN_ID
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
          <img
            className="w-[720px] absolute !m-[0] h-[calc(100%_-_170px)] top-[162px] bottom-[8px] left-[80px] max-h-full object-contain z-[3]"
            alt=""
            src="/scrollbar@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GoCodeSkeletonContainer;
