$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    Ip = data;
})

function write(TI, AU, TE, PA, Ip, DA) {
  firebase.database().ref('NEWS/').push({
    TITLE: TI,
    AUTHOR: AU,
    TEXT : TE,
    PART: PA,
    IP : Ip,
    DATE:DA
  });


}

let t = new Date();
str = t.getFullYear() + '-' + t.getMonth() + '-' + t. getDate();
$('#date').text(str);

$('#SUB').on('click', function() {
  var a = $('#TITLE').val();
  var b = $('#TEXT').val();
  var c = $('#AUTHOR').val();
  var d = $('#PART').val();
  var e = Ip;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
if (a == '' || b == '' || c == '' || d == '' || e == '') {
  alert("비어있는 칸 없이 모두 입력해주세요.");
  return;
}
write(a, c, b, d, e, str);
alert("신문등록 완료!");
$('#TITLE').val('');
$('#TEXT').val('');
$('#AUTHOR').val('');
$('#PART').val('');
});


$('#RETURN').on('click', function() {
  location. href="../index.html";
});
