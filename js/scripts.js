
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 52
});

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 50
      }, 800);
      return false;
    }
  }
});

//send email
(function() {
  var sendButton = $("#email-btn");

  function onSuccess() {
    sendButton.prop('disabled',false);
    alert("Success!");
  }

  function onError(error) {
    sendButton.prop('disabled',false);
    alert("Error!");
  }

  function send() {
    sendButton.prop('disabled',true);
    var viewerName = $("input[name='fname']").val();
    var emailAdress = $("input[name='lname']").val();
    var company = $("input[name='email']").val();
    var jobTitle = $("input[name='phone']").val();
    var comment = $("#comment").val();
    var subject = "Message by " + emailAdress;
    var message = "Name: " + viewerName + "\nCompany: " + company + "\nJob title: " + jobTitle + "\n\n" + comment;
    var data = {
        "access_token": "ar5bcg2wger8gneftkhy9q0b"
    };
    data['subject'] = subject;
    data['text'] = message;

    $.post('https://postmail.invotes.com/send',
      data,
      onSuccess
    ).fail(onError);

    return false;
  }
  sendButton.on('click', send);
})();
