'use strict'

const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('365bb5d83f27072a9fe0507f189407016ea564e7cc2a58b3439caa56ebf365c8')
const myWalletAddress = myKey.getPublic('hex')

let jonathanCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
jonathanCoin.addTransaction(tx1)

console.log('\n Starting the miner...')
jonathanCoin.minePendingTransactions(myWalletAddress)

console.log('\nBalance of Jonathan is', jonathanCoin.getBalanceOfAddress(myWalletAddress))


console.log('Is Chain valid?', jonathanCoin.isChainValid())

console.log(jonathanCoin)




