var vmProxyURL = "https://web.njit.edu/~jab48/volunteermatch.php";


function sendRequest(request,callback) {

$.ajax({
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

callback(data);
});
}


function searchOpportunities(query,callback) {

var request = {
action:"searchOpportunities",
query: {
opportunityTypes:['public'],
virtual:true,
keywords:[]
}
};

var queryAsArray = query.split(" ");

for(var keyword in queryAsArray)
request.query.keywords.push(queryAsArray[keyword]);

sendRequest(request,callback);
}
