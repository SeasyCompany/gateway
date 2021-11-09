import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { HelloUsecase } from '../usecases'
import { errorHandler } from '@seasy/package'

export async function handler (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const usecase = new HelloUsecase()
    const result = usecase.execute()
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        result: result,
        event: event
      })
    }
    return response
  } catch (e: any) {
    const error = errorHandler.format(e)
    console.log(error)
    return error
  }
}
