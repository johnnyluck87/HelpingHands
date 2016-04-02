$(document).ready(function(){

	$('#search-form').on('submit',search);
});

function search(event) {

	var query = $('#searchText').val();

	if(!query)
		return;

	$('#org-list').empty();
	event.preventDefault();

	$('#checkbox input:checked').each(function(){

		if(this.name === "opportunities")
			displayOportunnities(query);

		if(this.name === "organizations")
			displayOrganizations(query);

	});

}


function listItem(item) {


	var li = $('<li>');
	var a = $('<a>');
	var span = $('<span>');

	a.attr('href',item.link.url);
	a.text(item.link.text);
	span.html(item.description);
	li.append(a, span);

	$('#org-list').append(li);
}



function displayOportunnities(query) {

	searchOpportunities(query).then(function(data){

		if(!data) {
			console.error("No data received from searchOpportunities");
			return;
		}console.log(data);

		for(var i in data.opportunities) {
			
			var opp = data.opportunities[i];

			var item = {
				link: {
					text: opp.parentOrg.name,
					url: decodeURIComponent(opp.vmUrl)
				},
				description: opp.description
			};

			listItem(item);
		}
	});
}


function displayOrganizations(query) {

	searchOrganizations(query).then(function(data){

		if(!data) {
			console.error("No data received from searchOpportunities");
			return;
		}

		console.log(data);

		for(var i in data.organizations) {
			
			var org = data.organizations[i];

			var item = {
				link: {
					text: org.name,
					url: decodeURIComponent(org.vmUrl)
				},
				description: org.description
			};

			listItem(item);
		}
	});
}




