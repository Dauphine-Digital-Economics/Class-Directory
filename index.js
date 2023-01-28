window.onload = function(){
	document.getElementById("balanceBtn").onclick = function(){
		console.log("clicked");
		if (typeof web3 !== 'undefined') {
		    console.log('web3 is enabled')
		    // Instantiate a web3 object
		    var web3 = new Web3(window.ethereum);

		    if (web3.currentProvider.isMetaMask === true) {
		      console.log('MetaMask is active')
		      	try{
		      		await window.ethereum.enable();
		      		return true;
		      	} catch (e) {
		      		alert(e);
		      		return false;
		      	}

		      	var accounts = await web3.eth.getAccounts().then(console.log);
		    	
		    } else {
		    	// Popup to ask user to install metamask
		    	alert("Please install Metamask on your current browser");
		    }
		} else {
			// No web3 instance
			alert("Please install Metamask or connect a web3 Provider");
		}
	};
};