import { StatusCodes } from 'http-status-codes'
import { boardService } from './../services/boardService.js'
const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)

    //Điều hướng dữ liệu sang tầng service
    const createBoard = await boardService.createNew(req.body)

    //Có kết quả thì trả về phí client
    // res
    //   .status(StatusCodes.CREATED)
    //   .json({ message: 'POST from Controller: API create new board' })

    res
      .status(StatusCodes.CREATED)
      .json(createBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}
