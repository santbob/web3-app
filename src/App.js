import React, {useEffect, useState} from "react";
import { ethers } from "ethers";
import './App.css';
import contractABI from './utils/WavePortal.json';
import { FaEthereum } from 'react-icons/fa';
import {GiTrophyCup} from 'react-icons/gi';


const CONTRACT_ADDRESS = "0x597da3BdbDd7dc003Cc6dd2D6e0c462E19672db7";

export default function App() {
  /*
  * Just a state variable we use to store our user's public wallet.
  */

  // initalize state variables

  
  
  const checkIfWalletIsConnected = async () => {
    try {
      // check for ethereum in window global object

      // we will use ethers library to connect to our contract, documentation here https://docs.ethers.io/v5/getting-started/ 
      // request for "eth_accounts" if present, set it in the state, else alert user to connect to wallet
      // This is a chance to load and store the contract on the state variable

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  },[])

  const loadContract = async () => {
    try {
      const {ethereum} = window;

      if(ethereum) {
        // get the provider
        // get the signer from the provider
        // get the contract instance, make sure you have the ABI and address of the contract
        // set the contract instance in the state
       
        // load any values you need from the contract

      } else {
        console.log("ethereum object doesn't exist");
      }
    } catch ( error) {
      console.log(error)
    }
  }


  const connectWallet = async () => {
    try {
      
      // check for ethereum in window global object
      // request for "eth_requestAccounts" if present, get the account and store it in the state
      
      // now that account is loaded, load the contract

    } catch (error) {
      console.log(error)
    }
  }

  const loadWaveCount = async (contract) => {
    const count = await contract.getTotalWaves();
    setWaveCount(count.toNumber())
    console.log("Retrieved total wave count...", count.toNumber());
  }

  const wave = async () => {
    console.log("Starting to wave...");
    try {
      const {ethereum} = window;

      if(ethereum) {
      
        // get the current wave count from the contract

        // call the contract function to wave, set the max gas limit to 1000000

        // set the loading state to true
        
        // clear the wave message box

        // wait for txn to be mined
        
        // load the wave count again.

        // set the loading state to false
        
        // load the latest waves from the contract

      } else {
        console.log("ethereum object doesn't exist");
      }
    } catch ( error) {
      console.log(error)
      alert("Transaction Failed, please try again.")
      // set the loading state to false
    }
  }
  
  const getAllWaves = async (contract) => {
    try {
      // get all the waves from the contract
      // map the waves to formated data and store it in the state

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Welcome to the Wave Portal!
        </div>

        <div className="bio">
        This is a decentralized application that allows you to wave at me and you get a chance to win.
        </div>

        {loading && (<div className="loader">
            Waving and waiting for Transaction to complete...
        </div>
        )}

       {!loading && currentAccount && (
          <div className="waveForm">
              <div className="waves">
                  I was waved <b>{waveCount}</b> times
              </div>
              <input type="text" value={waveMessage} onChange={(e) => setWaveMessage(e.target.value)} />
              <button className="waveButton" onClick={wave}>
                👋 Wave at Me
              </button>
          </div>
        )}
        {
          /*
          * If there is no currentAccount render the connect wallet button
          */
        }
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet 
          </button>
        )}
      {allWaves && (
        <ul className="wavesList">
            {allWaves.map((wave, index) => {
          return (
            <li key={index}>
              <div className="who"><FaEthereum /> {wave.address} {wave.winner && (<GiTrophyCup className="winner"/>)}</div>
              <div className="message">{wave.message}</div>
              <div className="dateTime">{wave.timestamp.toLocaleString()}</div>
            </li>)
        })}
        </ul>
      )}
        
      </div>
    </div>
  );
}
