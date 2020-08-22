// pseudo-code for our handedness function

// function handedness (){
//     input("Are you right or left handed?");
//     if participant response = right
//     then
//     EasyKey_uCase: L; 
//     HardKey_uCase: S;
//     else participant response = left 
//     then
//     EasyKey_uCase: S; 
//     HardKey_uCase: L;
// }

function checkHandedness(){
    if (handedness.toUpperCase() == 'RIGHT'){
         EasyKey_uCase = 'L';  // 108
         HardKey_uCase = 'S';  // 115
         antihandedness = 'LEFT';
    } else if (handedness.toUpperCase() == 'LEFT') {
         EasyKey_uCase = 'S';  // 115
         HardKey_uCase = 'L';  // 108
         antihandedness = 'RIGHT';
    } 
 }

 function playTime(){
    if (MinutesToPlay == 20) {
        alert("Great! You will play the experiment for "+MinutesToPlay +" minutes.")
    } else {
        alert("You did not enter a number, please refresh the browser and try again.");
    }
}

// pseudo code for progress bar function

// function easyProgressBar ()
// if the participant types L
// the easyProgressBar will fill up a certain amount per click
// EasyKey_uCase: L; 

//  html: <div id="myProgress">
//   <div id="myBar"></div>
//   </div>


function move() { // function definition
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseInt(width.slice(0, -1)); // variable reassignment
      if (width >= 100) {
        width = document.getElementById("keyBar").style.width="0%";
      } else {
        width++;
        width = document.getElementById("keyBar").style.width=String(width)+"%";
      }
    }

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            this.value = "";
        }
        });
    });
}

function easyTimer(){ // initialize timer
    var easySec = 7; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('hardTimer').innerHTML='00:'+easySec;
    easySec--;  // decrement
    // if (sec < -1) {
        
    //   }
    }, 1000);
    var easySec = 7; 
 }

function hardTimer(){ // initialize timer
    var hardSec = 21; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('hardTimer').innerHTML='00:'+hardSec;
    hardSec--;  // decrement
    // if (sec < -1) {
        
    //   }
    }, 1000);
    var hardSec = 21; // resetting the timer to 21 seconds
}

function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
}

function startExperiment(){
    jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        preload_images: [positive_stimuli, negative_stimuli, neutral_stimuli, pleasantLikert, unpleasantLikert, arousalLikert, pleasantResponse, unpleasantResponse, arousalResponse],
        on_finish: function(){ saveData("hedonic-reactivity_" + workerID, jsPsych.data.get().csv()); }
    });
}