const Http = require("./http-client")

class Product {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Product();
    return this.instance;
  }

  async findById(id) {
    let response = await Http.get('/products/' + id);
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

    let response = await Http.get('/products', params);
    return response.data.products;
  }
}

module.exports = Product;