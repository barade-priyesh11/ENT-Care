
  $(document).ready(function(){
  $('#navbarDropdownServices').hover(function(){
    $(this).attr('aria-expanded', 'true');
    $(this).parent('.nav-item.dropdown').addClass('show');
    $(this).next('.dropdown-menu').addClass('show');

    // Hide all dropdown items initially
    $('.dropdown-item').hide();

    // Show each dropdown item one by one
    $('.dropdown-item').each(function(i){
      $(this).delay(100 * i).fadeIn(500);
    });

  }, function(){
    // This function is for mouse out
  });

  // Close the dropdown when mouse leaves the dropdown area
  $('.nav-item.dropdown').mouseleave(function(){
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
    $(this).find('#navbarDropdownServices').attr('aria-expanded', 'false');
    $('.dropdown-item').show(); // Reset to show all items for next hover
  });
});



  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.0"></script>
  
    var typed = new Typed(".typed", { 
        strings: ["Hearing Loss"," Tinnitus", "Infections","Balance Disorders"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 500,
        startDelay: 1000,
        loop:Infinity,
    });
