import type { NextPage } from "next";

const CoreumLogoFrameShape: NextPage = () => {
  return (
    <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 box-border max-w-full text-left text-base text-shades-light font-overline-footer">
      <div className="w-[1124px] flex flex-row items-start justify-start gap-[36px] max-w-full mq750:gap-[36px_18px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-[calc(100%_-_308px)] mq750:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
            <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.02em] leading-[40px] font-medium font-regular-label text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
              Run Validator Node
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="h-[168px] flex-1 relative max-w-full">
                  <div className="absolute top-[112px] left-[69px] rounded bg-shades-dark-1 w-48 h-[29px]" />
                  <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[28px] inline-block w-full h-full z-[1]">
                    <ul className="m-0 text-inherit pl-[21px]">
                      <li className="mb-0">
                        <span className="font-overline-footer text-shades-light">
                          Follow instructions in 
                        </span>
                        <span className="font-semibold font-overline-footer text-primary-green">
                          full node instruction
                        </span>
                        <span>
                           first, but set the following config before you start
                          the node. These configurations will reduce the storage
                          size and in turn will make upgrades faster, and the
                          downside is that the node will not have historical
                          data, and cannot be used as a state-sync server.
                        </span>
                      </li>
                    </ul>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      <span>{`(Check if   `}</span>
                      <span className="font-light font-fira-code text-primary-dim">
                        $COREUM_NODE_CONFIG
                      </span>
                      <span className="font-overline-footer text-shades-light">
                          is set(it should be there, if you haven't exited from
                        the beginning of installation))
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-shades-carbon font-fira-code">
                <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row flex-wrap items-center justify-start gap-[12px] max-w-full">
                  <div className="w-[41px] flex flex-row items-start justify-start p-4 box-border">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      <p className="m-0">1</p>
                      <p className="m-0">2</p>
                      <p className="m-0">3</p>
                    </div>
                  </div>
                  <img
                    className="h-[104px] w-0 relative min-h-[104px]"
                    alt=""
                    src="/divider1.svg"
                  />
                  <div className="flex-1 flex flex-row items-start justify-start p-4 box-border min-w-[488px] max-w-full text-left text-primary-dim mq750:min-w-full">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px] inline-block max-w-full">
                      <p className="m-0">
                        <span className="text-primary-dim">{` crudini `}</span>
                        <span className="text-mediumseagreen-100">
                          --set $COREUM_APP_CONFIG
                        </span>
                        <span>{` state-sync snapshot-interval `}</span>
                        <span className="text-primary-yellow">0</span>
                      </p>
                      <p className="m-0">
                        <span className="text-primary-dim">{` crudini `}</span>
                        <span className="text-mediumseagreen-100">
                          --set $COREUM_APP_CONFIG
                        </span>
                        <span> "" pruning \"everything\"</span>
                      </p>
                      <p className="m-0">
                        <span>{` crudini `}</span>
                        <span className="text-mediumseagreen-100">
                          --set $COREUM_APP_CONFIG
                        </span>
                        <span className="text-primary-dim">{` "" min-retain-blocks `}</span>
                        <span className="text-primary-yellow">10</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[816px] overflow-x-auto flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="w-[816px] h-28 relative tracking-[-0.01em] leading-[28px] inline-block">
                <p className="m-0">
                  Keep $COREUM_HOME/config/node_key.json and
                  $COREUM_HOME/config/priv_validator_key.json files in a safe
                  place, since they can be used to recover the validator node!
                </p>
                <p className="m-0">{` `}</p>
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Set the moniker variable to reuse it in the following
                    instructions.
                  </li>
                </ul>
              </div>
              <div className="w-[816px] flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px] max-w-full">
                  <div className="w-[41px] flex flex-row items-start justify-start p-4 box-border">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      1
                    </div>
                  </div>
                  <img
                    className="h-14 w-0 relative min-h-[56px]"
                    alt=""
                    src="/divider2.svg"
                  />
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 box-border min-w-[235px] max-w-full text-left text-mediumorchid">
                    <div className="w-[235px] relative tracking-[-0.01em] leading-[24px] inline-block box-border pr-5">
                      <span>export</span>
                      <span className="text-primary-dim">{` `}</span>
                      <span className="text-mediumseagreen-100">
                        MONIKER="validator"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[816px] h-[196px] relative">
                <div className="absolute top-[139px] left-[69px] rounded bg-shades-dark-1 w-48 h-[29px]" />
                <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[28px] inline-block w-full h-full z-[1]">
                  <ul className="m-0 text-inherit pl-[21px]">
                    <li className="mb-0">
                      <span>
                        (Optional) You can set waiting window between validator
                        restart to avoid double signing. If you set this option,
                        the node will not restart if there is another node
                        running with the same key. This option will help avoid
                        double signing, and is particularly useful if you are
                        migrating your node, or are planing to run a back up
                        node. You can learn more about it 
                      </span>
                      <span className="font-semibold font-overline-footer text-primary-green">
                        here.
                      </span>
                    </li>
                  </ul>
                  <p className="m-0 font-semibold text-primary-green">&nbsp;</p>
                  <p className="m-0">
                    <span className="font-overline-footer text-shades-light">{`(Check if   `}</span>
                    <span className="font-fira-code text-primary-dim">
                      $COREUM_NODE_CONFIG
                    </span>
                    <span>
                        is set(it should be there, if you haven't exited from
                      the beginning of installation))
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-[816px] flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px] max-w-full">
                  <div className="w-[41px] flex flex-row items-start justify-start p-4 box-border">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      1
                    </div>
                  </div>
                  <img
                    className="h-14 w-0 relative min-h-[56px]"
                    alt=""
                    src="/divider2.svg"
                  />
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 box-border min-w-[488px] max-w-full text-left text-mediumorchid">
                    <div className="w-[607px] relative tracking-[-0.01em] leading-[24px] inline-block max-w-full box-border pr-5">
                      <span className="text-primary-dim">crudini</span>
                      <span>{` `}</span>
                      <span className="text-mediumseagreen-100">
                        --set $COREUM_NODE_CONFIG
                      </span>
                      <span>{` `}</span>
                      <span className="text-primary-dim">
                        consensus double_sign_check_height
                      </span>
                      <span>{` `}</span>
                      <span className="text-primary-yellow">10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[816px] relative tracking-[-0.01em] leading-[28px] inline-block">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Init new account (if you don't have existing), which will be
                    used for validator control, delegation and staking
                    rewards/commission receiving
                  </li>
                </ul>
              </div>
              <div className="w-[816px] flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px] max-w-full">
                  <div className="w-[41px] flex flex-row items-start justify-start p-4 box-border">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      1
                    </div>
                  </div>
                  <img
                    className="h-14 w-0 relative min-h-[56px]"
                    alt=""
                    src="/divider2.svg"
                  />
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 box-border min-w-[488px] max-w-full text-left text-primary-dim">
                    <div className="w-[615px] relative tracking-[-0.01em] leading-[24px] inline-block max-w-full box-border pr-5">
                      cored keys add $MONIKER --keyring-backend os
                      --chain-id=$COREUM_CHAIN_ID
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[632px] w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0] z-[3] text-sm font-regular-label mq750:hidden">
          <div className="self-stretch h-9 rounded-lg flex flex-row items-center justify-start py-2 px-0 box-border text-primary-green">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">{`Validator `}</div>
          </div>
          <div className="self-stretch h-9 flex flex-col items-start justify-start py-0 px-3 box-border">
            <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                1. Open Keplr Wallet
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3">
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
    </div>
  );
};

export default CoreumLogoFrameShape;
