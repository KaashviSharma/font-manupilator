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
    }
}

function draw()
{
    background("#b3f5e2");
}