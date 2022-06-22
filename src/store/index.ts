import { reactive } from 'vue'
import { User } from '../models/User'

const defaultUsers: User[] =
  Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    age: i + 10,
    departmentId: (i % 4) + 1,
  }))

export const store = reactive({
  users: defaultUsers
})
