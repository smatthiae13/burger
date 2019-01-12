$(document).ready(function() {
    
    $(".devour").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/api/burger/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        console.log("We Posted: :)");
        location.reload();
      });
  
    });
  });