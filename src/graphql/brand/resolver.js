
const { Brand } = require("../../backends/catalog")

exports.resolver = {
    Query: {
        async getBrand(parent, { id }, context, info) {
          return await Brand.getInstance().findById(id);
        },
    },

}
