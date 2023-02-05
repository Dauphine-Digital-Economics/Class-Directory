window.onload = function(){
	document.getElementById("balanceBtn").onclick = async() => {
		if (typeof window.ethereum !== 'undefined') {
		    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			const currentAccount = accounts[0];
			await ethereum.request({method: 'eth_getBalance', params: [currentAccount, 'latest']}).then(
				(value) => {
					const decBalance = HexToWei(value);
					alert("Success! Your current Balance is " + decBalance + " Wei");
				}, (reason) => {
					alert("getBalance failed due to " + reason);
				});
		} else{
			alert("Install MetaMask or connect a provider");
		}
	};

	function HexToWei(hexBalance){
		return parseInt(hexBalance, 16);
	}
};

	document.getElementById("kitties").onclick = function() {
		let kitties = document.querySelectorAll(".kitty");
		for (let kitty of kitties) {
			kitty.style.transition = "all 3s";
			kitty.style.transform = "translateX(100%)";
		}
};
