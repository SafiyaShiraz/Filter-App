function preload()
{

}

function setup()
{
canvas= createCanvas(600, 600);
canvas.position(110, 350);
video = createCapture(VIDEO);
video.hide();
filter_color="";
}

function draw()
{
image(video, 0, 0, 600, 600);
tint(filter_color);
}


function take_snapshot()
{
save('YourImage.png');
}

function applyfilter()
{
filter_color = document.getElementById("color_name").value;


}











