({
	buttonPress : function(component, event, helper) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + component.get('v.address');
        if(!$A.util.isUndefined(component.get('v.apikey'))){
            url += '&key=' + component.get('v.apikey');
        }
        helper.makeAjaxRequest(component, url);
    }
})