$(document).ready(function () {
  $("#one").click(function () {
    $(".par4").toggle();
  });

  $("#two").click(function () {
    $(".par5").toggle();
  });
  $("#three").click(function () {
    $(".par6").toggle();
  });
});

$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#four").show();

  })
  .mouseout(function(){
    $("#four").hide();
  })
  
  $("#work3").mouseover(function(){
    $("#security").show();

  })
  .mouseout(function(){
    $("#security").hide();
  })
  
  $("#work2").mouseover(function(){
    $("#empower").show();

  })
  .mouseout(function(){
    $("#empower").hide();
  })


  
  $("#work1").mouseover(function(){
    $("#curry").show();

  })
  .mouseout(function(){
    $("#curry").hide();
  })

  $("#work5").mouseover(function(){
    $("#website").show();

  })
  .mouseout(function(){
    $("#website").hide();
  })


  $("#work6").mouseover(function(){
    $("#calcu").show();

  })
  .mouseout(function(){
    $("#calcu").hide();
  })


  $("#work7").mouseover(function(){
    $("#bun").show();

  })
  .mouseout(function(){
    $("#bun").hide();
  })


  $("#work8").mouseover(function(){
    $("#rest").show();

  })
  .mouseout(function(){
    $("#rest").hide();
  })




});

$("button").click(function(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

if (name==="") {
  alert("enter your name")
} else if(email===""){
  alert("enter email")
} else if(message===""){
  alert("enter message")
}
else {
  alert(" Dear " + name + " we have received your message successfully " + " feel free to reach out to us any time. ")
}


});


