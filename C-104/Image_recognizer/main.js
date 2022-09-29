//Start
Webcam.set({
    width:250,
    height:250,
    image_format: 'png',
    png_quality:1080
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri + '" </>';
    });
}

console.log("ml5 Version: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/71KERX1vP/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model: Loaded.");
}