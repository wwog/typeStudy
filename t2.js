let variants = [
  {
    type: 'Size',
    items: ['XL', 'MD', 'SM'],
  },
  {
    type: 'Color',
    items: ['Red', 'Blue'],
  },
  {
    type: 'Material',
    items: ['Plastic', 'Wood', 'Ceramic'],
  },
]
/**
 * todo:TS类型编写
 */
function crossMerge(sourceArr, keyName, valueName, onItem = (item) => item) {
  const _crossMerge = ([first, ...rest], row = {}) => {
    const name = first[keyName]
    const items = first[valueName]
    return [].concat(
      ...items.map((variantItem) => {
        const currRow = { ...row, [name]: variantItem }
        if (rest.length) {
          return _crossMerge(rest, currRow)
        }/*  */
        return currRow
      })
    )
  }
  return _crossMerge(sourceArr)
}

