window.onload = function(){
	document.getElementById("balanceBtn").onclick = async() => {
		if (typeof window.ethereum !== 'undefined') {
		    console.log('web3 is enabled');
		    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			const currentAccount = accounts[0];
			await ethereum.request({method: 'eth_getBalance', params: [currentAccount, 'latest']}).then(
				(balance) => {
					alert("Success! Your current Balance is" + balance);
				}).catch(() => {
					alert("getBalance RPC call failed");
				});
			console.log(balance);
		} else{
			alert("Install MetaMask or connect a provider");
		}

	};
};