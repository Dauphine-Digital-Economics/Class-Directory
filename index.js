window.onload = function(){
	document.getElementById("balanceBtn").onclick = function(){
		if (typeof web3 !== 'undefined') {
		    console.log('web3 is enabled')

		    // Instantiate a web3 object
		    var web3 = new Web3(window.ethereum);

		    if (web3.currentProvider.isMetaMask === true) {
		      console.log('MetaMask is active')
		      	try{
		      		console.log("enter try statement")
		      		await window.ethereum.enable();
		      		return true;
		      	} catch (e) {
		      		console.log("error checking if metamask is logged in")
		      		alert(e);
		      		return false;
		      	}
		      	console.log("get accounts")
		      	const accounts = await web3.eth.getAccounts().then(console.log(accounts.length));
		    	
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