// import the whole data
const data = require("./data.json");

// exports
module.exports = {
  all: data,
  /**
   * @description get list of searched icons style
   * @param {string} style
   * @returns Array[Objects]
   */
  iconsListByStyle(style) {
    return data.filter((ic) => ic.styles.includes(style));
  },
  /**
   * @description get list of searched icons
   * @param {string} value
   * @returns Array[Objects]
   */
  search(value) {
    return data.filter((ic) => ic.search.includes(value));
  },
};
