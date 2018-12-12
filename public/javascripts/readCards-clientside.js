
function randomize(range){
    var result = (Math.floor(Math.random() * range) + 1);
    return result;
}
function filenameFix(int){
    var filename;
    switch(int){
        case 1:
            filename = "Artifact";
            break;
        case 2:
            filename = "Beast";
            break;
        case 3:
            filename = "Broken-One";
            break;
        case 4:
            filename = "Darklord";
            break;
        case 5:
            filename = "DonJon";
            break;
        case 6:
            filename = "Executioner";
            break;
        case 7:
            filename = "Ghost";
            break;
        case 8:
            filename = "Horseman";
            break;
        case 9:
            filename = "Innocent";
            break;
        case 10:
            filename = "Marionette";
            break;
        case 11:
            filename = "Mist";
            break;
        case 12:
            filename = "Raven";
            break;
        case 13:
            filename = "Seer";
            break;
        case 14:
            filename = "Tempter";
            break;
        default:
            console.log("Error: Input number wrong.");
            break;
    }
    return filename;
}

//no cards drawn are the same
function noSameLow(a,b,c){
    a = randomize(40);
    b = randomize(40);
    c = randomize(40);
    //this may be a problem
    if (a != b||c){
        if (b != c){
            return a,b,c;
        }
        else{
            noSameLow(a,b,c);
        }
    }
    else{
        noSameLow(a,b,c);
    }
}

//no cards drawn are the same
function noSameHigh(a,b){
    a = randomize(14);
    b = randomize(14);

    if(a != b){
        return a,b;
    }
    else{
        noSameHigh(a,b);
    }
}

function drawLowCards(){
    console.log("Drawing from Low Deck...");
    
    var plotPoint = $("#plotPoint").val();
    var cardName = $("#cardName").val();
    idA = 0;
    idB = 0;
    idC = 0;
    //this may be a problem
    idA,idB,idC = noSameLow(idA,idB,idC);
    console.log(idA,idB,idC);

    $.get("/getLowCardA",{id:idA}, function(data){
        for(var i = 1; i <= data.list.length; i++) {
            var card = data.list[i];

            $("#1").append("<h3 class='plotPoint'>" + card.plotPoint + "</h3>");
            $("#1").append("<h4 class='cardName'>" + card.cardName + "</h4>");
            $("#textA").append("<p class='plotReading'>" + card.plotReading + "</p>");
            $("#textA").append("<p class='cardReading'>" + card.cardReading + "</p>");

        }
    });

    $.get("/getLowCardB",{id:idB},function(data){
        for(var i = 1; i <= data.list.length; i++) {
            var card = data.list[i];
            $("#2").append("<h3 class='plotPoint'>" + card.plotPoint + "</h3>");
            $("#2").append("<h4 class='cardName'>" + card.cardName + "</h4>");
            $("#textB").append("<p class='plotReading'>" + card.plotReading + "</p>");
            $("#textB").append("<p class='cardReading'>" + card.cardReading + "</p>");

        }
    });

    $.get("/getLowCardC",{id:idC}, function(data){
        for(var i = 1; i <= data.list.length; i++) {
            var card = data.list[i];
            $("#3").append("<h3 class='plotPoint'>" + card.plotPoint + "</h3>");
            $("#3").append("<h4 class='cardName'>" + card.cardName + "</h4>");
            $("#textC").append("<p class='plotReading'>" + card.plotReading + "</p>");
            $("#textC").append("<p class='cardReading'>" + card.cardReading + "</p>");

        }
    });
    displayLowCards(idA,idB,idC);
}

function drawHighCard(){
    console.log("Drawing from High Deck...");
    idA = 0;
    idB = 0;
    idA,idB = noSameHigh(idA,idB);
    console.log(idA,idB);

    $.get("/getHighCardA", {id:idA}, function(data){
        for(var i = 1; i <= data.list.length; i++) {
            var card = data.list[i];
            $("#4").append("<h3 class='plotPoint'>" + card.plotPoint + "</h3>");
            $("#4").append("<h4 class='cardName'>" + card.cardName + "</h4>");
            $("#textD").append("<p class='plotReading'>" + card.plotReading + "</p>");
            $("#textD").append("<p class='cardReading'>" + card.cardReading + "</p>");
        }

    });

    $.get("/getHighCardB", {id:idB}, function(data){
        for(var i = 1; i <= data.list.length; i++) {
            var card = data.list[i];
            $("#5").append("<h3 class='plotPoint'>" + card.plotPoint + "</h3>");
            $("#5").append("<h4 class='cardName'>" + card.cardName + "</h4>");
            $("#textE").append("<p class='plotReading'>" + card.plotReading + "</p>");
            $("#textE").append("<p class='cardReading'>" + card.cardReading + "</p>");
        }
    });
    displayHighCards(idA,idB);

}
function hideContent(){
    document.getElementById("cardButton").display="none";
    document.getElementById("introImage").display="none";
}

function displayLowCards(a,b,c){

    $("#tome").append("<img src='", + a, + ".png'>");
    $("#symbol").append("<img src='", + b, + ".png'>");
    $("#sword").append("<img src='", + c, + ".png'>");
}

function displayHighCards(a,b){
    filename = filenameFix(a);
    $("#enemy").append("<img src='", + filename, + ".png'>");
    filename = filenameFix(b);
    $("#location").append("<img src='", + filename, + ".png'>");
}

function reveal(){
    document.getElementById("resetButton").style.display="block";
    document.getElementById("cardDisplay").style.display="block";
    document.getElementById("cardDescriptions").style.display="block";

}

function reset(){
    document.getElementById("cardButton").style.display="block";
    document.getElementById("introImage").style.display="block";
    
    document.getElementById("resetButton").style.display="none";
    document.getElementById("cardDisplay").style.display="none";
    document.getElementById("cardDescriptions").style.display="none";

}
function readCards(){
    hideContent();
    drawLowCards();
    drawHighCard();
    reveal();
}

