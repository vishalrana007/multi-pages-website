$('#menu-btn').click(function () {
  $('nav ul').addClass('active')
});
$('#menu-close').click(function () {
  $('nav ul').removeClass('active')
});


$('#sp').on('click', function () {
  if ($('#sp').text() === 'Read More') {
    $('#sp').text('Read less');
    $('#show').css('display', 'block');
  }
  else {
    $('#sp').text('Read More');
    $('#show').css('display', 'none');
  }

})

$('#ap').on('click', function () {
  if ($('#ap').text() === 'Read More') {
    $('#ap').text('Read Less');
    $('#sh').css('display', 'block');
  }
  else {
    $('#ap').text('Read More');
    $('#sh').css('display', 'none');
  }

})


$('#har').on('click', function () {
  if ($('#har').text() === 'Read More') {
    $('#har').text('Read Less');
    $('#mit').css('display', 'block');
  }
  else {
    $('#har').text('Read More');
    $('#mit').css('display', 'none');
  }

})
// form contact
function sendmail(){
  let parms={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("msg").value,

  }
  emailjs.send("service_hmpfay4","template_buskaei",parms),then(alert("emailsend"))
}