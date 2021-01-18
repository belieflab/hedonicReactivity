
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
timeline.push(save_data);
timeline.push(end);