var recipes = {
  Delhi: "#",
  Mumbai: "#",
  Chennai: "#",
  Kolkata: "#",
};

var coordinates = {
  Delhi: { top: '35%', left: '35%' },
  Mumbai: { top: '65%', left: '25%' },
  Chennai: { top: '79%', left: '45%' },
  Kolkata: { top: '50%', left: '65%' },

};

$(".search-button").click(function () {
  var location = $(".search-bar").val().trim();   

  if (location) {
    var recipeUrl = recipes[location];
    var position = coordinates[location];

    if (recipeUrl) {
      var cardHtml = `
        <div class="card">
            <h3>Popular recipe at ${location}</h3>
            <a href="${recipeUrl}" target="_blank">View Recipe</a>
        </div>
      `;
      $("#card-container").html(cardHtml);

      if (position) {
        
        $("#map").attr("src", "../Images/india.jpg"); 
        $("#pin").css({
          display: 'block',
          top: position.top,
          left: position.left
        });
      } else {
        $("#map").attr("src", "../Images/india.jpg");
        $("#pin").hide();
      }
    } else {
      $("#card-container").html(
        '<div class="card"><p>No recipes found for this location.</p></div>'
      );
      $("#map").attr("src", "../Images/india.jpg");
      $("#pin").hide();
    }
  } else {
    $("#card-container").html("");
    $("#map").attr("src", "../Images/india.jpg"); 
    $("#pin").hide();
  }
});
