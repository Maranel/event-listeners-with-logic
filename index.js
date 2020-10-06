// $( 'button' ).on('click',()  => {
//     // do something
//     console.log("Hello i am button.")
//   });
  var ichg = false;

  $("#bt1").click(() => {
    console.log("Yeah, you clicked me")
  })
  $(".bt2").click(() => {

    $("#bt1").text("I was changed")
  })
  $(".bt3").click(() =>{
    if (ichg=== false){
    var inp = $("#inp1").val()
    $('button').css("background-color",inp)
    $(".bt3").attr("disabled", "disabled"); 
    ichg = true;  
  }
  else{};
  });

  $("input").change(() => {
    console.log(ichg);
    if (ichg === false){
    var inp = $("#inp1").val()
    $('button').css("background-color",inp)
   ichg = true;
   console.log(ichg);
  }
  else {
  };
  });

//   $('#inp1').bind('input', function() { 
//     // $(this).val() // get the current value of the input field.
//     $('button').css("background-color",$(this).val())
// });