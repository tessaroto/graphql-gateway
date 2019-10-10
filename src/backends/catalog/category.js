const Http = require("./http-client")

class Category {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Category();
    return this.instance;
  }

  async findById(id) {
    let response = await Http.get('/categories/' + id);
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

    let response = await Http.get('/ws/categories', params);
    return response.data.categories;
  }
}

module.exports = Category;