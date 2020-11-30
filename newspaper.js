var database = firebase.database();


function Write(title, author, text, time, part) {
  str = '<div class="box1"><div style="padding:10px 20px"><h2 id="title">'+ title +'</h2><br><br><br><span id="text">' + text +'</span><h5><b id="date">' + time + '</b><br><span id="name" style="font-size:25px">' + author + '</span></h5></div></div>';
  $('#HereToAdd').append(str);
}

firebase.database().ref('NEWS' + '/').once('value').then(function(snapshot) {
  $.each(snapshot.val(), function(key, value) {
    Write(value["TITLE"], value["AUTHOR"], value["TEXT"], value["TIME"], value["PART"])
  });
});


$('.but').on('click', function() {
  location. href="SUBMIT/submit.html";
});
