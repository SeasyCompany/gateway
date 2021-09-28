import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { errorHandler } from '@vmotta8/price-comparison'
import { SearchUsecase } from '../../usecases'
import { searchValidator } from '../../validators'
import { cache } from '..'

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
