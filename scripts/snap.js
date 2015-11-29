'use strict';

var myDataRef = new Firebase('https://selfiewar.firebaseio.com/'); //point to firebase
//myDataRef.child('challenge').child("Marcato Hackathon").set({ title: 'Marcato Hackathon', prize: 'A slice of pizza!'});

function uploadPhoto() {
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

            var newImage = document.createElement('img');
            newImage.src = srcData;

            if(file){

                myDataRef.child('challenge').child('Marcato Hackathon').child('pics').set({ photo: srcData, score: score,  name: name});
            }
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}