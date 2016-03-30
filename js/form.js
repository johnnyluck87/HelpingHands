var volunsubmission = new Firebase("https://helpinghandsform.firebaseio.com/");

$("#submit").on("click", function(){

    var volName = $("#NameInput").val().trim();
    var volEmail = $("#emailInput").val().trim();
    var volPhone = $("#phonInput").val().trim();
    var volSkills = $("#skillsInput").val().trim();

    var newTrain = {
        name:  volName,
        destination: volEmail,
        start: volPhone,
        frequency: volSkills
    }

    trainData.push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(newTrain.start);
    console.log(newTrain.frequency)

    alert("Train successfully added");

    $("#NameInput").val("");
    $("#emailInput").val("");
    $("#phonInput").val("");
    $("#skillsInput").val("");

    return false;
});


trainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    var volName = childSnapshot.val().name;
    var volEmail = childSnapshot.val().role;
    var volPhone = childSnapshot.val().start;
    var volSkills = childSnapshot.val().rate;

    console.log(volName);
    console.log(volEmail);
    console.log(volPhone);
    console.log(volSkills);

    var volPhonePretty = moment.unix(volPhone).format("1111");
    var trainNext = moment().diff(moment.unix(volPhone, '1111'), "1111");
    console.log(trainNext);

    var minsAway = volSkills + volPhone;
    console.log(minsAway);

    $("#trainschedule > tbody").append("<tr><td>" + volName + "</td><td>" + volEmail + "</td><td>" + volPhone + "</td><td>" + volSkills + "</td><td>" + minsAway + "</td><td>");

});


