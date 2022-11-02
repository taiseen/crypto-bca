import React, { useEffect, useState, createContext, useContext } from "react";
import { contractABI, contractAddress } from "../utils/constants";
import { ethers } from "ethers";


// 🦊🦊🦊 metamask wallet account addons get... 🦊🦊🦊
const { ethereum } = window;


// 1️⃣1️⃣1️⃣ create context 1️⃣1️⃣1️⃣
export const TransactionContext = createContext();


// this function dedicated only for contract creation... 
const createEthereumContract = () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    // fetch our 📜📜📜 contract... 🤝🤝🤝 from solidity file...
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionsContract;
};


// 2️⃣2️⃣2️⃣ provide context all over the react application... 2️⃣2️⃣2️⃣
export const TransactionsProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

    const handleChange = (e, name) => {
        setFormData(prev => ({ ...prev, [name]: e.target.value }));
    };


    const getAllTransactions = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContract();

                const availableTransactions = await transactionsContract.getAllTransactions();

                const structuredTransactions = availableTransactions.map((transaction) => ({
                    addressTo: transaction.receiver,
                    addressFrom: transaction.sender,
                    timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                    message: transaction.message,
                    keyword: transaction.keyword,
                    amount: parseInt(transaction.amount._hex) / (10 ** 18)
                }));

                console.log(availableTransactions);

                setTransactions(structuredTransactions);
            } else {
                console.log("Ethereum is not present");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // this function call inside useEffect() for execution at onMount of this component...
    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert(`🟥 Please install MetaMask... 
🟥 from your browser addons marketplace...`);

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {
                // every single render have access our account...
                setCurrentAccount(accounts[0]);

                // get all the transactions...
                getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
        }
    };


    const checkIfTransactionsExists = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContract();
                const currentTransactionCount = await transactionsContract.getTransactionCount();

                window.localStorage.setItem("transactionCount", currentTransactionCount);
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };


    // this function call use at user click on button from jsx|ui to connect wallet 
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert(`🟥 Please install MetaMask... 
🟥 from your browser addons marketplace...`);

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);

            window.location.reload();
        } catch (error) {
            console.log(error);
            alert(`❌ ${error.message} ❌`);
            throw new Error("No ethereum object");
        }
    };


    const sendTransaction = async () => {
        try {
            if (ethereum) {
                const { addressTo, amount, keyword, message } = formData;
                // console.log(formData);

                // get method from solidity 📜📜📜 contract... 🤝🤝🤝 file of (.sol)
                const transactionsContract = createEthereumContract();

                // convert amount value that illegible to ethereum network 
                const parsedAmount = ethers.utils.parseEther(amount);

                // sending ethereum ==> one address to another address
                await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex,
                    }],
                });

                // add to blockchain & return hash value of that block... 
                // & for execution all of these its take some time...
                const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log(`Success - ${transactionHash.hash}`);
                setIsLoading(false);

                const transactionsCount = await transactionsContract.getTransactionCount();

                setTransactionCount(transactionsCount.toNumber());
                window.location.reload();
            } else {
                console.log("No ethereum object");
            }
        } catch (error) {
            console.log(error);
            if (error.message) alert(error.message.split(':')[1])

            throw new Error("No ethereum object");
        }
    };


    useEffect(() => {
        checkIfWalletIsConnect();
        checkIfTransactionsExists();
    }, [transactionCount]);


    return (
        <TransactionContext.Provider
            value={{
                transactionCount,
                connectWallet,
                transactions,
                currentAccount,
                isLoading,
                sendTransaction,
                handleChange,
                formData,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );

};


// 3️⃣3️⃣3️⃣ use context by this function call... 3️⃣3️⃣3️⃣
export const useTransactionContext = () => useContext(TransactionContext);