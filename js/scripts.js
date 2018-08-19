$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["one", "two", "three", "four"];
    var outputItems= items.map(function(item) {
      return $("input#"+item).val();
    });

    var capital = outputItems.map(function(item) {
      return item.toUpperCase();
    });
    capital.sort();
    capital.forEach(function(item){
    $("#output").append("<li>" + item + "</li>");})
  });
});
