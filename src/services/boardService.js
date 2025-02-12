/* eslint-disable no-useless-catch */
import { boardModel } from '../models/boardModel.js'
import { slugify } from '../utils/formatters.js'
const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    //Gọi tới tầng model để lưu bản ghi vào trong Database
    const createdBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}
