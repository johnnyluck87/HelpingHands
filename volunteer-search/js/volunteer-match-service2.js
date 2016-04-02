var vmProxyURL = "https://web.njit.edu/~jab48/volunteermatch.php";

// sends request to proxy service and posts response
function sendRequest(request,callback) {

	return $.ajax({
		method:"POST",
		url:vmProxyURL,
		data:{
			action:request.action,
			query:JSON.stringify(request.query)
		},
		dataType:"json",
		cache:false

	}).error(function(err) {

		console.error(err);

	}).success(function(data) {

		return data;
	});
}

// creates request for search opportunities call to send
function searchOpportunities(query) {

	var request = {
		action:"searchOpportunities",
		query: {
			opportunityTypes:['public','private'],
			virtual:true,
			keywords:[]
		}
	};

	var queryAsArray = query.split(" ");

	for(var keyword in queryAsArray)
		request.query.keywords.push(queryAsArray[keyword]);

	return sendRequest(request);
}


// creates request for search organizations call to send
function searchOrganizations(query) {

	var request = {
		action: "searchOrganizations",
		query: {
			organizationType:['public','private'],
			location:"New York",
			keywords:[]
		}
	};

	var queryAsArray = query.split(" ");

	for(var keyword in queryAsArray)
		request.query.keywords.push(queryAsArray[keyword]);

	return sendRequest(request);
}