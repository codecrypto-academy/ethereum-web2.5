const Web3 = require('Web3')

const web3 = new Web3("http://localhost:8548") // Nos conectamos al nodo 3 

async function getUltimoBloque() {
    const bloque = await web3.eth.getBlockNumber()
    console.log(bloque)
    return bloque
}

var tx = { 
    from: "", 
    to: "", 
    value: web3.utils.toWei('5', "ether") 
}

async function enviarEther(){
    const txResultado = await web3.eth.personal.sendTransaction(tx, "123456")
    console.log(txResultado)
}

async function getBloqueInfo(){
    const ultBloque = await web3.eth.getBlockNumber()
    const bloqueInfo = await web3.eth.getBlock(ultBloque)
    console.log(bloqueInfo)
}

async function getTxInfo(){
    const ultBloque = await web3.eth.getBlockNumber()
    const bloqueInfo = await web3.eth.getBlock(ultBloque)
    const TxInfo = await web3.eth.getTransaction(bloqueInfo.transactions[0])
    console.log(TxInfo)
}

async function getSaldo(){
    const ultBloque = await web3.eth.getBlockNumber()
    const bloqueInfo = await web3.eth.getBlock(ultBloque)
    const TxInfo = await web3.eth.getTransaction(bloqueInfo.transactions[0])
    const saldo =  web3.utils.fromWei(await web3.eth.getBalance(TxInfo.from), 'ether');
    const saldo2 =  await web3.eth.getBalance(TxInfo.from) / 1e18
    console.log(saldo)
    console.log(saldo2)
}

enviarEther()
getUltimoBloque()
getBloqueInfo()
getTxInfo()
getSaldo()