/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome = {
    type: "html-keyboard-response",
    stimulus: '<h1 style="color:white;">Welcome to the experiment!</h1>'+
    '<p style="color:white;">Press any key to begin.</p>'
};

/* define instructions trial */
let instructions_1 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">You will now see a series of pictures. </h2>' +
    '<h3 style="color:white;">Some of the pictures will be <b>positive</b>, like pictures of babies.   </h3>' +
    '<h3 style="color:white;">Some will be <b>negative</b>, like pictures of sharks or sad people. </h3>'+
    '<h3 style="color:white;"> Some will be <b>neutral</b>, like pictures of a clock or desk.</h3>'+
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

let instructions_2 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">We want you to tell us how each picture makes you <b>feel</b>.</h2> ' +
        '<h3 style="color:white;">You will make <b>3 ratings</b> for each picture.</h3> '+
        '<p style="color:white;"> Press the spacebar to continue.</p>',
        choices: [32],
};

let instructions_3 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">The first rating you will be asked to make is a rating of how <b>pleasant</b> you feel when you see the photo.</h2> ' +
    '<h3 style="color:white;"><b>"Pleasantness"</b>  refers to how <b>happy</b> or <b>good</b> you feel when you see each photo and how much you like looking at it.</h3> '+
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

let instructions_4 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;"><b>Pleasantness</b></h2> ' +
            '<h3 style="color:white;">This is the <b>pleasantness scale</b> that you will use to rate how <b>positive</b> you feel when you see each picture.</h3>'+
            "<img class='center' style='width:453px; height:215px;' src='scale/BlankScalePleasant.png'></img>"+
            '<p style="color:white;"> Press the spacebar to continue.</p>',
            choices: [32],
};

let instructions_5 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">The second rating you will be asked to make is a rating of how <b>unpleasant</b> you feel when you see the photo.</h2> ' +
            '<h3 style="color:white;"><b>"Unpleasantness"</b> refers to how <b>bad</b> or <b>unhappy</b> you feel when you see each photo.</h3>'+
            '<p style="color:white;"> Press the spacebar to continue.</p>',
            choices: [32],
};

let instructions_6 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;"><b>Unpleasantness</b></h2> '+
    '<h3 style="color:white;">This is the <b>unpleasantness scale</b> that you will use to rate how <b>negative</b> you feel when you see each picture.</h3>'+
    "<img class='center' style='width:451px; height:211px;' src='scale/BlankScaleUnpleasant.png'></img>"+
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

let instructions_7 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">You should decide how to rate each photo on the basis of how <b>pleasant</b> or <b>unpleasant</b> you feel when you see it.</h2> ' +
    '<h3 style="color:white;">There are no "right" or "wrong" answers for rating the photos.</h3> ' +
    '<h3 style="color:white;">Just go by how much you like or dislike each one.</h3> '+
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

let instructions_8 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">The third rating you will be asked to make is a rating of how <b>arousing</b> or <b>exciting</b> each picture makes you feel.</h2> ' +
    '<h3 style="color:white;"><b>"Arousing"</b> refers to how <b>excited</b> or <b>keyed-up</b> the photo makes you feel.<h3>'+
    '<h3 style="color:white;">Some of the pictures will be <b>highly arousing</b> and some will make you feel more <b>calm</b> or <b>sleepy</b>.</h3> '+
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

let instructions_9 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;"><b>Arousal</b></h2> '+
    '<p style="color:white;">This is the <b>arousal scale</b> that you will use to rate how <b>calm to excited</b> you feel when you see each picture.</p>'+
    "<img class='center' style='width:538px; height:222px;' src='scale/BlankScaleArousal.png'></img>"+
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

let instructions_10 = {
    type: "html-keyboard-response",
    stimulus: '<h2 style="color:white;">Now we will have you rate some pictures for how <b>positive</b>, how <b>negative</b>, and how <b>arousing</b> they make you feel.</h2> ' +
    '<h3 style="color:white;">Please press the number on top of your keybaord that corresponds to your choice.</h3> ' +
    '<p style="color:white;"> Press the spacebar to continue.</p>',
    choices: [32],
};

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="color:white; font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    choices: jsPsych.NO_KEYS,
    // data: {test_part: 'fixation'}
  }

var prompt_pleasant = {
    type: "html-keyboard-response",
    trial_duration: 500,
    choices: jsPsych.NO_KEYS,
    prompt: '',
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      data.trial = indexIterator;
    },
  };


var prompt_unpleasant = {
    type: "html-keyboard-response",
    trial_duration: 500,
    choices: jsPsych.NO_KEYS,
    prompt: '',
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      data.trial = indexIterator;
    },
  };

var prompt_arousal = {
    type: "html-keyboard-response",
    trial_duration: 500,
    choices: jsPsych.NO_KEYS,
    prompt: '',
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      data.trial = indexIterator;
      indexIterator++;
    },
  };


var response_pleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_pleasant', true) +
              "<img class='center' style='height: 300px; width=450px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('Likert_pleasant', true)+"'>";
              return html;
    },
    choices: [49,50,51,52,53],
    response_ends_trial: true,
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data) {
        data.test_part = "pleasant";
        data.trial = indexIterator;
        switch(data.key_press){
        case 49: 
            while(pleasantResponse.length > 0) { //workaround to make sure there is no problems with image preloading of feedback
                pleasantResponse.pop();
            } 
                pleasantResponse.push("scale/PleasantScale1.jpg")
                data.pleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
            break;
        case 50: 
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale2.jpg")
            data.pleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
            break;
        case 51:
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale3.jpg")
            data.pleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
            break;
        case 52:
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale4.jpg")
            data.pleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
            break;
        case 53:
            while(pleasantResponse.length > 0) {
            pleasantResponse.pop();
            } 
            pleasantResponse.push("scale/PleasantScale5.jpg")
            data.pleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
            break;
        default:
        }

    },

};

var feedback_pleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_pleasant', true) +
              "<img class='center' style='height: 300px; width=450px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('feedback_pleasant', true)+"'>";
              return html;
    },
    // choices: ['1','2','3','4','5'],
    response_ends_trial: false,
    trial_duration: 2000,
  };

  var response_unpleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_unpleasant', true) +
              "<img class='center' style='height: 300px; width=450px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('Likert_unpleasant', true)+"'>";
              return html;
    },
    
    choices: [49,50,51,52,53],
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      data.trial = indexIterator;
      data.test_part = "unpleasant";
      if (data.key_press == 49){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale1.jpg")
        data.unpleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 50){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale2.jpg")
        data.unpleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 51){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale3.jpg")
        data.unpleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 52){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale4.jpg")
        data.unpleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 53){
        while(unpleasantResponse.length > 0) {
          unpleasantResponse.pop();
        } 
        unpleasantResponse.push("scale/UnpleasantScale5.jpg")
        data.unpleasant_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    }
      
    },
  };

  var feedback_unpleasant = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_unpleasant', true) +
              "<img class='center' style='height: 300px; width=450px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('feedback_unpleasant', true)+"'>";
              return html;
    },
    // choices: ['1','2','3','4','5'],
    response_ends_trial: false,
    trial_duration: 2000,
    // data: participantResponse = jsPsych.data.get().select('responses'),
    
  };

  var response_arousal = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_arousal', true) +
              "<img class='center' style='height: 300px; width=450px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('Likert_arousal', true)+"'>";
              return html;
    },
    
    choices: [49,50,51,52,53],
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      data.trial = indexIterator;
      indexIterator++;
      data.test_part = "unpleasant";
      if (data.key_press == 49){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale1.jpg")
        data.arousal_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 50){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale2.jpg")
        data.arousal_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 51){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale3.jpg")
        data.arousal_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 52){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale4.jpg")
        data.arousal_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    } else if (data.key_press == 53){
        while(arousalResponse.length > 0) {
          arousalResponse.pop();
        } 
        arousalResponse.push("scale/ArousalScale5.jpg")
        data.arousal_rating = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    }

    },
  };

  var feedback_arousal = {
    type: "html-keyboard-response",
    stimulus: function(){
              var html= jsPsych.timelineVariable('prompt_arousal', true) +
              "<img class='center' style='height: 300px; width=450px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
              "<img class='center' src='"+jsPsych.timelineVariable('feedback_arousal', true)+"'>";
              return html;
    },
    // choices: ['1','2','3','4','5'],
    response_ends_trial: false,
    trial_duration: 2000,
    // data: participantResponse = jsPsych.data.get().select('responses'),
    
  };

let debriefing = {
    type: "html-keyboard-response",
    stimulus: "<p style='color:white;'>You have completed this task. Please wait for the experimenter to continue.</p>"+
    "<p style='color:white;'>Data Saving...do not close this window until the text dissapears.</p>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 10000,
};


let instructions = {
    timeline: [instructions_1, instructions_2, instructions_3, instructions_4, instructions_5, instructions_6, instructions_7, instructions_8, instructions_9, instructions_10],
  }

var procedure = {
    timeline: [fixation, /*prompt_pleasant,*/ response_pleasant, feedback_pleasant, /*prompt_unpleasant,*/ response_unpleasant, feedback_unpleasant, /*prompt_arousal,*/ response_arousal, feedback_arousal],
    timeline_variables: full_stim_shuffle,
    //randomize_order: false
  }


timeline.push(welcome);
timeline.push(instructions);
timeline.push(procedure);
timeline.push(debriefing);