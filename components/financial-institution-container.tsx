import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FinancialInstitutionContainerType = {
  financialInstitutionName?: string;
  institutionCoordinates?: string;
  transactionParticipant?: string;
  uniqueIdentifier?: string;
  institutionDimensions?: string;
  institutionId?: string;
  transactionAmount?: string;

  /** Style props */
  propOpacity?: CSSProperties["opacity"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const FinancialInstitutionContainer: NextPage<
  FinancialInstitutionContainerType
> = ({
  financialInstitutionName,
  institutionCoordinates,
  transactionParticipant,
  uniqueIdentifier,
  institutionDimensions,
  institutionId,
  transactionAmount,
  propOpacity,
  propBorderRadius,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const cadIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className="flex-1 rounded-[3.03px] bg-shades-dark-3 flex flex-col items-center justify-start py-[6.0505757331848145px] px-0 gap-[6.0505757331848145px] opacity-[0] text-center text-8xs-8 text-light-1 font-overline-footer"
      style={frameDivStyle}
    >
      <div className="self-stretch rounded-t-[3.03px] rounded-b-none flex flex-row items-center justify-center gap-[3.630345582962036px]">
        <div className="relative leading-[7.26px] font-semibold">
          {financialInstitutionName}
        </div>
        <img
          className="w-[7.3px] relative h-[7.3px] object-cover"
          alt=""
          src={institutionCoordinates}
          style={cadIconStyle}
        />
        <div className="rounded-[1.21px] bg-mediumseagreen-300 flex flex-row items-center justify-center py-[0.6050575971603394px] px-[2.4202303886413574px] text-left text-9xs-6 text-primary-green">
          <div className="relative tracking-[-0.01em] leading-[5.45px] font-medium">
            {transactionParticipant}
          </div>
        </div>
      </div>
      <div className="self-stretch relative box-border h-[0.3px] border-t-[0.3px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[6.0505757331848145px] gap-[3.630345582962036px] text-left text-shades-light">
        <div className="self-stretch rounded-[3.03px] bg-gray-300 flex flex-col items-start justify-start p-[4.840460777282715px] gap-[4.840460777282715px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative tracking-[-0.01em] leading-[7.26px] font-medium">
              Create Wallet
            </div>
            <img className="w-[6.1px] relative h-[6.1px]" alt="" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.2101151943206787px] text-9xs-6 text-shades-carbon">
            <div className="w-[152.2px] relative tracking-[-0.01em] leading-[5.45px] inline-block">
              Wallet Address
            </div>
            <div className="rounded-[2.42px] flex flex-row items-center justify-start gap-[2.4202303886413574px] text-8xs-2 text-light-1">
              <div className="relative tracking-[-0.01em] leading-[6.35px]">
                {uniqueIdentifier}
              </div>
              <img
                className="w-[5.7px] relative h-[5.7px] object-cover"
                alt=""
                src={institutionDimensions}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-[3.03px] bg-gray-300 flex flex-col items-start justify-start p-[4.840460777282715px] gap-[4.840460777282715px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative tracking-[-0.01em] leading-[7.26px] font-medium">
              Fund Wallet
            </div>
            <img className="w-[6.1px] relative h-[6.1px]" alt="" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.840460777282715px] text-9xs-6 text-shades-carbon">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.2101151943206787px]">
              <div className="w-[152.2px] relative tracking-[-0.01em] leading-[5.45px] inline-block">
                CORE Balance
              </div>
              <div className="rounded-[2.42px] flex flex-row items-center justify-start gap-[1.815172791481018px] text-8xs-2 text-light-1">
                <img
                  className="w-[5.1px] relative h-[5.1px] overflow-hidden shrink-0"
                  alt=""
                />
                <div className="relative tracking-[-0.01em] leading-[6.35px]">
                  100.00
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.2101151943206787px]">
              <div className="w-[152.2px] relative tracking-[-0.01em] leading-[5.45px] inline-block">
                USD Balance
              </div>
              <div className="rounded-[2.42px] flex flex-row items-center justify-start gap-[2.4202303886413574px] text-8xs-2 text-light-1">
                <img
                  className="w-[5.1px] relative rounded-[7.26px] h-[5.1px] object-cover"
                  alt=""
                  src={institutionId}
                />
                <div className="relative tracking-[-0.01em] leading-[6.35px]">
                  {transactionAmount}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-[3.03px] bg-gray-300 flex flex-col items-start justify-start p-[4.840460777282715px] gap-[4.840460777282715px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex-1 relative tracking-[-0.01em] leading-[7.26px] font-medium">
              Generate Keys
            </div>
            <img className="w-[6.1px] relative h-[6.1px]" alt="" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.840460777282715px] text-9xs-6 text-shades-carbon">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.2101151943206787px]">
              <div className="w-[152.2px] relative tracking-[-0.01em] leading-[5.45px] inline-block">
                Public Key
              </div>
              <div className="rounded-[2.42px] flex flex-row items-center justify-start text-8xs-2">
                <div className="relative tracking-[-0.01em] leading-[6.35px] text-transparent !bg-clip-text [background:linear-gradient(225deg,_#25d695,_#179b69)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  View Details
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.2101151943206787px]">
              <div className="w-[152.2px] relative tracking-[-0.01em] leading-[5.45px] inline-block">
                Private Key
              </div>
              <div className="rounded-[2.42px] flex flex-row items-center justify-start text-8xs-2">
                <div className="relative tracking-[-0.01em] leading-[6.35px] text-transparent !bg-clip-text [background:linear-gradient(225deg,_#25d695,_#179b69)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInstitutionContainer;
