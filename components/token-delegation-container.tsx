import type { NextPage } from "next";

const TokenDelegationContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-base text-shades-light font-overline-footer">
      <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Let's delegate some tokens:</li>
        </ul>
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
      <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
        <ul className="m-0 text-inherit pl-[21px]">
          <li className="mb-0">
            <span className="font-overline-footer text-shades-light">
              If the output code is 0, get the transaction hash, go to 
            </span>
            <span className="font-semibold font-overline-footer text-primary-green">
              Block Explorer
            </span>
            <span>{` and put it into the search line. `}</span>
          </li>
          <li>
            <span>
              If output code is not 0, your transaction failed local validation
              and was not broadcasted. Fix the problem and run the command
              again.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TokenDelegationContainer;
