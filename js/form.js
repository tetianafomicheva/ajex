// JavaScript File
$ function (){
    $('#submit').click(function() {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/tatyana_chocolate@meta.ua",
            method: "POST",
            data: {
                name: $('#name').val(),
                email:$('#email').val()   
                },
            dataType: "json"
        });
        done.(function (){
            $('form').html('<h1>thank you<h1>');
        }
    });
});