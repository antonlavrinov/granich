export const multiPropsFilter = (products, filters) => {
  const filterKeys = Object.keys(filters)
  return products.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== "function") {
        // return true;
        if (!filters[key].length) return true
        if (Array.isArray(item[key])) {
          return item[key].some(keyElem => filters[key].includes(keyElem))
        }
        return filters[key].includes(item[key])
      }
      return filters[key](item[key])
    })
  })
}
