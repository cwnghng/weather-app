const { REACT_APP_ENVIRONMENT } = process.env

export const handleResponseError = (e: any): Error => {
  if (REACT_APP_ENVIRONMENT !== 'production') console.log(e)

  return new Error(e.message)
}
