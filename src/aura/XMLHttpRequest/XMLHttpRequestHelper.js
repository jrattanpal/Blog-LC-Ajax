({
	makeAjaxRequest : function(component, url) {
        var utils = component.find('utils');
        
        console.log('Calling Ajax);')
        utils.callAjax("POST", url, true,
                	    function(xmlhttp){
                            console.log('xmlhttp:', xmlhttp);
                            if (xmlhttp.status == 200) {
                                component.set('v.msg', xmlhttp.responseText);
                                component.set('v.msgSeverity', 'information');
                                component.set('v.msgTitle', 'Success');
                            }
                            else if (xmlhttp.status == 400) {
                                component.set('v.msg', 'There was an error 400');
                                component.set('v.msgSeverity', 'error');
                                component.set('v.msgTitle', 'Error');
                            }else {
                                component.set('v.msg', 'Something else other than 200 was returned');
                                component.set('v.msgSeverity', 'error');
                                component.set('v.msgTitle', 'Error');
                            }
                        }
                      );
    }
})