//setInterval(function(){	if(new Date().toLocaleString().indexOf('6/3/2013 8:00:00 PM')===0) { $('.chatSend')[0].click() }},1000);

//simulate keyboard key press and send message
sendMessage = (message) => {
	$('.edit_area').html(message);
	$(".edit_area").trigger($.Event("keydown", { keyCode: 13,ctrlKey: true}));
	//$(".edit_area").trigger($.Event("keydown", { keyCode: 32,ctrlKey: false}));
	$(".btn_send").trigger("click")
	}

//answer if new message
autoAnswer = (params) => {
	var {nickname,content,answer} = params
	for(let i=0;i<10;i++) {
		new_digest[i] = $(`#J_NavChatScrollBody > div > div:nth-child(${i}) > div > .info > .ng-scope > .ng-binding`).text()
		if(old_digest.length > 0 && new_digest[i] != old_digest[i]) {
			nickn = $(`#J_NavChatScrollBody > div > div:nth-child(${i}) > div > .info > .nickname > span`).text()
			message = new_digest[i]
			if(nickn == nickname && message.search(content)>-1) {
				$(`#J_NavChatScrollBody > div > div:nth-child(${i}) > div`).trigger('click')
				console.log('sent')
				sendMessage(answer)
				clearInterval(sh)
				break
			}
		}
		old_digest[i] = new_digest[i]
	}
}

params = {
	nickname: "晚上吃辣",
	content: "点饭",
	answer: "+1"
}

let old_digest = []
let new_digest = []

sh = setInterval(()=>autoAnswer(params),100)

