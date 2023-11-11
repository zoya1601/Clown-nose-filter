nosex=0;
nosey=0;
function preload(){
    y=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    v=createCapture(VIDEO);
    v.size(300,300);
    v.hide();
    x=ml5.poseNet(v,modelloaded);
    x.on('pose',gotposes);

}
function modelloaded(){
    console.log("poseNetisloaded");
}
function gotposes(result){
if(result.length>0){
    console.log(result);
    nosex=result[0].pose.nose.x-15;
    nosey=result[0].pose.nose.y-15;
}
}
function draw(){
    image(v,0,0,300,300);
    image(y,nosex,nosey,30,30);

}
function takesnapshot(){
    save('mypicture.png')
}