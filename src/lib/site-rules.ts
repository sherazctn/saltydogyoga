export const CLASS_POLICIES = {
  matCancellationHours: 2,
  workshopCancellationHours: 24,
  allSalesFinal: true,
} as const;

export const TRAINING = {
  price: 3000,
  deposit: 400,
  depositRefundable: false,
  cardFeePercent: 3.5,
  liveHours: 160,
  recordedHours: 40,
  includedClassPass: 10,
  membershipDiscountPercent: 10,
} as const;