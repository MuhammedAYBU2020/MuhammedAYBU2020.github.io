$(document).ready(function() {
    $("#accordion").accordion({
        heightStyle: "content",
    });

    $.getJSON('assets/json/cafe_menu.json', function(data) {
        var accordion = $('#cafe_accordion');
        
        $.each(data, function(index, item) {
            var header = $('<h3>').text(item.title);
            var content = $('<div>').html(item.content);
          
            accordion.append(header);
            accordion.append(content);
        });
        
        accordion.accordion({
            collapsible: true,
            active: false
        });
    });

    $('#contact-form').submit(function(event) {
        event.preventDefault();

        // Validation name and surname
        var getNameValue = $('#name').val();
        var getSurnameValue = $('#surname').val();
        var namePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
        var surnamePattern = /^[A-Za-z]+$/;

        if ((!namePattern.test(getNameValue)) && (!surnamePattern.test(getSurnameValue))) {
            $('#name-error').text('Please enter a valid name (letters only with a single space between words).');
            $('#surname-error').text('Please enter a valid surname (letters only).');
            return;
        }
        else if ((!namePattern.test(getNameValue))) {
            $('#surname-error').text('');
            $('#name-error').text('Please enter a valid name (letters only with a single space between words).');
            return;
        }
        else if ((!surnamePattern.test(getSurnameValue))) {
            $('#name-error').text('');
            $('#surname-error').text('Please enter a valid surname (letters only).');
            return;
        }
        else {
            $('#name-error').text('');
            $('#surname-error').text('');
        }

        var fullName = $('#name').val() + " " + $('#surname').val();
        var email = $('#email').val();
        var reason = $('#reason option:selected').text();
        var message = $('#message').val();

        var responseMessage = '<p>Thank you for contacting us!</p>';
        responseMessage += '<p>Full Name: ' + fullName + '</p>';
        responseMessage += '<p>Email: ' + email + '</p>';
        responseMessage += '<p>Reason: ' + reason + '</p>';
        responseMessage += '<p>Message: ' + message + '</p>';

        // $('<div>Thanks for contacting us!</div>').dialog({
        $('<div>').html(responseMessage).dialog({
            modal: true,
            title: "Thanks",
            buttons: {
                OK: function() {
                    $(this).dialog('close');
                }
            },
            close: function() {
                $('#contact-form')[0].reset();
                $('#name-error').text('');
                $('#surname-error').text('');
            }
        });
    });

    var selectMenuOptions = [
        { value: 'option1', label: 'Suggestion' },
        { value: 'option2', label: 'Complaint' },
        { value: 'option3', label: 'Information' }
    ];

    var selectMenu = $('#reason');

    $.each(selectMenuOptions, function(index, option) {
        selectMenu.append($('<option>', {
            value: option.value,
            text: option.label
        }));
    });

    selectMenu.selectmenu();

    $('.recipe-card-image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $(".recipe-suggest-button").click(function() {
        $.ajax({
            url: 'https://www.themealdb.com/api/json/v1/1/random.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var recipe = data.meals[0];
                var title = recipe.strMeal;
                var description = '<img class="recipe-suggest-image" src="' + recipe.strMealThumb + '" alt="' + recipe.strMeal + '">';
                description += '<p class="recipe-suggest-instructions">' + recipe.strInstructions + '</p>';

                $("#suggestButton").html(description);
                
                $("#suggestButton").dialog({
                    modal: true,
                    title: title,
                    width: 500,
                    buttons: {
                        Close: function() {
                            $(this).dialog("close");
                        }
                    }
                });
            },
            error: function() {}
        });
    });

    $(".recipe-card-button-read").click(function() {
        var title = $(this).closest('.recipe-card').find('.recipe-card-title').text();
        // var description = $(this).closest('.recipe-card').find('.recipe-card-description').html();
        var description = "This will be updated in future assignments.";

        $("#viewButton").html(description);

        $("#viewButton").dialog({
            modal: true,
            title: title,
            buttons: {
                Close: function() {
                    $(this).dialog("close");
                }
            }
        });
    });

    $(".recipe-card-button-watch").click(function() {
        var title = $(this).closest('.recipe-card').find('.recipe-card-title').text();
        var iframeHtml;

        switch(title) {
            case "Hamburger":
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9t2FxZ0jP5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
            case "İçli Köfte":
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/wWjrSFQTGsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
            case "Lahmacun":
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/5M8-E9hkSac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
            case "Pirinç Pilavı":
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/asoXVOUJ80o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
            case "Pizza":
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/TdTq7eg1ITI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
            case "Tiramisu":
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CcdP11ExXgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
            default:
                iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/yGX8vTZrLp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                break;
        }

        $.magnificPopup.open({
            items: {
                src: iframeHtml
            },
            type: 'inline',
            callbacks: {
                open: function() {
                    this.content.find('iframe').attr('src', videoUrl);
                },
                close: function() {
                    this.content.find('iframe').attr('src', '');
                }
            }
        });
    });
});