export async function queryGetHealthProfessionalAccount(api, accountId) {
  const res = await api.query.healthProfessional.healthProfessionals(
    accountId
  )
  return res.toHuman()
}

export async function queryProgessionalHealthMinimumStakeAmount(api) {
  const res = await api.query.healthProfessional.minimumStakeAmount()
  return res.toHuman()
}
