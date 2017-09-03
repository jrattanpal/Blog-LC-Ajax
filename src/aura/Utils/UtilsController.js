({
    callAjax : function(component, event, helper) {
        //Creaet new request
        var xmlhttp = new XMLHttpRequest();
        //Handle response when complete
        xmlhttp.onreadystatechange = function(component) {
            if (xmlhttp.readyState == 4 ) {
                console.log('xmlhttp: ' + xmlhttp);
                params.callbackMethod.call(this, xmlhttp);
            }
        };

        var params = event.getParam('arguments');
        if (params) {
            console.log('params:', params);
            //Set parameters for the request
            xmlhttp.open(params.method, params.url, params.async);
            //Send the request
            xmlhttp.send();
        }
    }
})