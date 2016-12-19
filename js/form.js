// JavaScript File
 $(function() {
     $('#submit').click(function(e) {
         e.preventDefault();
         $.ajax({
             url: "https://formspree.io/tatyana_chocolate@meta.ua",
             method: "POST",
             data: {
                 name: $('#name').val()
                
             },
             dataType: "json"
         })
         .done(function() {
             $('form').html('<h1>thank you</h1>');
         });
     });
 });