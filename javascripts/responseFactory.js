;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
      console.log("complete object",responseData);
      this.responseURL = responseData.config.url;
      console.log("responseURL",responseData.config.url)
      this.method = responseData.config.method;
      console.log("method", responseData.config.method);
    };

    return Response;
  });
})();
