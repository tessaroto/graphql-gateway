const axios = require("axios")
const config = require("../../config/endpoint")
const { HttpLogger } = require("../../utils/")

class CatalogHttpClient {

  static getHttp(){
  	if (!this.http) {
      this.http = axios.create(config["catalog"]);
      HttpLogger.configure(this.http);
    }
		return this.http;
  }
}

module.exports = CatalogHttpClient.getHttp();