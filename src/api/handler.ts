const { REACT_APP_ENVIRONMENT } = process.env

const LOGGING_ENVIRONMENTS = ['debug', 'local', 'staging']

export const handleResponseError = (e: any) => {
  if (
    REACT_APP_ENVIRONMENT &&
    LOGGING_ENVIRONMENTS.includes(REACT_APP_ENVIRONMENT)
  )
    console.log(e)

  throw new Error(e.message)
}
