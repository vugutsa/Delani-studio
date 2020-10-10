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

$(document).ready(function () {
  $(".row").hover(
    function () {
      $(this).find("#work1").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work1").stop();
    }
  );

$(".row").hover(
    function () {
      $(this).find("#work2").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work2").stop();
    }
  );

  $(".row").hover(
    function () {
      $(this).find("#work3").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work3").stop();
    }
  );

  $(".row").hover(
    function () {
      $(this).find("#work4").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work4").stop();
    }
  );

  $(".row").hover(
    function () {
      $(this).find("#work5").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work5").stop();
    }
  );

  $(".row").hover(
    function () {
      $(this).find("#work6").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work6").stop();
    }
  );

  $(".row").hover(
    function () {
      $(this).find("#work7").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work7").stop();
    }
  );

  $(".row").hover(
    function () {
      $(this).find("#work8").stop().animate({ opacity: "0.4" });
    },
    function () {
      $(this).find("#work8").stop();
    }
  );


});
          


