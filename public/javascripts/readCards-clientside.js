
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
function noSameLow(){
    //this may be a problem
    var a = randomize(40);
    var b = randomize(40);
    var c = randomize(40);
    thisArray = [a,b,c];
    if ((a != b) && (a != c)){
        if (b != c){
            return thisArray;
        }
        else{
            noSameLow();
        }
    }
    else{
        noSameLow();
    }
}

//no cards drawn are the same
function noSameHigh(){
    var a = randomize(14);
    var b = randomize(14);
    var thisArray = [a,b];

    if(a != b){
        return thisArray;
    }
    else{
        noSameHigh();
    }
}

function drawLowCards(){
    console.log("Drawing from Low Deck...");
    
    //var plotPoint = $("#plotPoint").val();
    //var cardName = $("#cardName").val();
    var idArray;
    idArray = noSameLow();
    console.log(idArray);

    $.get("/getLowPlot",{id:1}, function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i++) {
            var plot = data.list[i];
            console.log(plot);
            $("#headA").append("<h3 class='plotPoint'>" + plot.plotname + "</h3>");
            $("#textA").append("<p class='plotReading'>" + plot.plotreading + "</p>");
        
        }
    });

    $.get("/getLowCardA",{id:idArray[0]}, function(data){
        for(var i = 0; i < data.list.length; i++) {
            var card = data.list[i];
            $("#headA").append("<h4 class='cardName'>" + card.cardname + "</h4>");
            $("#textA").append("<p class='cardReading'>" + card.cardreading + "</p>");

        }
    });
    $.get("/getLowPlot",{id:2}, function(data){
        for(var i = 0; i < data.list.length; i++) {
            var plot = data.list[i];
            $("#headB").append("<h3 class='plotPoint'>" + plot.plotname + "</h3>");
            $("#textB").append("<p class='plotReading'>" + plot.plotreading + "</p>");
        
        }
    });

    $.get("/getLowCardB",{id:idArray[1]},function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i++) {
            var card = data.list[i];
            $("#headB").append("<h4 class='cardName'>" + card.cardname + "</h4>");
            $("#textB").append("<p class='cardReading'>" + card.cardreading + "</p>");

        }
    });

    $.get("/getLowPlot",{id:3}, function(data){
        for(var i = 0; i < data.list.length; i++) {
            var plot = data.list[i];
            $("#headC").append("<h3 class='plotPoint'>" + plot.plotname + "</h3>");
            $("#textC").append("<p class='plotReading'>" + plot.plotreading + "</p>");
        
        }
    });

    $.get("/getLowCardC",{id:idArray[2]}, function(data){
        for(var i = 0; i < data.list.length; i++) {
            var card = data.list[i];
            $("#headC").append("<h4 class='cardName'>" + card.cardname + "</h4>");
            $("#textC").append("<p class='cardReading'>" + card.cardreading + "</p>");

        }
    });
    displayLowCards(idArray[0],idArray[1],idArray[2]);
}

function drawHighCard(){
    console.log("Drawing from High Deck...");
    var idArray;
    idArray = noSameHigh();
    console.log(idArray);

    $.get("/getHighCardA",{id:idArray[0]}, function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i++) {
            var card = data.list[i];
            $("#headD").append("<h4 class='cardName'>" + card.cardname + "</h4>");
        }

    }); 

    $.get("/getHighPlot", {id:1}, function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i++) {
            var plot = data.list[i];
            $("#headD").append("<h3 class='plotPoint'>" + plot.plotname + "</h3>");
            $("#textD").append("<p class='plotReading'>" + plot.plotreading + "</p>");
        }
        
    });


    $.get("/getPlotHighCards", {highCardID:idArray[0]}, function(data){
        console.log(idArray);
        console.log(data);
        //for(var i = 0; i < data.list.length; i++) {
            var plotCard = data.list[0].cardreading;
            console.log(plotCard);
            // if(plotCard.plotID == 1){
            $("#textD").append("<p class='cardReading'>" + plotCard + "</p>");
            // }else{
            //     console.log("fail");

            // }
        //}
        
    });

    $.get("/getHighCardB", {id:idArray[1]}, function(data){
        for(var i = 0; i < data.list.length; i++) {
            var card = data.list[i];

            $("#headE").append("<h4 class='cardName'>" + card.cardname + "</h4>");
        }
    });

    $.get("/getHighPlot", {id:2}, function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i++) {
            var plot = data.list[i];
            console.log(plot);
            $("#headE").append("<h3 class='plotPoint'>" + plot.plotname + "</h3>");
            $("#textE").append("<p class='plotReading'>" + plot.plotreading + "</p>");
        }
    });



    $.get("/getPlotHighCards", {highCardID:idArray[1]}, function(data){
        console.log(data);
        //for(var i = 0; i < data.list.length; i++) {
            var plotCard = data.list[1].cardreading;
            console.log(plotCard);
            // if(plotCard.plotID == 2){
            $("#textE").append("<p class='cardReading'>" + plotCard + "</p>");
            // }else{
            //     console.log("fail");

            // }
        //}
        
    });

    displayHighCards(idArray[0],idArray[1]);

}
//retry

function hideContent(){
    $("#cardButton").css("display","none");
    $("#introImage").css("display","none");
}

function displayLowCards(a,b,c){

    $("#tome").append("<img src='./images/" + a + ".png' class='cardImg' alt='" + a +"' >");
    $("#symbol").append("<img src='./images/" + b + ".png' class='cardImg' alt='" + b +"' >");
    $("#sword").append("<img src='./images/" + c + ".png' class='cardImg' alt='" + c +"' >");
}

function displayHighCards(a,b){
    filename = filenameFix(a);
    $("#enemy").append("<img src='./images/" + filename + ".png' class='cardImg' alt='" + a +"'>");
    filename = filenameFix(b);
    $("#location").append("<img src='./images/" + filename + ".png' class='cardImg' alt='" + b +"'>");
}

function reveal(){
    $("#resetButton").css("display","block");
    $("#cardDisplay").css("display","block");
    $("#cardDescriptions").css("display","block");

}

function emptyContent(){

    //empty
    $("#1").empty();
    $("#2").empty();
    $("#3").empty();
    $("#4").empty();
    $("#5").empty();
    //fill
    $("#1").append("<div class='image' id='tome'></div><div class='title' id='headA'></div><div id='textA'></div>");
    $("#2").append("<div class='image' id='symbol'></div><div class='title' id='headB'></div><div id='textB'></div>");
    $("#3").append("<div class='image' id='sword'></div><div class='title' id='headC'></div><div id='textC'></div>");
    $("#4").append("<div class='image' id='enemy'></div><div class='title' id='headD'></div><div id='textD'></div>");
    $("#5").append("<div class='image' id='location'></div><div class='title' id='headE'></div><div id='textE'></div>");
}

function resetPage(){
    $("#cardButton").css("display","block");
    $("#introImage").css("display","block");
    
    $("#resetButton").css("display","none");
    $("#cardDisplay").css("display","none");
    $("#cardDescriptions").css("display","none");
    emptyContent();
}

function readCards(){
    hideContent();
    drawLowCards();
    drawHighCard();
    reveal();
}

//postgres://qtenrqolfxichj:1ff352dd6be60802a7de948b5796d1b39a321e20b3888359dd4287d2fe2da262@ec2-184-72-234-230.compute-1.amazonaws.com:5432/d4ums4p6flgr2p