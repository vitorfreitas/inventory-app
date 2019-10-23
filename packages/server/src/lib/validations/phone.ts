export default function phoneIsValid(fullPhone: string) {
  const phone = fullPhone.substr(2)
  const DEFAULT_LENGTH = 11

  const invalidNumbers = [
    '900000000',
    '911111111',
    '922222222',
    '933333333',
    '944444444',
    '955555555',
    '966666666',
    '977777777',
    '988888888',
    '999999999',
    '987654321',
    '989898989'
  ]

  if (fullPhone.length === DEFAULT_LENGTH && parseInt(phone[0], 10) === 9) {
    return !invalidNumbers.includes(phone)
  }

  return false
}
