/*
(function() { // don't leak
    var elm = document.getElementById('foo'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 1; i <= 42; i++) { // loop, i like 42.
        var option = document.createElement('option'); // create the option element
        option.value = i; // set the value property
        option.appendChild(document.createTextNode("option #" + i)); // set the textContent in a safe way.
        df.appendChild(option); // append the option to the document fragment
    }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
}());
*/
var definitions = ["visitors","demo","AlexaDemo","survey","smp","tablet","eink","aucc","accessories","gf10","gf25","gf50","prime99","returns","accreturns","2ftv","wow","guru","Alpha","tradein"];

function selectc(id){
    var elem = document.getElementById(id);
    df = document.createDocumentFragment();
    for(var i = 0; i <= 150; i++){
        var option = document.createElement('option');
        option.value = i;
        option.appendChild(document.createTextNode(i));
        df.appendChild(option);
    }
    elem.appendChild(df);
}

(function(){
    for(var i = 0; i<= definitions.length;i++){
        selectc(definitions[i]);
    }
}());


function sendMail() {
    var text = "";
    var e = document.getElementById(definitions[1]);
    for(var a = 0; a < definitions.length; a++){

        //text += definitions[a] +":"+ e.options[e.selectedIndex].value;
        text += definitions[a] +":"+ document.getElementById(definitions[a]).options[document.getElementById(definitions[a]).selectedIndex].value +" ";

       // text +=  document.getElementById(definitions[a]).options ":";

        //text +=  definitions[a] +":"+ document.getElementById(definitions[a]).options[document.getElementById(definitions[a]).selectedIndex].value;
    }

   /* for(var b = 0; b <= definitions.length; b++){
        text2 += definitions[b] +":"+ dContent[b] + "<br />";
    }

    for(var c = 0; c <= definitions.length; c++){
        text += definitions[c] + text2 + "<br />";
    }
*/
    var eReport = "mailto:maxvalle@amazon.com?subject=";
    eReport +="Daily Count";
    eReport += "&body=";
    eReport += text ;
    window.open(eReport);
}

function  feedback() {
    var maxmail = "mailto:maxvalle@amazon.com?subject=";
    maxmail +="Feedback aCounter";
    window.open(maxmail);
}