({
	callAjax : function(component, event, helper) {
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(component) {
            if (xmlhttp.readyState == 4 ) {
                console.log('xmlhttp: ' + xmlhttp);
                params.callbackMethod.call(this, xmlhttp);
            }
        };
        
        var params = event.getParam('arguments');
        if (params) {
            console.log('params:', params);
            xmlhttp.open(params.method, params.url, params.async);
            xmlhttp.send();
        }
	}
})