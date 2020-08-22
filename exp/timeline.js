/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">Welcome to the experiment! <br/>Press any key to begin.</p>'
};

/* define instructions trial */
let instructions_1 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">You will now see a series of pictures </p>' +
    '<p style="color:white;">Some of the pictures will be positive, like pictures of babies.   </p>' +
    '<p style="color:white;">Some will be negative, like pictures of sharks or sad people. </p>'+
    '<p style="color:white;"> Some will be neutral, like pictures of a clock or desk</p>'
};

let instructions_2 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">We want you to tell us how each picture makes you feel.</p> ' +
        '<p style="color:white;">You will make 3 ratings for each picture.</p> '
};

let instructions_3 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">The first rating you will be asked to make is a rating of how pleasant you feel when you see the photo.</p> ' +
    '<p style="color:white;">"Pleasantness" refers to how happy or good you feel when you see each photo and how much you like looking at it.</p> '
};

let instructions_4 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">Pleasentness rating scale </p> ' +
            "<img class='center' style='width:500px; height:300px;' src='scale/BlankScalePleasant.png'></img>"
};

let instructions_5 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">The second rating you will be asked to make is a rating of how unpleasant you feel when you see the photo.</p> ' +
            '<p style="color:white;">"Unpleasantness" refers to how bad or unhappy you feel when you see each photo.</p>'
};

let instructions_6 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">Unpleasentness rating scale</p> '+
    "<img class='center' style='width:500px; height:300px;' src='scale/BlankScaleUnpleasant.png'></img>"
};

let instructions_7 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">You should decide how to rate each photo on the basis of how pleasant or unpleasant you feel when you see it.</p> ' +
    '<p style="color:white;">There are no "right" or "wrong" answers for rating the photos.</p> ' +
    '<p Just go by how much you like or dislike each one.</p> '
};

let instructions_8 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">The third rating you will be asked to make is a rating of how arousing or exciting each picture makes you feel.</p> ' +
    '<p style="color:white;">"Arousing" refers to how excited or keyed-up the photo makes you feel. Some of the pictures will be highly arousing and some will make you feel more calm or sleepy.</p> '
};

let instructions_9 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">Arousal rating scale</p> '+
    "<img class='center' style='width:600px; height:300px;' src='scale/BlankScaleArousal.png'></img>"
};

let instructions_10 = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">Now we will have you rate some pictures for how positive, how negative, and how arousing they make you feel.</p> ' 
};

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="color:white; font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    data: {test_part: 'fixation'}
  }

var prompt_pleasant = {
    type: "html-keyboard-response",
    trial_duration: 2000,
    prompt: pleasant_Prompt,
  };


var prompt_unpleasant = {
    type: "html-keyboard-response",
    trial_duration: 2000,
    prompt: unpleasant_Prompt,
  };

var prompt_arousal = {
    type: "html-keyboard-response",
    trial_duration: 2000,
    prompt: arousal_Prompt,
  };

var response_pleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_pleasant', true) +
              "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img id='pleasant' class='center' src='"+jsPsych.timelineVariable('Likert_pleasant', true)+"'>";
              return html;
    },
    choices: [49,50,51,52,53],
    response_ends_trial: true,
    data: jsPsych.data.get().select('responses'),
    on_finish: function(data) {
        switch(data.key_press){
        case 49: 
            while(pleasantResponse.length > 0) { //workaround to make sure there is no problems with image preloading of feedback
                pleasantResponse.pop();
            } 
                pleasantResponse.push("scale/PleasantScale1.jpg")
            break;
        case 50: 
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale2.jpg")
            break;
        case 51:
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale3.jpg")
            break;
        case 52:
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale4.jpg")
            break;
        case 53:
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale5.jpg")
            break;
        default:
        }

    },

};

var feedback_pleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_pleasant', true) +
              "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('feedback_pleasant', true)+"'>";
              return html;
    },
    // choices: ['1','2','3','4','5'],
    response_ends_trial: false,
    trial_duration: 2000,
    data: participantResponse = jsPsych.data.get().select('responses'),
    
  };

  var response_unpleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_unpleasant', true) +
              "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('Likert_unpleasant', true)+"'>";
              return html;
    },
    
    choices: [49,50,51,52,53],
    data: jsPsych.data.get().select('responses'),
    on_finish: function(data){
      if (data.key_press == 49){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale1.jpg")
    } else if (data.key_press == 50){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale2.jpg")
    } else if (data.key_press == 51){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale3.jpg")
    } else if (data.key_press == 52){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale4.jpg")
    } else if (data.key_press == 53){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale5.jpg")
    }
      
    },
  };

  var feedback_unpleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_unpleasant', true) +
              "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('feedback_unpleasant', true)+"'>";
              return html;
    },
    // choices: ['1','2','3','4','5'],
    response_ends_trial: false,
    trial_duration: 2000,
    data: participantResponse = jsPsych.data.get().select('responses'),
    
  };

  var response_arousal = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_arousal', true) +
              "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('Likert_arousal', true)+"'>";
              return html;
    },
    
    choices: [49,50,51,52,53],
    data: jsPsych.data.get().select('responses'),
    on_finish: function(data){
      if (data.key_press == 49){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale1.jpg")
    } else if (data.key_press == 50){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale2.jpg")
    } else if (data.key_press == 51){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale3.jpg")
    } else if (data.key_press == 52){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale4.jpg")
    } else if (data.key_press == 53){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale5.jpg")
    }

    },
  };

  var feedback_arousal = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_arousal', true) +
              "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('feedback_arousal', true)+"'>";
              return html;
    },
    // choices: ['1','2','3','4','5'],
    response_ends_trial: false,
    trial_duration: 2000,
    data: participantResponse = jsPsych.data.get().select('responses'),
    
  };

  var end_of_trial = {
    type: "html-keyboard-response",
    stimulus: '<p style="color:white;">You completed the task.   </p> ' +
    '<p style="color:white;">No money this round    </p> ' +
    '<p style="color:white;">Now you are ready to play the game.    </p> ' +
    '<p style="color:white;">You did not complete the task.   </p> ' +
    '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
    
    choices: [32],
    post_trial_gap: 2000,
  
  };