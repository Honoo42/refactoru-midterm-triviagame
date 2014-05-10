$(document).on('ready', function() {
	$(function(){
		var iosocket = io.connect();
		var date = new Date().toLocaleTimeString();
			 
			iosocket.on('connect', function () {
			$('#incomingChatMessages').append($('<li>Connected</li>'));
			 
				iosocket.on('message', function(message) {
					$('#incomingChatMessages').append($('<li></li>').text("Your friend sent a message at "+date+": "+message));
				});

				iosocket.on('disconnect', function() {
					$('#incomingChatMessages').append('<li>Disconnected</li>');
				});
			});

			$('#outgoingChatMessage').keypress(function(event) {
				if(event.which == 13) {
					event.preventDefault();
					iosocket.send($('#outgoingChatMessage').val());
					$('#incomingChatMessages').append($('<li></li>').text("You sent at "+date+": "+$('#outgoingChatMessage').val()));
					$('#outgoingChatMessage').val('');
				}
			});
	});
});