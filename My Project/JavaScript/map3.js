var recipes = {
  Delhi: "https://example.com/recipes/delhi",
  Mumbai: "https://example.com/recipes/mumbai",
  Chennai: "https://example.com/recipes/chennai",
  Kolkata: "https://example.com/recipes/kolkata",
};

$(".search-button").click(function () {
  var location = $(".search-bar").val().trim();   

  if (location) {
    var recipeUrl = recipes[location];

    if (recipeUrl) {
      var cardHtml = `
                    <div class="card">
                        <h3>Recipe for ${location}</h3>
                        <a href="${recipeUrl}" target="_blank">View Recipe</a>
                    </div>
                `;
      $("#card-container").html(cardHtml);
    } else {
      $("#card-container").html(
        '<div class="card"><p>No recipes found for this location.</p></div>'
      );
    }
  } else {
    $("#card-container").html("");
  }
});
