$.get('content.html').then(function(responseData) {  
	console.log(responseData);
	$('<div id="toolbar" style="height: 40px; width: 100%; position: relative; display: block; background-color: #333333; color: #FAFAFA;">' + responseData + '</div>').prependTo('body');
});
