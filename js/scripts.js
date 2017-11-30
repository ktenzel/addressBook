$(function() {
  $("form").submit(function () {
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    // $("button#submit").click(function() {
      // alert($("#name").val());
      $("div#liName").prepend($("#name").val());
      $("ul#newContact").append("<li>" + $("#address").val() + "</li>");
      $("ul#newContact").append("<li>" + $("#phone").val() + "</li>");
      $("ul#newContact").append("<li>" + $("#email").val() + "</li>");

  });
});
