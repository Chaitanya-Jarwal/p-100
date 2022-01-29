var SpeechRecognition= window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
 document.getElementById("textbox").innerHTML="";
 recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
     speak();
     console.log("Taking your Selfie");
    }
}

function speak () {
    var synth= window.speechSynthesis;
    var speak_data="taking your selfie in 5 seconds";
    UtterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

}
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>";
    });
}
Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
function save() {
  link=document.getElementById("link");
  image=document.getElementById("selfie_img").src;
  link.href=image;
  link.click();
}