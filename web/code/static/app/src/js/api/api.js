

var $ = require('jquery');

var Api = {
	urls: {
		about: '/api/content/list/AboutCompany/',
        projects: '/api/content/list/WorkItem/',
		news: '/api/content/list/News/',
        events: '/api/content/list/Event/',
        gallery: '/api/content/list/GaleryItem/',
        partner: '/api/content/list/Partner/'
	},
	// getRequest: function (url, data, success, error) {
	// 	$.ajax({
	// 		url: url,
	// 		data: data,
	// 		type: 'POST',
	// 		success: function(data) {
     //            success(data);
	//         }.bind(this),
	//         error: function(xhr, status, err) {
	//             error(err);
	//             console.error(err);
	//         }.bind(this)
	// 	});
	// },
	getRequestHeaders: function (params ,url, success, error) {
		$.ajax({
			url: url,
            type: 'GET',
			success: function(data) {
				console.log('ajax', data);
            	success(params ,data);
	        }.bind(this),
	        error: function(xhr, status, err) {
	            // error(err);
	            console.error(err);
	        }.bind(this)
		});
	},
	getData: function (success, error) {
        this.getRequestHeaders('about', this.urls.about, success,error);
        this.getRequestHeaders('projects', this.urls.projects, success,error);
        this.getRequestHeaders('news', this.urls.news, success,error);
        this.getRequestHeaders('events' ,this.urls.events, success,error);
        this.getRequestHeaders('gallery' ,this.urls.gallery, success,error);
        this.getRequestHeaders('partner' ,this.urls.partner, success,error);
	}
};
export default Api;
          



