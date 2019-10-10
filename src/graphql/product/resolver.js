
const { Product, Brand } = require("../../backends/catalog")

exports.resolver = {
    Query: {
        async getAllProducts(parent, params, context, info) {
          return await Product.getInstance().findAll(params);
        },

        async getProduct(parent, { id }, context, info) {
          return await Product.getInstance().findById(id);
        },
    },

    Product: {
        async brand(product) {
          if (!product.brandId) return null;
          return await Brand.getInstance().findById(product.brandId);
        },

    }
}
