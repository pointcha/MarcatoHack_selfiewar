'use strict';

var myDataRef = new Firebase('https://selfiewar.firebaseio.com/'); //point to firebase
var uName = "";
var fbItems = [];
var voteItems = [];
//myDataRef.child('challenge').child("Marcato Hackathon").set({ title: 'Marcato Hackathon', prize: 'A slice of pizza!'});

function uploadPhoto() {

var authData = myDataRef.getAuth();
    if (authData){
    var userId = authData.uid;


    myDataRef.child('user').child(userId).once("value", function(snapshot) {
            var data = snapshot.val();
            if (name) { uName = data.name; }
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
    // pull array or pics from challenge|Marcato Hacathon|pics|userId
    myDataRef.child('challenge').child('Marcato Hackathon').child('pics').once("value", function(snapshot) {

snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.val();

fbItems.push(key);
  });

var arraynumber = fbItems.length; // how many items in the array
    var voteItems = shuffleArray(fbItems, arraynumber);

});  
}

function shuffleArray(array, numberinarray) {
// shuffle voteItem array
for (var i = numberinarray - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
console.log(array);
    // pull last 2 items into final array
    var challengearray = array.slice(Math.max(array.length - 2, 1))
    console.log(challengearray);
    return challengearray;

    // shuffle voteItem array
}

