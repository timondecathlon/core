







function getFormUrl() {
    return event.target.closest('form').action;
}

function disableForm() {
    event.preventDefault();
}


function getFormElements() {

    let params = [];
    let form = event.target.closest('form');
    for(let i = 0; i < form.elements.length; i++){
        if(form.elements[i].name){
            if((form.elements[i].type === 'checkbox' || form.elements[i].type === 'radio') && !form.elements[i].checked) continue;
            params.push(form.elements[i].name + '=' + form.elements[i].value);
        }
    }
    return params;
}

function saveFormAsync() {
    sendAjaxRequestPost(getFormUrl(),getFormElements());
}

function sendFormAsync() {
    disableForm();
    saveFormAsync();
}



function sendAjaxRequestPost(url,params){
	
		$.ajax({
			url: url,
			type: "POST",
			data: params.join('&'),
			cache: false, 
			success: function(response){
				  if(response == null){  // смотрим ответ от сервера и выполняем соответствующее действие
					 //alert("не зашло");
				  }else{
					 //alert(response);
					 return response;
				  }  
			}
		});

}























	
	
