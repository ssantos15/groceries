/*$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var items = ["input#one", "input#two", "input#three", "input#four"];

    var outputItems= items.map(function(item) {
      return item.val().toUpperCase();
    });

    ("ul#output").append("<li>" + outputItems + "</li>");
    event.preventDefault();
  });
});*/



$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var items = ["one", "two", "three", "four"];
    var outputItems = items.map(function(item) {
      return $("input#"+item).val();
    });
    var Upper = outputItems.map(function(item){
      return item.toUpperCase();
    });
    Upper.sort();
    Upper.forEach(function(item) {
      $("#ouput").append("<li>"+item+"</li>");
    });
  });
});


















/*$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var items = ["one", "two", "three","four"]

    answers.map(function(item){
      var outputItems = $('input#' + item).val().toUpperCase();

      $("ul#output").append("<li>" + userInput + "</li>");
    });

    $("#output").show();

    event.preventDefault();
  });
});*/
