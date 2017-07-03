$( document ).ready(function() {
  var current = 0;
  var pastProjectsIndex = ["pp1", "pp2"];

  $("#lArrow").on("click", function(){
    $("#" + pastProjectsIndex[current]).addClass('displayNone');
    if (current <= 0) {
      let newIndex = (pastProjectsIndex.length) - 1;
      $("#" + pastProjectsIndex[newIndex]).removeClass('displayNone');
      current = newIndex;
    } else {
      $("#" + pastProjectsIndex[current - 1]).removeClass('displayNone');
      current -= 1;
    }
  });
  $("#rArrow").on("click", function(){
    $("#" + pastProjectsIndex[current]).addClass('displayNone');
    if (current >= pastProjectsIndex.length - 1 ) {
      $("#" + pastProjectsIndex[0]).removeClass('displayNone');
      current = 0;
    } else {
      $("#" + pastProjectsIndex[current + 1]).removeClass('displayNone');
      current += 1;
    }
  });

});
