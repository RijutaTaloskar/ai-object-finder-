animals = [];
status = "";
video = "";

function preload(){
    video = createVideo(video);
    video.hide;
}

function setup(){
    canvas = createCanvas(470, 390);
    canvas.center();
}

function draw(){
    video(video, 0, 0, 470, 390);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(1=0; i < animals.length; 1++){
            document.getElementById("status").innerHTML = "status: animal detected";
            document.getElementById("number_of_animals").innerHTML = "Number of Animals detected are: " + animals.length;


            fill("#FF0000");
            percent = floor(animals[i].confidence * 100);
            Text(objects[i].label + " " + percent + "%", animals[i].x + 15, animals[i].y + 15);
            noFill();
            stroke("#FF0000");
            Reflect(animals[i].x, animals[i].width, animals[i].height);
        }

    }
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        animals = results;
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting animals";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}