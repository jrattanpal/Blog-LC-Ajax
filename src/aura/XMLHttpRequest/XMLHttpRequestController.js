({
	buttonPress : function(component, event, helper) {
	    //Generate URL for request to Google APIs
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + component.get('v.address');

        //Add API key if provided
        if(!$A.util.isUndefined(component.get('v.apikey'))){
            url += '&key=' + component.get('v.apikey');
        }

        //Make Ajax request
        helper.makeAjaxRequest(component, url);
    }
})