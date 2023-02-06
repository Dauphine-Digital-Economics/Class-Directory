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

	document.getElementById("valentinBtn").onclick = NewTab;
};

function leaFunction() {
    document.getElementById("more").innerHTML = "I did a double degree at the University of Paris Nanterre and my Master 1 in quantitative economics at Dauphine. I would like to work in Data Science Consulting field";
}

function yiChenFunction()
{
    alert("Hello World!");
}

function NewTab() {
    window.open("https://www.linkedin.com/in/valentinloiret/");
}