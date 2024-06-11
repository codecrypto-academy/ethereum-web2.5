geth --datadir nodo1 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8546 --allow-insecure-unlock --unlock "" --password pwd.txt --port 30034 --bootnodes ""

geth --datadir nodo2 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8547 --allow-insecure-unlock --unlock "" --password pwd.txt --port 30035 --bootnodes "" --ipcpath "\\.\pipe\geth2.ipc" --authrpc.port 8552

geth --datadir nodo3 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8548 --allow-insecure-unlock --unlock "" --password pwd.txt --port 30036 --bootnodes "" --ipcpath "\\.\pipe\geth3.ipc" --authrpc.port 8553

geth --datadir nodo4 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8549 --allow-insecure-unlock --unlock "" --password pwd.txt --port 30037 --bootnodes "" --ipcpath "\\.\pipe\geth4.ipc" --authrpc.port 8554

var tx = {from: "", to: "", value: web3.toWei(10, "ether")}}