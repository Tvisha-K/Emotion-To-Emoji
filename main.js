Webcam.set({
   
    width : 350,

    height : 300,

    image_format : 'png',

    png_quality : 90
    
});

console.log("ml5 version : " , ml5.version);

Webcam.attach("#camera");

function capture(){

    Webcam.snap(function(cam_pic){

        document.getElementById("result").innerHTML = '<img id = "taken_pic" src = "' + cam_pic + '">';


    });


}

prediction1 = "";

prediction2 = "";

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zZcHim58h/model.json", modelLoaded);

function speak(){

speak_data = "The prediction 1 is " + prediction1 + " and the prediction 2 is " + prediction2;

var speak_audio = new SpeechSynthesisUtterance(speak_data);

window.speechSynthesis.speak(speak_audio);

}

function modelLoaded(){

    console.log("Model Loaded Successfully");

}

function identify(){

    img = document.getElementById("taken_pic");

    model.classify(img,gotresult);

}

function gotresult(e , r){

    if(e){

        console.error(e);

    }

    else{

        console.log(r);

        prediction1 = r[0].label;

        prediction2 = r[1].label;

        document.getElementById("emotion_1") = prediction1;


        document.getElementById("emotion_2") = prediction2;


        if (prediction1 == "Happy"){

            document.getElementById("emoji_1") = "&#128512;"

        }

        else if (prediction1 == "Suprise"){

 
            document.getElementById("emoji_1") = "&#128558;"

        }

        else if (prediction1 == "Sad"){

 
            document.getElementById("emoji_1") = "&#128532;"

        }

        else if (prediction1 == "Silly"){

 
            document.getElementById("emoji_1") = "&#128540;"

        }
        else if (prediction1 == "Angry"){

 
            document.getElementById("emoji_1") = "&#128545;;"

        }

        else if (prediction1 == "Thinking"){

 
            document.getElementById("emoji_1") = "&#129300;"

        }
        
        if (prediction2 == "Happy"){


            document.getElementById("emoji_2") = "&#128512;"

        }

        else if (prediction2 == "Suprise"){


            document.getElementById("emoji_2") = "&#128558;"

        }

        else if (prediction2 == "Sad"){

 
            document.getElementById("emoji_2") = "&#128532;"

        }

        else if (prediction2 == "Silly"){

 
            document.getElementById("emoji_2") = "&#128540;"

        }
        else if (prediction2 == "Angry"){

 
            document.getElementById("emoji_2") = "&#128545;;"

        }

        else if (prediction2 == "Thinking"){

 
            document.getElementById("emoji_2") = "&#129300;"

        }

        speak();

    }

}
