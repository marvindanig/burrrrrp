/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  eat: function(html) {
    return String(html)
      .replace(/&/g, ' ')
      .replace(/"/g, ' ')
      .replace(/'/g, ' ')
      .replace(/</g, ' ')
      .replace(/>/g, ' ');
  }
};