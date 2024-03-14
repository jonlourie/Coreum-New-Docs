import type { NextPage } from "next";

export type BuildFromSourcesContainerType = {
  featureDescription?: string;
  actionDescription?: string;
  commandDescription?: string;
};

const BuildFromSourcesContainer: NextPage<BuildFromSourcesContainerType> = ({
  featureDescription,
  actionDescription,
  commandDescription,
}) => {
  return (
    <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border text-left text-sm text-primary-green font-regular-label">
      <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
        <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
          {featureDescription}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-4 border-l-[1px] border-solid border-shades-dark-1">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              {actionDescription}
            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              {commandDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildFromSourcesContainer;
