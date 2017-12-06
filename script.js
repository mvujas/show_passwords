var inputs = document.getElementsByTagName("input");
for (var i=0; i<inputs.length; i++)
	if (inputs[i].type.toLowerCase() === "password")
		inputs[i].addEventListener("dblclick", function(e) {
			chrome.storage.local.get("active", function(result) {
				if(result.active)
					e.target.type = (e.target.type.toLowerCase() === "password") ? "text" : "password";
			});			
		});