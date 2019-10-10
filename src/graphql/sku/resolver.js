
const { Sku, Product } = require("../../backends/catalog")

exports.resolver = {
    Query: {
        async getSku(parent, { id }, context, info) {
          return await Sku.getInstance().findById(id);
        },
    },

    Sku: {
        async product(sku) {
          if (!sku.productId) return null;
          return await Product.getInstance().findById(sku.productId);
        },

    }
}
