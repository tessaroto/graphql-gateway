const Http = require("./http-client")

class Sku {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Sku();
    return this.instance;
  }

  async findById(id) {
    let response = await Http.get('/skus/' + id);
    return response.data;
  }

  async findAll({ page, pageSize, name }) {

    let params = {
      params: {
        page: page,
        page_size: pageSize,
        order: sort,
        name: name
      }
    }

    let response = await Http.get('/skus', params);
    return response.data.sku;
  }

}

module.exports = Sku;