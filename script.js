function renderData() {
  $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(json) {
    var { quote:nQuote, character:author, image } = json[0];
    $("#quote").html(nQuote);
    $("#cite").html(author);
    $("img").attr("src", image);
  });
}

$(document).ready(function() {
  renderData();
});

$("button").click(renderData);

function postQuoteT() {
  var quoteText = `${$("#quote").text()}  ${$("#cite").text()}`;
  window.open("https://twitter.com/intent/tweet?text=" + quoteText);
}
