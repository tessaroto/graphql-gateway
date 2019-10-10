
class HttpLogger{

	static configure(http) {
  	http.interceptors.request.use(function (config) {
		  config.metadata = { startTime: new Date()}
		  return config;
		}, function (error) {
		  return Promise.reject(error);
		});

		http.interceptors.response.use(function (response) {

		  response.config.metadata.endTime = new Date()
		  response.duration = response.config.metadata.endTime - response.config.metadata.startTime
		  var startTimeMs = response.config.metadata.startTime.getTime();
		  var endTimeMs = response.config.metadata.endTime.getTime();
		  console.log(`start: ${startTimeMs} end: ${endTimeMs} request: ${response.config.url}, duration: ${response.duration}ms`);
		  return response;
		}, function (error) {
		  error.config.metadata.endTime = new Date();
		  error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
		 	var startTimeMs = error.config.metadata.startTime.getTime();
		  var endTimeMs = error.config.metadata.endTime.getTime();
		  console.log(`start: ${startTimeMs} end: ${endTimeMs} request error: ${error.config.url}, duration: ${error.duration}ms`);
		  console.log(error )
		  return Promise.reject(error);
		});

  }

}
module.exports = { HttpLogger } 