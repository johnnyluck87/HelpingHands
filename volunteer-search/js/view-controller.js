
$(document).ready(function() {

	// register event handlers

	$('#findButton').on('click', search);
});


function search() {

	var query = $('#searchText').val();

	if(!query)
		return;

	searchOpportunities(query, function(data){

		if(data) {

			for(var i in data.opportunities) {

				var opp = data.opportunities[i];

				var li = $('<li>');
				var a = $('<a>');

				// we have to decode the link because it replaces special chars with code like %20 for spaces
				a.attr('href',decodeURIComponent(opp.vmUrl));
				a.text(opp.parentOrg.name);
				
				li.append(a);
				$('#org-list').append(li);
			}
		}
	});

}