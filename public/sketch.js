var mobileNet;
var pic;
function modelReady(){
        console.log('Model is ready!!!');
}
function loadFile(){
        console.log('File is running');
}
function gotFile(file){
        if (file.type === 'image') {
                // Create an image DOM element but don't show it
                        var pic = createImg(file.data, function() {
                                image(pic, 0, 0, width, height);
                              }).hide();
                
                //work with model for prediction
                mobileNet = ml5.imageClassifier('MobileNet', modelReady); //Mobile-Net is the name of the model
                mobileNet.predict(pic, gotResults);
                } 
                else {
                        println('Not an image file!');
                      }
                    }
        
        

function gotResults(error, results){
        if (error){
                console.error(error);
        }
        else{
                console.log(results);
                var label = results[0].className;
                var probability = results[0].probability;
                fill(0);
                textSize(64);
                createP("This is a " + label);
                createP("With a confidence of " + probability);
        }
}

function setup() {
       //setup canvas
       var c = createCanvas(400, 400);
       background(0);
       
       //work with dropzone section
       c.drop(gotFile);
       
       
       
       
       

}
function draw() {
        fill(255);
        noStroke();
        textSize(24);
        textAlign(CENTER);
        text('Drag an image file onto the canvas.', width/2, height/2);
        noLoop();
              }
