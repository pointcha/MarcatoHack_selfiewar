'use strict';

console.log(authData);
console.log(name);
console.log(userId);



function postButton() {
	window.location.href = root + "/#/snap";
}

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
            console.log(score + " " + name + " " + userId);
            var newImage = document.createElement('img');
            newImage.src = srcData;

            if(file){

                myDataRef.child('challenge').child('Marcato Hackathon').child(userId).set({ photo: srcData, score: score,  name: name});
            }

        }
        fileReader.readAsDataURL(fileToLoad);

    }

}