
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

