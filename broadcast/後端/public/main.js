
$(function () {
  var socket = io.connect();

  //$("p").css({"background-color": "yellow", "font-size": "200%"});
  //$("#in").animate({scollTop: $("#in").prop("scrollHeight")}, 500);

  $("#button").click(function () {

    var message = $("#text").val();
    var name    = $("#name").val();

    socket.emit("message", {
      name   : name,
      message: message
    });

    $("#in").prepend("<p id=\"tt\">" + name + ": " + message + "</p>");

    $("#tt").css({"background-color":"#03899C",
                "font-size":"200%",
                "font-family": "微軟正黑體",
                "border-radius":"10px"});

    console.log(message);
  });

  socket.on("everyone", function (data) {
    $("#in").prepend("<p id=\"tt\">" + data.name + ": " + data.message +  "</p>");
    $("#tt").css({"background-color":"#03899C",
                "font-size":"200%",
                "font-family": "微軟正黑體",
                "border-radius":"10px"});
  });

});
