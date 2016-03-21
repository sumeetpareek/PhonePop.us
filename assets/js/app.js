window.NN = {}
NN.userDataState = {};

NN.constructBody =  function(forClipboard) {
  return "May be the email body goes here";
}


NN.isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}
NN.toAddress = "advqos@trai.gov.in";
NN.bccAddress = "netneutralityindia@gmail.com";
NN.subject = "In response to the Consultation Paper on Regulatory Framework for Over-the-top (OTT) services";

$("#send").click(function(e) {
    e.preventDefault();
    window.open("mailto:"+NN.toAddress+"?subject="+NN.subject+"&bcc="+NN.bccAddress+"&body="+NN.constructBody(), "_blank");
});


// $(function() {
//   // NN.renderQuestions();
//   // $(".page-prev").addClass("disabled");
//   // $(".pagination li:nth-child(2)").addClass("active");
//   // var questions = [];
//   // for (var i = questionsData['questions'].length - 1; i >= 0; i--) {
//   //   questions.push({
//   //     chosenAnswer:0,
//   //     answersLength:questionsData['questions'][i]['answers'].length
//   //   });
//   // }
//   NN.userDataState = {
//     questions: questions
//   };
//   if(!NN.isMobile) {
//     setTimeout(function() {
//     //set path
//     ZeroClipboard.setMoviePath('swf/ZeroClipboard.swf');
//     //create client
//     var clip = new ZeroClipboard.Client();
//     //event
//     clip.addEventListener('mousedown',function() {
//       clip.setText(NN.constructBody(forClipboard=true));
//     });
//     clip.addEventListener('complete',function(client,text) {
//       alert('Your response has been copied to your clipboard. Please paste it in the body of your email once Gmail opens.');
//       window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to="+NN.toAddress+"&bcc="+NN.bccAddress+"&su="+NN.subject,"_blank");
//     });
//     //glue it to the button
//     clip.glue("send");
//   });
//   }
// });