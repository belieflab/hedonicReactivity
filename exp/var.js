

let pleasant_Prompt = '<p style="color:white;">How pleasant does the picture make you feel?</p> '
let unpleasant_Prompt = '<p style="color:white;">How unpleasant does the picture make you feel?</p> '
let arousal_Prompt = '<p style="color:white;">How arousing/exciting does the picture make you feel?</p> '

let pleasantPrompt = '<p style="color:white; text-align:center;">How pleasant?</p> '
let unpleasantPrompt = '<p style="color:white; text-align:center;">How unpleasant?</p> '
let arousalPrompt = '<p style="color:white; text-align:center;">How arousing/exciting?</p> '


let pleasantLikert = 'scale/BlankScalePleasant.png'
let unpleasantLikert = 'scale/BlankScaleUnpleasant.png'
let arousalLikert = 'scale/BlankScaleArousal.png'

let pleasantResponse = [];
for (let i = 1; i <= 5 ; i++) {
    pleasantResponse.push("scale/PleasantScale"+i+".jpg")
    }

let unpleasantResponse = [];
for (let i = 1; i <= 5 ; i++) {
    unpleasantResponse.push("scale/UnpleasantScale"+i+".jpg")
    }

let arousalResponse = [];
for (let i = 1; i <= 5 ; i++) {
    arousalResponse.push("scale/ArousalScale"+i+".jpg")
    }

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

let scale_pleasant = [
    "<div style='color:white;'>1 <br />Not at all</div>", 
    "<div style='color:white;'>2</div>", 
    "<div style='color:white;'>3 <br/> Somewhat pleasant</div>", 
    "<div style='color:white;'>4</div>", 
    "<div style='color:white;'>5 <br/> Extremely plesant</div>"
];
let scale_unpleasant = [
      "<div style='color:white;'>1 <br />Not at all</div>", 
      "<div style='color:white;'>2</div>", 
      "<div style='color:white;'>3 <br/> Somewhat unpleasant</div>", 
      "<div style='color:white;'>4</div>", 
      "<div style='color:white;'>5 <br/> Extremely unplesant</div>"
];

let scale_arousal = [
      "<div style='color:white;'>1 <br />Extremely calm</div>", 
      "<div style='color:white;'>2 <br/>Somewhat calm</div>", 
      "<div style='color:white;'>3 <br/> Neutral</div>", 
      "<div style='color:white;'>4 <br/> Somewhat excited</div>", 
      "<div style='color:white;'>5 <br/> Extremely excited</div>"
  
];  

