import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { errorHandler } from '@seasy/package'
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
  } catch (e: any) {
    const error = errorHandler.format(e)
    console.log(error)
    return error
  }
}
