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
        on_finish: function(){ saveData("hedonic-reactivity_" + workerId, jsPsych.data.get().csv()); }
    });
}

  //onbeforeunload in body
  function areYouSure() {
    return "Write something clever here...";
  }
  areYouSure();