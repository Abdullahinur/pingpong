var numbers = [];

function calculator(ppInput) {
  for (x = 1; x <= ppInput; x++)

    if (x % 15 == 0) {
      numbers.push("pingpong");
    }
  else if (x % 5 == 0) {
    numbers.push("pong");
  } else if (x % 3 == 0) {
    numbers.push("ping");
  } else {
    numbers.push(x);
  }
}

$(document).ready(function() {
  $("#button").click(function() {
    event.preventDefault();
    var ppInput = parseInt($("input#pp").val());

    calculator(ppInput);

    numbers.forEach(function(ppInput) {
      $("#output").append("<ul>" + ppInput + "</ul>");

    });
  });
})
