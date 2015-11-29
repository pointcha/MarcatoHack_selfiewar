'use strict';

var myDataRef = new Firebase('https://selfiewar.firebaseio.com/'); //point to firebase
var uName = "";
//myDataRef.child('challenge').child("Marcato Hackathon").set({ title: 'Marcato Hackathon', prize: 'A slice of pizza!'});

function uploadPhoto() {

var authData = myDataRef.getAuth();
    if (authData){
    var userId = authData.uid;


myDataRef.child('user').child(userId).once("value", function(snapshot) {
    var data = snapshot.val();
    if (name) {
        uName = data.name;
    }
}); 

    console.log('user is already logged in');
  } 

    var srcData;
    var score = 0;
    var file = document.getElementById('photoUpload').files[0];
    var filesSelected = document.getElementById("photoUpload").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        
        fileReader.onload = function(fileLoadedEvent) {
            srcData = fileLoadedEvent.target.result; // <--- data: base64

            console.log(score + " " + uName + " " + userId);

            var newImage = document.createElement('img');
            newImage.src = srcData;

            if(file){

                myDataRef.child('challenge').child('Marcato Hackathon').child('pics').child(userId).set({ photo: srcData, score: score, name: uName});
            }
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function pullPhotos() {
    
}

