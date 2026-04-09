// Mimics lodash API surface
module.exports = {
  isEmpty: (val) => !val,
  isArray: Array.isArray,
  get: (obj, path, def) => {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
      result = result?.[key];
    }
    return result ?? def;
  }
};
