var socket = io();
$('#send-message-btn').click(function () {
    var msg = $('#message-box').val();
    var uname = $('#user1').val();
    socket.emit('chat', msg);
    socket.emit('chat', uname);
    $('#messages').append($('<p>').text(msg));
    $('#message-box').val('');
    $('#user1').val('');
    return false;
});
socket.on('chat', function (msg) {
    $('#messages').append($('<p>').text(msg));
});