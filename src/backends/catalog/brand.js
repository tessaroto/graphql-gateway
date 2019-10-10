const Http = require("./http-client")

class Brand {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Brand();
    return this.instance;
  }

  async findById(id) {
    let response = await Http.get('/brands/' + id);
    return response.data;
  }

  async findAll({ page, pageSize, sort, name }) {

    let params = {
      params: {
        page: page,
        page_size: pageSize,
        order: sort,
        name: name
      }
    }

    let response = await Http.get('/ws/brands', params);
    return response.data.brands;
  }
}

module.exports = Brand;