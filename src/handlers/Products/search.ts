import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { errorHandler } from '@vmotta8/price-comparison'
import { SearchUsecase } from '../../usecases/Products/SearchUsecase'
import { searchValidator } from '../../validators/Products/searchValidator'
import { cache } from '../index'

export async function handler (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const payload = searchValidator(event.queryStringParameters)

    const usecase = new SearchUsecase(cache)
    const result = await usecase.execute(payload)
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  } catch (error) {
    return errorHandler.format(error)
  }
}
