const slugify = require("slugify");

module.exports = {
  beforeCreate({ params }) {
    const { data } = params;
    data.slug = slugify(data.name, { lower: true });
  },

  beforeUpdate({ params }) {
    const { data } = params;
    data.slug = slugify(data.name, { lower: true });
  },
};
