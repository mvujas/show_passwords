var statusBar = document.getElementById("state");
var statusButton = document.getElementById("stateButton");
var active = undefined;
var changeTexts = function() {
	statusBar.innerHTML = "Status: ";
	if(active) {
		statusBar.innerHTML += "active";
		stateButton.innerHTML = "Pause";
	}
	else {
		statusBar.innerHTML += "inactive";
		stateButton.innerHTML = "Start";
	}
};

chrome.storage.local.get("active", function(result) {
	active = result.active;
	if(active === undefined) {
		chrome.storage.local.set({"active": true});
		active = true;
	}
	changeTexts();
});

statusButton.addEventListener("click", function() {
	active = !active;
	chrome.storage.local.set({"active": active});
	changeTexts();
});