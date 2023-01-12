window.onload = function(){
	document.getElementById("balanceBtn").onclick = function(){
		console.log("clicked");
		if (typeof web3 !== 'undefined') {
		    console.log('web3 is enabled')
		    if (web3.currentProvider.isMetaMask === true) {
		      console.log('MetaMask is active')
		    } else {
		      console.log('MetaMask is not available')
		    }
		} else {
		    console.log('web3 is not found')
		}
	};
};