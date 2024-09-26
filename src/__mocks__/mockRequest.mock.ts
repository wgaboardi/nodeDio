import {Params} from 'express-serve-static-core'
import {Request} from 'express'

/**
 * Creates a mock request object for testing purposes.
 *
 * @param {Object} [params={}] - The parameters to include in the request object.
 * @param {Object} [query={}] - The query parameters to include in the request object.
 * @returns {Object} A mock request object.
 */

export const makeMockRequest = ({params, query}: { params?: Params, query?: Params}): Request => {
  {
    const request = {
      params: params || { },
      query: query || { }
    } as unknown

    return request as Request
  }
}