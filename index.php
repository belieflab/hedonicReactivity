<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>


<!DOCTYPE html>
<html>
  <head>
    <title>EEfRT Task</title>
    <script src="js/playTime.js"></script>
    <script src="js/timer.js"></script> <!-- importing our timer function from timer.js file -->
    <script src="js/progressBars.js"></script> 
    <script src="js/handedness.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-survey-likert.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body  
  style="background-color:black;">  
  
  <div class="loading centeredDiv">
    <h1 class="loading">Loading...</h1>
  </div>
  <div id="consentHolder" class="consent centeredDiv">
  <h3 id="consentPreamble" class="consent" style="color:white;">In order for us to conduct this test online, we need to include the standard consent form below. <br /> <br /> </h3>
  <div id="consentForm" class="consent consent-box"> 
    <h2 id="consentHeading" class="consent">
      CONSENT FOR PARTICIPATION IN A RESERCH PROJECT 200 FR. 1 (2016-2)
      <br>
      YALE UNIVERSITY SCHOOL OF MEDICINE CONNECTICUT MENTAL HEALTH CENTER
    </h2> 

    <h2>
      
    </h2>
    <p id="consentInstructions" class="consent">
      <b>Study Title:</b> Computerized Assessment of Psychosis Risk
      <br><br>
      <b>Principal Investigator:</b> Gregory P. Strauss, PhD
      <br><br>
      <b>Funding Source:</b> department funds
      <br><br>
      <u><b>Invitation to Participate and Description of Project</b></u>
      <br>
      You are invited to participate in a research study that concerns psychological processes related to beliefs, perceptions, decisions, and personality traits. Due to the nature of psychology experiments, we cannot explain the precise purpose of the experiment until after the session is over. Afterwards, the experimenter will be happy to answer any questions you might have about the purpose of the study.
      <br><br>
      <u><b>Description of Procedures</b></u>
      <br>
      If you agree to participate in this study, this Human Intelligence Task (HIT) will require you to (1) play a computer game using the computer mouse or keys on your keyboard and (2) answer simple questions about your demographics, health (including mental health), beliefs, and personality through an interactive web survey. You will never be asked for personally identifiable information such as your name, address, or date of birth. 
      <br>
      The experiment is designed to take approximately 1 hour. You will have up to six hours to complete the experiment and submit codes for credit. 
      <br><br>
      <u><b>Risks and Inconveniences</b></u>
      <br>
      There are little to no risks associated with this study. Some individuals may experience mild boredom. 
      <br><br>
      <u><b>Economic Considerations</b></u>
      <br>
      You will receive the reward specified on the Mechanical-Turk HIT for completing both the game and the questionnaire. Payment for completion of the HIT is $6.00 with up to a $2.00 bonus based on task performance and a further $40 bonus to individuals who score in the top 1%. Upon finishing the game and submitting the questionnaire, you will receive code numbers. Please record these two code numbers and submit them for payment. 
      <br><br>
      <u><b>Confidentiality</b></u>
      <br>
      We will never ask for your name, birth date, email or any other identifying piece of information. Your data will be pooled with those of others, and your responses will be completely anonymous. We will keep this data indefinitely for possible use in scientific publications and presentations. 
      <br>
      The researcher will not know your name, and no identifying information will be connected to your survey answers in any way. The survey is therefore anonymous. However, your account is associated with an mTurk number that the researcher has to be able to see in order to pay you, and in some cases these numbers are associated with public profiles which could, in theory, be searched. For this reason, though the researcher will not be looking at anyone’s public profiles, the fact of your participation in the research (as opposed to your actual survey responses) is technically considered “confidential” rather than truly anonymous.
      <br><br>
      <u><b>Voluntary Participation</b></u>
      <br>
      Your participation in this study is completely voluntary. You are free to decline to participate or to end participation at any time by simply closing your browser window. However, please note that you must submit both the computer game and questionnaire in order to receive payment. You may decline answering any question by selecting the designated alternative response (e.g., “I do not wish to answer”). Declining questions will not affect payment.
      <br><br>
      <u><b>Questions or Concerns</b></u>
      <br>
      If you have any questions or concerns regarding the experiment, you may contact us here at the lab by emailing BLAMLabRequester@gmail.com If you have general questions about your rights as a research participant, you may contact the Yale University Human Investigation Committee at 203-785-4688 or human.subjects@yale.edu (HSC# 2000026290).

    </p>
  </div>


</div>
<div id="attritionHolder" class="attrition centeredDiv"> 
  <p id="attritionInstructions" class="attrition"></p>
  <input required type="text" id="attritionAns" class="attrition" size="60" style="width:inherit; height:17px; font-size:15px; margin: 0 auto;" />
</div>
<div id="errorMessageHolder" class="error centeredDiv">
  <p id="mobileBrowserErrorMessage">You cannot access this test from a mobile browser. Please use a desktop computer to complete the task.</p>
  <p id="workerIDErrorMessage">You are ineligible for this task, since your worker ID has been recorded as participating in this task already. 
    Please return the HIT.</p>
</div>



  <div id="nextButtonHolder" class="buttonHolder">
  <button id="nextButton" onclick="startExperiment()">CONSENT/NEXT</button>
</div>
</body>
  
  <script>
   

    /* create timeline */
    var timeline = [];
    let pleasant_Prompt = '<p style="color:white;">How pleasant does the picture make you feel?</p> '
    let unpleasant_Prompt = '<p style="color:white;">How unpleasant does the picture make you feel?</p> '
    let arousal_Prompt = '<p style="color:white;">How arousing/exciting does the picture make you feel?</p> '

    let pleasantPrompt = '<p style="color:white; text-align:center;">How pleasant?</p> '
    let unpleasantPrompt = '<p style="color:white; text-align:center;">How unpleasant?</p> '
    let arousalPrompt = '<p style="color:white; text-align:center;">How arousing/exciting?</p> '


    let pleasantLikert = 'scale/BlankScalePleasant.png'
    let unpleasantLikert = 'scale/BlankScalePleasant.png'
    let arousalLikert = 'scale/BlankScalePleasant.png'

    let pleasantResponse = []
    let unpleasantResponse = []
    let arousalResponse = []

// let MinutesToPlay = 20;
    /* define welcome message trial */
    var welcome = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Welcome to the experiment! <br/>Press any key to begin.</p>'
    };
    timeline.push(welcome);

    /* define instructions trial */
    let instructions_1 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You will now see a series of pictures </p>' +
        '<p style="color:white;">Some of the pictures will be positive, like pictures of babies.   </p>' +
        '<p style="color:white;">Some will be negative, like pictures of sharks or sad people. </p>'+
        '<p style="color:white;"> Some will be neutral, like pictures of a clock or desk</p>'
    };
    timeline.push(instructions_1);

    let instructions_2 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">We want you to tell us how each picture makes you feel.</p> ' +
          '<p style="color:white;">You will make 3 ratings for each picture.</p> '
    };
    timeline.push(instructions_2);

    let instructions_3 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">The first rating you will be asked to make is a rating of how pleasant you feel when you see the photo.</p> ' +
      '<p style="color:white;">"Pleasantness" refers to how happy or good you feel when you see each photo and how much you like looking at it.</p> '
    };

    timeline.push(instructions_3);
    
    let instructions_4 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Pleasentness rating scale </p> ' +
                "<img class='center' style='width:500px; height:300px;' src='scale/BlankScalePleasant.png'></img>"
    };
    timeline.push(instructions_4);


    var instructions_5 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">The second rating you will be asked to make is a rating of how unpleasant you feel when you see the photo.</p> ' +
                '<p style="color:white;">"Unpleasantness" refers to how bad or unhappy you feel when you see each photo.</p>'
    };
    timeline.push(instructions_5);

    var instructions_6 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Unpleasentness rating scale</p> '+
      "<img class='center' style='width:500px; height:300px;' src='scale/BlankScaleUnpleasant.png'></img>"
    };
    timeline.push(instructions_6);

    var instructions_7 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You should decide how to rate each photo on the basis of how pleasant or unpleasant you feel when you see it.</p> ' +
      '<p style="color:white;">There are no "right" or "wrong" answers for rating the photos.</p> ' +
      '<p Just go by how much you like or dislike each one.</p> '
    };
    timeline.push(instructions_7);

    var instructions_8 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">The third rating you will be asked to make is a rating of how arousing or exciting each picture makes you feel.</p> ' +
      '<p style="color:white;">"Arousing" refers to how excited or keyed-up the photo makes you feel. Some of the pictures will be highly arousing and some will make you feel more calm or sleepy.</p> '
    };
    timeline.push(instructions_8);

    var instructions_9 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Arousal rating scale</p> '+
      "<img class='center' style='width:600px; height:300px;' src='scale/BlankScaleArousal.png'></img>"
    };
    timeline.push(instructions_9);
    
    var instructions_10 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Now we will have you rate some pictures for how positive, how negative, and how arousing they make you feel.</p> ' 
    };
    timeline.push(instructions_10);


    /* START TRAINING TRIAL FOR PARTICIPANTS */
// delayed discounting task: three variables: 1st= money now, 2nd= money later, 3rd= money days later
// display the variables on the screen to the participant (write a for loop to iterate through)
    //  variables for practice condition
    const positive = ['8312','4601','4622','5836','1710','8499','8185','8492']
    const neutral = ['7000', '7175', '7187', '7547', '5395', '7017', '7010', '2190']
    const negative = ['7011', '9445', '2751', '2710', '9910', '9183', '9921', '3005.1']


    let positive_stimuli = [];
    for (let i = 0; i < positive.length ; i++){
      positive_stimuli.push("stim/" + positive[i] + ".bmp");
      // console.log(original_stimuli[i]);
    }

    let neutral_stimuli = [];
    for (let i = 0; i < neutral.length ; i++){
      neutral_stimuli.push("stim/" + neutral[i] + ".bmp");
      // console.log(original_stimuli[i]);
    }

    let negative_stimuli = [];
    for (let i = 0; i < negative.length ; i++){
      negative_stimuli.push("stim/" + negative[i] + ".bmp");
      // console.log(inverted_stimuli[i]);
    }

  
  


    
  
    let full_stim = [

{stimulus: positive_stimuli[0], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[1], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[2], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[3], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[4], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[5], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[6], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},
{stimulus: positive_stimuli[7], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive', correct_response: '1'}},

{stimulus: neutral_stimuli[0], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[1], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[2], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[3], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[4], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[5], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[6], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},
{stimulus: neutral_stimuli[7], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral', correct_response: '1'}},

{stimulus: negative_stimuli[0], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[1], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[2], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[3], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[4], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[5], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[6], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},
{stimulus: negative_stimuli[7], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative', correct_response: '1'}},

]

let full_stim_shuffle = jsPsych.randomization.repeat(full_stim, 1); //shuffled array no repeats
   

    var fixation = {
      type: 'html-keyboard-response',
      stimulus: '<div style="color:white; font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {test_part: 'fixation'}
    }

    var instructions_9 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Arousalscale</p>'
    };
    // timeline.push(instructions_9);

    var instructions_10 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Now we will have you rate some pictures for how positive, how negative, and how arousing they make you feel.</p> '
    };
    // timeline.push(instructions_10);

    var scale_pleasant = [
      "<div style='color:white;'>1 <br />Not at all</div>", 
      "<div style='color:white;'>2</div>", 
      "<div style='color:white;'>3 <br/> Somewhat pleasant</div>", 
      "<div style='color:white;'>4</div>", 
      "<div style='color:white;'>5 <br/> Extremely plesant</div>"
];
  var scale_unpleasant = [
        "<div style='color:white;'>1 <br />Not at all</div>", 
        "<div style='color:white;'>2</div>", 
        "<div style='color:white;'>3 <br/> Somewhat unpleasant</div>", 
        "<div style='color:white;'>4</div>", 
        "<div style='color:white;'>5 <br/> Extremely unplesant</div>"
  ];

  var scale_arousal = [
        "<div style='color:white;'>1 <br />Extremely calm</div>", 
        "<div style='color:white;'>2 <br/>Somewhat calm</div>", 
        "<div style='color:white;'>3 <br/> Neutral</div>", 
        "<div style='color:white;'>4 <br/> Somewhat excited</div>", 
        "<div style='color:white;'>5 <br/> Extremely excited</div>"
    
  ];  

    var prompt_pleasant = {
      type: "html-keyboard-response",
      trial_duration: 2000,
      prompt: pleasant_Prompt,

      // stimulus: jsPsych.timelineVariable('stimulus'),
      // stimulus_height: 500,
      // stimulus_width: 500,
      
    };
    // timeline.push(prompt_pleasant);

    var prompt_unpleasant = {
      type: "html-keyboard-response",
      trial_duration: 2000,
      prompt: unpleasant_Prompt,
      // stimulus: jsPsych.timelineVariable('stimulus'),
      // stimulus_height: 500,
      // stimulus_width: 500,
        
    };
    // timeline.push(prompt_unpleasant);

    var prompt_arousal = {
      type: "html-keyboard-response",
      trial_duration: 2000,
      prompt: arousal_Prompt,
      // stimulus: jsPsych.timelineVariable('stimulus'),
      // stimulus_height: 500,
      // stimulus_width: 500,
       
    };
    // timeline.push(prompt_arousal);
    

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
      on_finish: function(data){
      // switch(){
      //   case data.key_press == '1': 
      //     pleasantResponse = pleasantResponse.push("scale/PleasantScale1.jpg")
      //     // pleasantResponse = jsPsych.data.addProperties({subject: "scale/PleasantScale1.jpg"})
      //     break;
      //   case data.key_press == '2': 
      //     pleasantResponse = pleasantResponse.push("scale/PleasantScale2.jpg")
      //     // pleasantResponse = jsPsych.data.addProperties({subject: "scale/PleasantScale2.jpg"})
      //     break;
      //   case data.key_press == '3':
      //     pleasantResponse = pleasantResponse.push("scale/PleasantScale3.jpg")
      //     // pleasantResponse = jsPsych.data.addProperties({subject: "scale/PleasantScale3.jpg"})
      //     break;
      //   case data.key_press == '4':
      //     pleasantResponse = pleasantResponse.push("scale/PleasantScale4.jpg")
      //     // pleasantResponse = jsPsych.data.addProperties({subject: "scale/PleasantScale4.jpg"})
      //     break;
      //   case data.key_press == '5':
      //     pleasantResponse = pleasantResponse.push("scale/PleasantScale5.jpg")
      //     // pleasantResponse = jsPsych.data.addProperties({subject: "scale/PleasantScale5.jpg"})
      //     break;
      //   default:
      // }

      if (data.key_press == 49){
        pleasantResponse.pop()
        pleasantResponse.push("scale/PleasantScale1.jpg")
      } else if (data.key_press == 50){
        pleasantResponse.pop()
        pleasantResponse.push("scale/PleasantScale2.jpg")
      } else if (data.key_press == 51){
        pleasantResponse.pop()
        pleasantResponse.push("scale/PleasantScale3.jpg")
      } else if (data.key_press == 52){
        pleasantResponse.pop()
        pleasantResponse.push("scale/PleasantScale4.jpg")
      } else if (data.key_press == 53){
        pleasantResponse.pop()
        pleasantResponse.push("scale/PleasantScale5.jpg")
      }
        

      },

    };
    // timeline.push(response_pleasant);

    var feedback_pleasant = {
      type: "html-keyboard-response",
      stimulus: function(){
                var html= jsPsych.timelineVariable('prompt_pleasant', true) +
                "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
                "<img id='pleasant' class='center' src='"+jsPsych.timelineVariable('feedback_pleasant', true)+"'>";
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
          unpleasantResponse.pop()
          unpleasantResponse.push("scale/UnpleasantScale1.jpg")
      } else if (data.key_press == 50){
          unpleasantResponse.pop()
          unpleasantResponse.push("scale/UnpleasantScale2.jpg")
      } else if (data.key_press == 51){
          unpleasantResponse.pop()
          unpleasantResponse.push("scale/UnpleasantScale3.jpg")
      } else if (data.key_press == 52){
          unpleasantResponse.pop()
          unpleasantResponse.push("scale/UnpleasantScale4.jpg")
      } else if (data.key_press == 53){
         unpleasantResponse.pop()
          unpleasantResponse.push("scale/UnleasantScale5.jpg")
      }
        
      },
    };
    // timeline.push(response_unpleasant);

    var feedback_unpleasant = {
      type: "html-keyboard-response",
      stimulus: function(){
                var html= jsPsych.timelineVariable('prompt_unpleasant', true) +
                "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
                "<img id='pleasant' class='center' src='"+jsPsych.timelineVariable('feedback_unpleasant', true)+"'>";
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
          arousalResponse.pop()
          arousalResponse.push("scale/ArousalScale1.jpg")
      } else if (data.key_press == 50){
          arousalResponse.pop()
          arousalResponse.push("scale/ArousalScale2.jpg")
      } else if (data.key_press == 51){
          arousalResponse.pop()
          arousalResponse.push("scale/ArousalScale3.jpg")
      } else if (data.key_press == 52){
          arousalResponse.pop() 
          arousalResponse.push("scale/ArousalScale4.jpg")
      } else if (data.key_press == 53){
          arousalResponse.pop()
          arousalResponse.push("scale/ArousalScale5.jpg")
      }

      },
    };
    // timeline.push(response_arousal);

    var feedback_arousal = {
      type: "html-keyboard-response",
      stimulus: function(){
                var html= jsPsych.timelineVariable('prompt_arousal', true) +
                "<img class='center' style='width:500px; height:500px;' src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
                "<img id='pleasant' class='center' src='"+jsPsych.timelineVariable('feedback_arousal', true)+"'>";
                return html;
      },
      // choices: ['1','2','3','4','5'],
      response_ends_trial: false,
      trial_duration: 2000,
      data: participantResponse = jsPsych.data.get().select('responses'),
      
    };

// this is where the procedure loops over the timeline property below. the timeline variables are the stimuli.
    var procedure = {
      timeline: [fixation, prompt_pleasant, response_pleasant, feedback_pleasant, prompt_unpleasant, response_unpleasant, feedback_unpleasant, prompt_arousal, response_arousal, feedback_arousal],
      timeline_variables: full_stim_shuffle,
      //randomize_order: false
    }
  
    // horizontal progress bar
//     <div class="progress">
//   <div class="progress-bar" role="progressbar" aria-valuenow="70"
//   aria-valuemin="0" aria-valuemax="100" style="width:70%">
//     <span class="sr-only">70% Complete</span>
//   </div>
// </div> 

    timeline.push(procedure);
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
    // timeline.push(end_of_trial)

    /* END TRAINING TRIAL FOR PARTICIPANTS */

    // COMPLETION MESSAGE: Completed Classification Phase
    var link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId="
    var instructions_16 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You have now completed the task! Saving data...PLEASE DO NOT CLOSE THIS BROWSER until you complete the second part.</p> ' +
          '<p style="color:white;">BEFORE THE LINK DISAPPEARS please move on to the second part of the task at this link to obtain your completion code:</p> ' +
          "<a href=" + link + ' target="_blank">' + link + "</a>",
      choices: jsPsych.NO_KEYS,
      trial_duration: 40000
    };
    timeline.push(instructions_16);



    /* END PHASE II OF TASK: CLASSIFICATION and ANTICIPATION PHASE */

function saveData(name, data){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'test-self-deception.php'); // 'write_data.php' is the path to the php file described above.
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({filename: name, filedata: data}));
}

//var this_seed = new Date().getTime();
    //Math.seedrandom(this_seed);

    //var randNum = Math.random() * 1000
    //var randNumRounded = Math.floor(randNum+1)
    function getParamFromURL(name)
    {
      name = name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
      var regexS = "[\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( window.location.href );
      if( results == null )
        return "";
      else
        return results[1];
    }
    var workerID = getParamFromURL( 'workerId' );

    /* start the experiment */
    function startExperiment(){
      jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        on_finish: function(){ saveData("full-self-deception_" + workerID, jsPsych.data.get().csv()); }
        //on_finish: function(){
          //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
            //jsPsych.data.displayData(); 
        //}
      });
    }
  </script>

<footer> 

   

<script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>


<script>
// show page when loaded 
window.onload = function() {
  $(".loading").css({display: "none"});
  $(".consent").css({display: "block"});
  $(".buttonHolder").css({display: "block"});
};
</script>
</footer>
  </html>
