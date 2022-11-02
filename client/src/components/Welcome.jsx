import { useTransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { Loader, Input } from "."


const Welcome = () => {

  // get these data from context api...
  const { connectWallet, currentAccount, handleChange, formData, sendTransaction, isLoading } = useTransactionContext();
  console.log(isLoading)
  // css style apply by tailwind...
  const companyCommonStyles = "sm:px-0 px-2 sm:min-w-[120px] min-h-[70px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


  // when user click ==> send now <== button...
  // this is for checking function for user input...
  // checking that user give all input value or not? 
  // then send transaction start processing...
  const handleSubmit = e => {
    e.preventDefault();

    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return alert('Please provide all values...');

    sendTransaction();
  };


  return (
    <div className="w-full flex justify-center items-center">

      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 text-white">

          <h1 className="text-3xl sm:text-5xl  text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>

          <p className="text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>

          {
            !currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-blue p-3 rounded-full cursor-pointer hover:bg-blueHover"
              >
                <AiFillPlayCircle className="mr-2" />
                <p className="text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )
          }

          {/* --|--|-- Responsive Grid Table */}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`${companyCommonStyles} rounded-tl-2xl border-b-0`}>
              Reliability
            </div>
            <div className={`${companyCommonStyles} rounded-tr-2xl sm:rounded-tr-none border-b-0 border-l-0`}>
              Security
            </div>
            <div className={`${companyCommonStyles} sm:rounded-tr-2xl border-b-0 sm:border-l-0`}>
              Ethereum
            </div>
            <div className={`${companyCommonStyles} sm:rounded-bl-2xl border-l-0 border-b-0 sm:border-l-[0.5px] sm:border-b-[0.5px]`}>
              Web 3.0
            </div>
            <div className={`${companyCommonStyles} rounded-bl-2xl sm:rounded-bl-none sm:border-l-0`}>
              Low Fees
            </div>
            <div className={`${companyCommonStyles} rounded-br-2xl border-l-0`}>
              Blockchain
            </div>
          </div>

        </div>



        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">

          {/* 💳💳💳 Ethereum Card Design 💳💳💳 */}
          {/* 🧐🧐🧐 closer look at custom class name calling 🧐🧐🧐 */}
          <div className="p-3 flex justify-end items-start flex-col rounded-xl w-full sm:w-72 h-40 my-5 eth-card .white-glassMorphism">
            <div className="flex justify-between flex-col w-full h-full">

              {/* ether logo + info icon */}
              <div className="flex justify-between items-start ">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center hover:bg-yellow-50 hover:border-gray-600 duration-200 cursor-pointer group">
                  <SiEthereum fontSize={21} className="text-white group-hover:text-gray-700 duration-200" />
                </div>
                <div className="group cursor-pointer">
                  <BsInfoCircle fontSize={17} className="text-white group-hover:text-blue duration-200" />
                </div>
              </div>

              <div>
                <p className="text-white font-light text-sm pl-0.5">
                  Address:- {shortenAddress(currentAccount)}
                </p>
                <p className="text-gray-200 font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>

            </div>
          </div>

          {/* 🆕🆕🆕 User info input for sending amount 💰💰💰  */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassMorphism">

            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            {/* a simple horizontal line */}
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {
              isLoading
                ? <Loader />
                : (
                  <button
                    type="button"
                    onClick={e => handleSubmit(e)}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-md cursor-pointer duration-200"
                  >
                    Send now
                  </button>
                )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome