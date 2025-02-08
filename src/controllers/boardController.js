import { StatusCodes } from 'http-status-codes'
const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'POST from Controller: API create new board' })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}
