window.onload = function(){
	document.getElementById("balanceBtn").onclick = async() => {
		if (typeof window.ethereum !== 'undefined') {
		    console.log('web3 is enabled');
		    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			const currentAccount = accounts[0];
			console.log(currentAccount);
		} else{
			alert("Install MetaMask or connect a provider");
		}

	};
};