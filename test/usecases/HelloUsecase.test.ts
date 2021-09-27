import { HelloUsecase } from '../../src/usecases/HelloUsecase'

describe('hello usecase', () => {
  it('should return hello string', () => {
    const usecase = new HelloUsecase()
    const response = usecase.execute()
    expect(response).toBe('Hello Gateway!!')
  })
})
