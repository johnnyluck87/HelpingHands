var trainData = new Firebase("https://train-time.firebaseio.com/");

$("#addTrainBtn").on("click", function(){

    var trainName = $("#trainNameInput").val().trim();
    var destiEntry = $("#destinationInput").val().trim();
    var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
    var freqEntry = $("#frequencyInput").val().trim();

    var newTrain = {
        name:  trainName,
        destination: destiEntry,
        start: trainStart,
        frequency: freqEntry
    }

    trainData.push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(newTrain.start);
    console.log(newTrain.frequency)

    alert("Train successfully added");

    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#startInput").val("");
    $("#frequencyInput").val("");

    return false;
});


trainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destiEntry = childSnapshot.val().role;
    var trainStart = childSnapshot.val().start;
    var freqEntry = childSnapshot.val().rate;

    console.log(trainName);
    console.log(destiEntry);
    console.log(trainStart);
    console.log(freqEntry);

    var trainStartPretty = moment.unix(trainStart).format("1111");
    var trainNext = moment().diff(moment.unix(trainStart, '1111'), "1111");
    console.log(trainNext);

    var minsAway = freqEntry + trainStart;
    console.log(minsAway);

    $("#trainschedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destiEntry + "</td><td>" + trainStart + "</td><td>" + freqEntry + "</td><td>" + minsAway + "</td><td>");

});


