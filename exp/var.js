// define prompts

<<<<<<< HEAD
let pleasant_Prompt = '<h2 style="color:white;">How pleasant does the picture make you feel?</h2> ';
let unpleasant_Prompt = '<h2 style="color:white;">How unpleasant does the picture make you feel?</h2> ';
let arousal_Prompt = '<h2 style="color:white;">How arousing/exciting does the picture make you feel?</h2> ';

let pleasantPrompt = '<h2 style="color:white; text-align:center;">How pleasant?</h2> ';
let unpleasantPrompt = '<h2 style="color:white; text-align:center;">How unpleasant?</h2> ';
let arousalPrompt = '<h2 style="color:white; text-align:center;">How arousing/exciting?</h2> ';
=======
let pleasant_Prompt = '<p style="color:white;">How positive?</p> ';
let unpleasant_Prompt = '<p style="color:white;">How negative?</p> ';
let arousal_Prompt = '<p style="color:white;">How calm/excited?</p> ';

let pleasantPrompt = '<p style="color:white; text-align:center;">How positive?</p> ';
let unpleasantPrompt = '<p style="color:white; text-align:center;">How negative?</p> ';
let arousalPrompt = '<p style="color:white; text-align:center;">How calm/excited?</p> ';
>>>>>>> c3e434634b7266e55fa038dcf24e75048c7b45ac

// define SAM anchor images

let pleasantLikert = 'scale/BlankScalePleasant.png';
let unpleasantLikert = 'scale/BlankScaleUnpleasant.png';
let arousalLikert = 'scale/BlankScaleArousal.png';

// define SAM anchor stim

let pleasantResponse = [];
for (let i = 1; i <= 5 ; i++) {
    pleasantResponse.push("scale/PleasantScale"+i+".jpg")
};

let unpleasantResponse = [];
for (let i = 1; i <= 5 ; i++) {
    unpleasantResponse.push("scale/UnpleasantScale"+i+".jpg")
};

let arousalResponse = [];
for (let i = 1; i <= 5 ; i++) {
    arousalResponse.push("scale/ArousalScale"+i+".jpg")
};

// define stim paths

let positive_stimuli = [];
for (let i = 0; i < positive.length ; i++){
    positive_stimuli.push("stim/" + positive[i] + ".bmp");
    // console.log(original_stimuli[i]);
};       

let neutral_stimuli = [];
for (let i = 0; i < neutral.length ; i++){
    neutral_stimuli.push("stim/" + neutral[i] + ".bmp");
    // console.log(original_stimuli[i]);
};

let negative_stimuli = [];
for (let i = 0; i < negative.length ; i++){
    negative_stimuli.push("stim/" + negative[i] + ".bmp");
    // console.log(inverted_stimuli[i]);
};

// create timeline variable array

let full_stim = [];

for (let i = 0; i < positive.length ; i++){
    full_stim.push({stimulus: positive_stimuli[i], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'positive'}})
};

for (let i = 0; i < neutral.length ; i++){
    full_stim.push({stimulus: neutral_stimuli[i], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'neutral'}})
};

for (let i = 0; i < negative.length ; i++){
    full_stim.push({stimulus: negative_stimuli[i], prompt_pleasant: pleasantPrompt, Likert_pleasant:pleasantLikert, prompt_unpleasant: unpleasantPrompt, Likert_unpleasant:unpleasantLikert, prompt_arousal: arousalPrompt, Likert_arousal: arousalLikert, feedback_pleasant: pleasantResponse, feedback_unpleasant: unpleasantResponse, feedback_arousal: arousalResponse, data: {test_part: 'negative'}},)
};

let full_stim_shuffle = jsPsych.randomization.repeat(full_stim, 1); //shuffled array no repeats

// define scales

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
