
    $(".tags-list a").click(function () {
        $(".tags-list a").removeClass("now");
        $(this).addClass("now");
    });
    const bookmarkIcon = document.getElementById('bookmarkIcon');

bookmarkIcon.addEventListener('click', function () {
    this.classList.toggle('fas'); 
    this.classList.toggle('far'); 
    this.classList.toggle('active'); 
});


  const reviewForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviews');
  
  // Function to load existing reviews from localStorage
  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => {
      displayReview(review.username, review.text);
    });
  }

  // Function to display a review
  function displayReview(user, text) {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <strong>${user}</strong>
      <p>${text}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  }

  // Load reviews when the page loads
  loadReviews();

  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const userReview = document.getElementById('userReview').value;

    // Create a new review object
    const newReview = {
      username: username,
      text: userReview
    };

    // Get existing reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Add the new review to the array
    reviews.push(newReview);

    // Save the updated reviews back to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Display the new review immediately
    displayReview(username, userReview);

    // Clear the form
    reviewForm.reset();
  });

