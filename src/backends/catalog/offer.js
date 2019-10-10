const Http = require("./http-client")

class Offer {

  static getInstance() {
    if (!this.instance) 
      this.instance = new Offer();
    return this.instance;
  }

  async findById(id) {
    let response = await Http.get('/offers/' + id);
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

    let response = await Http.get('/offers', params);
    return response.data.offer;
  }
}

module.exports = Offer;