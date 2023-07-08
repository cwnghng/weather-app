const { REACT_APP_ENVIRONMENT } = process.env

export const handleResponseError = (e: any) => {
  if (REACT_APP_ENVIRONMENT !== 'production') console.log(e)

  throw new Error(e.message)
}
