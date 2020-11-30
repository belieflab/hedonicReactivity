<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);

include_once ("db/config.php");

$studyId = $_GET["studyId"];
$candidateId = $_GET["candidateId"];
$query = "SELECT GUID from candidate where sub_id = $candidateId";
$prepare = $db_connection->prepare($query);
$prepare->execute();
$result = $prepare->get_result();
$row = $result->fetch_assoc();
$guid = $row["GUID"];
$prepare->close();
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Hedonic Reactivity</title>
    <script src="db/submit.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-survey-likert.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">  -->
  </head>
  <body id='unload' onbeforeunload="return areYouSure()" style="background-color:black;">  
    <?php include_once "include/intake.php"?>
  </body>
  <footer>
    <script src="exp/conf.js"></script>
    <script src="exp/fn.js"></script>
    <script src="exp/var.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
    <script type="text/javascript">
    let feedbackLink = "https://omnibus.sh/eCRFs/feedback/tasks/iaps.php?studyId=<?php echo $studyId?>";
    </script>
  </footer>
</html>
