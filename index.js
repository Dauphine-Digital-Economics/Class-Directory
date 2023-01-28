window.onload = function(){
	document.getElementById("balanceBtn").onclick = async() => {
		if (typeof web3 !== 'undefined') {
		    console.log('web3 is enabled')
		    const web3 = await logIntoMetaMask();
		    const currentWallet = await web3.eth.requestAccount()[0];
		    console.log(currentWallet);
		} else{
			alert("Install MetaMask or connect a provider");
		}

	};

	function logIntoMetaMask(){
		return new Promise(async (resolve, reject)=> {
			var web3 = new Web3(window.ethereum);	
			try{
			    await window.ethereum.request({method : "eth_accounts"});
			    resolve(web3);
			} catch (e) {
				console.log(e);
			    reject(error);
			}
		})
	}
};