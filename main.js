difference = 0;
rightwrist = 0;
leftwrist = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    
    canvas = createCanvas(550,550);
    canvas.position(560,120);


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded()
{
    console.log("modelLoaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = floor(leftwrist-rightwrist)
        console.log("leftwristx = "+leftwrist+",rightwrist = "+rightwrist+",difference = "+difference);
    }
}

function draw()
{
   background("#eda955");

   document.getElementById("font_size").innerHTML = "font size of the text will be = "+difference+"px";
   fill("#ded285");
   textSize(difference);
   text("Happy",50,400)
}