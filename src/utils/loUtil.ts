import _ from 'lodash'

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
