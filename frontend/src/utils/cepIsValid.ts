export function cepIsValid(cep: string) {
  return Number(cep) && cep.length === 8
}
