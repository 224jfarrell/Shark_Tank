function redirect(){
    window.location.href = 'home.html'
}

function modal() {
    $(document).ready(function(){
        $("#exampleModal").modal('show');
    });
};
setTimeout(modal, 2000);
var newText = Math.floor(Math.random()*1000000000000000);
$('#discount-code').html(newText)