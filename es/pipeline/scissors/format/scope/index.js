export default (function (container, types) {
  return function (folder) {
    if (!container[folder]) {
      container[folder] = types.map(function (matched) {
        return matched.build();
      });
    }
    return container[folder];
  };
});