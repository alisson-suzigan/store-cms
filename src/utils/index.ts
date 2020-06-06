// Convert value to BR money
export const convertValueToMoney = (value: number): string => {
  const [ints, cents = ''] = value.toString().split('.');
  return `R$ ${ints},${cents.padEnd(2, '0')}`;
};
