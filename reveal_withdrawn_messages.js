sendMessage = (message) => {
	$('.edit_area').empty()
	$('.edit_area').html(message);
	//PC and Linux key
	//$(".edit_area").trigger($.Event("keydown", { keyCode: 13,ctrlKey: true}));
	//Mac key
	$(".edit_area").trigger($.Event("keydown", { keyCode: 13,metaKey: true}));
	$(".btn_send").trigger("click")
	}

Reset = () => {
	clearInterval(inter);
	lastMessageNickname = 'default'
	lastMessageText = 'default'
	timesCalled=0
}

RevealRecalled = () => {
	//If new message notification detected, click on the conversation thread
	if(!!$('#J_NavChatScrollBody > div > div:nth-child(2) .avatar .icon').length) {
		$('#J_NavChatScrollBody > div > div:nth-child(2) > div').trigger('click')
	}
	//get last message
	lastMessage = $('div[mm-repeat="message in chatContent"] > div[ng-repeat]:eq(-1)')

	//recognize deleted message
	systemMessage = lastMessage.find('p.message_system').text()
	if(!!systemMessage.match("撤回了一条消息|withdrew a message")) {
		if(timesCalled == 0) {
			//display saved message
			now = new Date().toLocaleString('zh-Hans-CN', {'hour12':false})
			sendMessage(now + "，" + lastMessageNickname + "撤回了此条消息：\n“" + lastMessageText + "”")
			console.log('deleted message :\n' + lastMessageText)
			timesCalled = timesCalled+1
		}
	}

	else {
		//Save last message in a variable
		lastMessageText = $('div[mm-repeat="message in chatContent"] > div[ng-repeat]:eq(-1) > * > * > * > .content .js_message_plain').text()
		lastMessageNickname = $('div[mm-repeat="message in chatContent"] > div[ng-repeat]:eq(-1) > * > * > * > .avatar').attr('title')
		//lastMessageText = lastMessage.find(' > * > * > * > .content .js_message_plain').text()
		timesCalled = 0
	}
}

inter = setInterval(RevealRecalled,100)
clearInterval(inter);

//delete \n  : keydown may produce <br> in html instead of text box  OK
//if own message : don't reveal
//add audio message support
//Infinite loop problem



