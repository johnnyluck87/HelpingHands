var queryURL = "http://www.stage.volunteermatch.org/api/call?";

// makes a call to the API
function apiCall(request) {

	$.ajax({
		url:  queryURL,
	    data: request,
	    type: "GET",
	    beforeSend: setHeader,
	    success: function() {
	    	return true;
	    } 
	});
}

// Sets headers for search parameters for API call
function setHeader(xhr) {

	xhr.setRequestHeader('Authorization', 'WSSE profile="UsernameToken"');
	xhr.setRequestHeader('X-WSSE', 'UsernameToken Username="johnserencses", PasswordDigest="quR/EWLAV4xLf9Zqyw4pDmfV9OY=", Nonce="d36e316282959a9ed4c89851497a717f", Created="2003-12-15T14:43:07-0700"');
}

// Search for volunteer opportunities
function searchOpportunities(query) {

	
}