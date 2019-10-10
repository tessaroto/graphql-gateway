
const { Category } = require("../../backends/catalog")

exports.resolver = {
    Query: {
        async getCategory(parent, { id }, context, info) {
          return await Category.getInstance().findById(id);
        },
    },

    Category: {

        async parent(category) {
          if (!category.parentId) return null;
          return await Category.getInstance().findById(category.parentId);
        },

    }
}
