import { isPresent } from '../utils/StringUtils'

export interface User {
  id: number,
  name: string | null
  age: number | null
  departmentId: number | null
}

export function validateUser(user?: User) {
  return user && user.id && isPresent(user.name) && user.age && user.departmentId
}
export function generateEmptyUser(): User {
  return {
    id: 0,
    name: '',
    age: null,
    departmentId: null,
  }
}
