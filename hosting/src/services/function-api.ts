import firebaseUtils from './firebase-util'

class FunctionApi {
  async loadCompanies(userId: string) {
    const response = await firebaseUtils.function('usersMe', { userId })
    return response.data.user.companies
  }

  async postDeal(userId: string, companyId: string, params: any) {
    const response = await firebaseUtils.function('postDeal', {
      userId,
      companyId,
      params
    })
    return response.data
  }
}

export const FunctionAPI = new FunctionApi()
