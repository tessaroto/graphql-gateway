
const { Offer, Sku } = require("../../backends/catalog")

exports.resolver = {
    Query: {

        async getOffer(parent, { id }, context, info) {
          return await Offer.getInstance().findById(id);
        },
    },

    Offer: {
        async sku(offer) {
          if (!offer.skuId) return null;
          return await Sku.getInstance().findById(offer.skuId);
        },
    }
}
