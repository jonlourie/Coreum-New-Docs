import type { NextPage } from "next";

const Content: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20 gap-[80px] text-left text-5xl text-primary-off-white font-regular-label lg:pt-5 lg:pb-[34px] lg:box-border mq750:pb-[22px] mq750:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-13xl text-shades-light mq450:gap-[20px_40px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          Smart Contracts
        </h1>
        <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer">
          <p className="m-0">
            Akin to most modern blockchains, Coreum will be able to store and
            execute Smart Contracts.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            In essence, Smart Contracts are computer programs stored on a
            blockchain, which may be instantiated and executed to perform custom
            functions. That is to say, these functions are not included in the
            code of the blockchain itself, but are defined in a manner which
            enables the blockchain to execute them.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Coreum leverages WebAssembly (WASM) as the engine for Smart
            Contracts. WASM overcomes many of the shortcomings of other Smart
            Contract engines such as the Ethereum Virtual Machine, such as
            security flaws, data oversizing, and the necessary coupling with
            Solidity, the language in which Smart Contracts are written. Beyond
            WASM having noteworthy features such as its portability, efficiency,
            and turing completeness, it can also be accessed through other
            programming languages including C/C++, JavaScript/Typescript, Rust,
            Kotlin, and Go.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            CosmWasm
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] text-shades-light font-overline-footer">
            <p className="m-0">
              <span className="font-semibold font-overline-footer text-primary-green">
                CosmWasm
              </span>
              <span>
                {" "}
                is the platform Coreum uses to handle WASM Smart Contracts.
              </span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              It forms an important pillar of the Cosmos SDK, and has a number
              of advantages such as the ability to interact with Smart Contracts
              on different blockchains using the Inter-Blockchain Communication
              (IBC) protocol. This enables Smart Contracts stored on Coreum to
              enhance not only the functionality of Coreum itself, but all other
              blockchains in the Cosmos ecosystem that are compatible with
              CosmWasm Smart Contracts.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Architecture
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] text-shades-light font-overline-footer">
            <p className="m-0">
              <span className="font-overline-footer text-shades-light">
                Smart Contracts produce and consume messages. These messages
                follow what is commonly referred to as the 
              </span>
              <span className="font-semibold font-overline-footer text-primary-green">
                actor model
              </span>
              <span>
                , which means that they behave in a 'fire and forget' manner.
              </span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              In effect, these messages are designed to be synchronous in
              nature, this avoiding race-conditions and pitfalls of awaiting
              promises. Other advantages of this model are:
            </p>
            <ul className="m-0 text-inherit pl-[21px]">
              <li className="mb-0">
                <span className="font-semibold font-overline-footer text-primary-off-white">
                  Increased Security
                </span>
                <span>
                   - Since Smart Contracts are unable to call each other, it
                  avoids re-entrance attacks. Messages may be passed between
                  contracts, but they cannot directly call one another.
                </span>
              </li>
              <li className="mb-0">
                <span className="font-semibold font-overline-footer text-primary-off-white">
                  Inter-Blockchain Messaging
                </span>
                <span className="font-overline-footer text-shades-light">
                   - Messages can be sent across blockchains through the IBC.
                </span>
              </li>
              <li>
                <span className="font-semibold font-overline-footer text-primary-off-white">
                  Ease of Serialisation
                </span>
                <span className="font-overline-footer text-shades-light">
                   - Messages can be easily serialized to a number of different
                  formats for easy integration with off-chain systems.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-lg mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Contract Flow
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            The lifecycle of a Smart Contract can be split into three distinct
            phases:
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
              Contract Creation / Upload
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
              Once the code for a Smart Contract is compiled into WASM binaries,
              they are optimised and uploaded to the blockchain. However,
              neither state nor a contract addresses exist at this stage.
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
              Contract Instantiation
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
              The contract may then be instantiated with through a code
              reference as well as some initial state. This creates the address
              which identifies the contract. For reference, if this were an
              ERC20 Token Contract on an Ethereum Virtual Machine (EVM)
              blockchain, this is the stage at which information like the token
              name, symbol, etc. can be set.
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
              Contract execution
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
              Each actor has exclusive access to its own internal state. This
              may support different calls, but they are all unprivileged; usage
              of previously instantiated contracts depends on the contract
              design.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            CosmWasm Module
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            Coreum makes use of a custom module for the purpose of processing
            WASM related messages in order to upload, instantiate, and execute
            Smart Contracts.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Rust Language
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            Although Smart Contracts may be written in a number of different
            languages as stated above, Rust remains the language of choice. This
            is due to Rust's characteristic memory model, which promotes the
            creation of memory-safe, fast, and lightweight byte code that is
            ideal for on-chain storage.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
