//setInterval(function(){	if(new Date().toLocaleString().indexOf('6/3/2013 8:00:00 PM')===0) { $('.chatSend')[0].click() }},1000);

sendMessage = (message) => {
	$('.edit_area').html(message);
	$(".edit_area").trigger($.Event("keydown", { keyCode: 13,ctrlKey: true}));
	//$(".edit_area").trigger($.Event("keydown", { keyCode: 32,ctrlKey: false}));
	$(".btn_send").trigger("click")
	}

//answer if new message
autoAnswer = () => {
if(!!$('#J_NavChatScrollBody > div > div:nth-child(2) .avatar .icon').length) {
	$('#J_NavChatScrollBody > div > div:nth-child(2) > div').trigger('click')
	nickname = $('#J_NavChatScrollBody > div > div:nth-child(2) > div > .info > .nickname > span').text()
	answer = "嗨" + nickname + "，本回复是自动生成的~"
	sendMessage(answer)
	$('#J_NavChatScrollBody > div > div:nth-child(3) > div').trigger('click')
	}
}
sh = setInterval(autoAnswer,100)
