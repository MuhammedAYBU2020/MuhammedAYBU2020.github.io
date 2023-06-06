$(document).ready(function() {
  $("#nav_list a").click(function(event) {
    event.preventDefault();

    var title_filename = $(this).attr("title");

    $.getJSON("json_files/" + title_filename + ".json", function(data) {
      $("main").empty();

      var title = $("<h1>").text(data.speakers[0].title);
      var image = $("<img>").attr("src", data.speakers[0].image);
      var extra = $("<h2>").html(data.speakers[0].month + "<br>" + data.speakers[0].speaker);
      var article = $("<p>").text(data.speakers[0].text);

      $("main").append(title, image, extra, article);
    });
  });
  }); // end ready