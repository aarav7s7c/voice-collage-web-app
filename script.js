
var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function startselfie() {
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);
  var Content = event.results[0][0].transcript.toUpperCase();
  console.log(Content);
  if (Content == "TAKE MY SELFIE.") {
    console.log("Taking your selfie in 5 seconds.....");
    speak();
  }
};

function speak() {
  var synth = window.speechSynthesis;
  speak_data = "Taking your selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function () {
    snapshort1();
  }, 8000);
}

Webcam.set({
  border_radius: 10,
  width: 250,
  height: 180,
  image_format: "jpeg",
  jpeg_quality: 92,
});
camera = document.getElementById("camera");

function snapshort1() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result1").innerHTML =
      "<img id='im1g' class='immk' src='" + data_uri + "'>";
  });
  setTimeout(function () {
    speak2();
  }, 2000);
}
function speak2() {
  var synth = window.speechSynthesis;
  speak_data = "Taking another selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function () {
    snapshort2();
  }, 8000);
}
function snapshort2() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result2").innerHTML =
      "<img id='im2g' class='immk' src='" + data_uri + "'>";
  });
  setTimeout(function () {
    speak3();
  }, 2000);
}

function speak3() {
  var synth = window.speechSynthesis;
  speak_data = "Taking another selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function () {
    snapshort3();
  }, 8000);
}
function snapshort3() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result3").innerHTML =
      "<img id='im3g' class='immk' src='" + data_uri + "'>";
  });
}