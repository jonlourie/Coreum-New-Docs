import type { NextPage } from "next";

export type OSCompatibilitySectionType = {
  osInstructions?: string;
  osSpecificInstructions?: string;
};

const OSCompatibilitySection: NextPage<OSCompatibilitySectionType> = ({
  osInstructions,
  osSpecificInstructions,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-left text-base text-shades-light font-overline-footer">
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl text-primary-off-white font-regular-label">
        <div className="self-stretch relative tracking-[-0.02em] leading-[30px] font-medium">
          {osInstructions}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
          <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
            <p className="m-0">{osSpecificInstructions}</p>
            <ul className="m-0 text-inherit pl-[21px]">
              <li className="mb-0">
                <span>Verify that </span>
                <span className="font-semibold font-overline-footer text-primary-green">
                  network variables
                </span>
                <span className="font-overline-footer text-shades-light">
                   are set up correctly.
                </span>
              </li>
              <li>
                <span className="font-overline-footer text-shades-light">
                  Create a proper folder structure for cored.
                </span>
              </li>
            </ul>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
              <div className="flex flex-row items-start justify-start p-4">
                <div className="relative tracking-[-0.01em] leading-[24px]">
                  1
                </div>
              </div>
              <img
                className="self-stretch w-0 relative max-h-full"
                alt=""
                src="/divider2.svg"
              />
              <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
                <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                  <span className="text-primary-yellow">mkdir</span>
                  <span>{` `}</span>
                  <span className="text-mediumseagreen-100">
                    -p $COREUM_HOME
                  </span>
                  <span>/bin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">Install the required util: curl.</li>
            <li>Download cored and put it in the required folder.</li>
          </ul>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
          <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
            <div className="flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">1</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">2</p>
              </div>
            </div>
            <img
              className="self-stretch w-0 relative max-h-full"
              alt=""
              src="/divider1.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">
                  <span className="text-primary-yellow">{`curl `}</span>
                  <span className="text-mediumseagreen-100">-LO</span>
                  <span className="text-primary-yellow">{` `}</span>
                  <span>
                    https://github.com/CoreumFoundation/coreum/releases/download/
                  </span>
                  <span className="text-mediumseagreen-100">
                    $COREUM_VERSION/$COREUM_BINARY_NAME
                  </span>
                </p>
                <p className="m-0 text-mediumseagreen-100">
                  <span className="text-primary-yellow">{`mv `}</span>
                  <span>$COREUM_BINARY_NAME $COREUM_HOME</span>
                  <span className="text-primary-dim">/bin/cored</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>If you are getting 404 error at this step, run:</li>
          </ul>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
          <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
            <div className="flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">1</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">2</p>
              </div>
            </div>
            <img
              className="self-stretch w-0 relative max-h-full"
              alt=""
              src="/divider1.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                <p className="m-0">
                  <span className="text-primary-yellow">{`curl `}</span>
                  <span className="text-mediumseagreen-100">-LO</span>
                  <span className="text-primary-yellow">{` `}</span>
                  <span>
                    https://github.com/CoreumFoundation/coreum/releases/download/
                  </span>
                  <span className="text-mediumseagreen-100">
                    $COREUM_VERSION/$COREUM_BINARY_NAME
                  </span>
                </p>
                <p className="m-0 text-mediumseagreen-100">
                  <span className="text-primary-yellow">{`mv `}</span>
                  <span>$COREUM_BINARY_NAME $COREUM_HOME</span>
                  <span className="text-primary-dim">/bin/cored</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
          <a
            className="text-[inherit]"
            href="https://github.com/CoreumFoundation/coreum/releases"
            target="_blank"
          >
            releasesopen in new window
          </a>
        </div>
      </div>
    </div>
  );
};

export default OSCompatibilitySection;
