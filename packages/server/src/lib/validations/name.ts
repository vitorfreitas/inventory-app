export default function nameIsValid(name: string) {
  return name.trim().split(' ').length > 1
}
