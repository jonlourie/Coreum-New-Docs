import type { NextPage } from "next";

const AccountGenerationContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-base text-shades-light font-overline-footer">
      <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
        <p className="m-0">You can fund your account here.</p>
        <p className="m-0">
          If you don't have an account, there are three ways to generate it:
        </p>
        <ul className="m-0 text-inherit pl-[21px]">
          <li className="mb-0">
            <span className="font-overline-footer text-shades-light">
              (for all users) Go to 
            </span>
            <span className="font-semibold font-overline-footer text-primary-green">
              wallet
            </span>
            <span>
               page, connect(install) wallet and create account there;
            </span>
          </li>
          <li className="mb-0">
            <span>
              (for advanced users) Click Generate Funded Wallet button below;
            </span>
          </li>
          <li>
            <span>(for advanced users) Or run cored CLI command:</span>
          </li>
        </ul>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-center text-sm text-shades-carbon font-fira-code">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
            <div className="flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">1</p>
                <p className="m-0">2</p>
              </div>
            </div>
            <img
              className="self-stretch w-0 relative max-h-full"
              alt=""
              src="/divider5.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">{`export COREUM_CHAIN_ID="{Chain ID}"`}</p>
                <p className="m-0">{`cored keys add <name-of-the-key> --chain-id=$COREUM_CHAIN_ID`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-left text-base text-primary-dim">
          <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
            <div className="relative tracking-[-0.01em] leading-[28px] font-light">{`{Chain ID}`}</div>
          </div>
          <div className="flex-1 relative tracking-[-0.01em] leading-[28px] text-shades-light font-overline-footer">
            <span>depends on the Network, you can find value at </span>
            <span className="text-primary-green">
              <span className="font-semibold">network variables page</span>
              <span className="font-overline-footer">.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountGenerationContainer;
