/**
 * Recebe string '200.00,30' retorna number: '20000.30'
 */

export default function coinToNumber(coin: string): number | null {
  const numero = Number(coin.replaceAll('.', '').replace(',', '.'))

  return isNaN(numero)? null : numero
}
