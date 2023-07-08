import _ from 'lodash'

/**
 * Removes undefined, null, NaN and empty strings from the object
 *
 * @param {any} obj The object to be cleaned
 * @returns {any} A new object with the empty values removed
 */
export const loOmitEmpty = (obj: any) => {
  return _.omitBy(
    obj,
    (value) => _.isNil(value) || _.isNaN(value) || value === '',
  )
}

const loUtils = {
  loOmitEmpty,
}

export default loUtils
