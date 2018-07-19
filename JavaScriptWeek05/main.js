var GitHubRepo= document.getElementById("exc");
var GitHubRepo1= document.getElementById("exc1");
//var btn=document.querySelector('#btn');
//btn.addEventListener('click',function() 

var btn=document.getElementById("btn");
btn.addEventListener("click",function() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',"https://api.github.com/orgs/HackYourFuture/repos",);
    //http.open('GET',"http://api.travelpayouts.com/data/routes.json?token=PutHereYourToken",true);
    ourRequest.onload=function() {
    
        var ourData= JSON.parse(ourRequest.responseText);
        console.log(ourData);
HtmlFetch(ourData);

    };
    
    ourRequest.send();

});

function HtmlFetch(data) {

var HtmlString = "";
var HtmlString1 = "";

for (i=0;i<data.length;i++) {   

HtmlString += "<h2>" + data[i].name + ".</h2>";
//console.log(HtmlString);

for (j=0; j < data.length;j++) {

    HtmlString1 += "<h4>" + data[j].html_url + ".</h4>";   
console.log(HtmlString1);
}

}
GitHubRepo.insertAdjacentHTML('beforeend',HtmlString);
GitHubRepo1.insertAdjacentHTML('beforeend',HtmlString1);
    console.log(HtmlString1);
}




//HTTP REQUEST

/*
ourRequest.onreadystatechange = processRequest;

function processRequest() {
true
if (http.readyState==4 && http.status ==200) {

    var response =JSON.parse(http.responseText);
    console.log(response);

HtmlFetch(response);
} 
}
});




   // document.getElementById("exc").innerHTML =
//response.HackYourFuture[1].name + " " + response.HackYourFuture[1].name;

    
    //document.getElementById("exc").innerHTML = response;
//    document.querySelector('#btn').appendChild(response);



    
    /*

var link = document.createElement('A');
var linkText = document.createTextNode('Link');
link.appendChild(linkText);
var linkHref = 'https://github.com/HackYourFuture/' + response[i][prop];
linkHref.setAttribute('href',linkHref);
list.appendChild(link);


if (response[i].language == null){
    continue; 
}
else {
langNode = document.createTextNode(`Language: ${response[i].language}`);
}
lang.appendChild(langNode);
list.appendChild(lang); 


}

    }
}*/



//console.log('DATA ASY')