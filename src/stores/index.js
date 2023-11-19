import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
export * from './modules/user'
// export * from './modules/counter'

// 与下面的写法一个意思
// import { useUserStore } from './modules/user'
// export { useUserStore }
// import { useCountStore } from './modules/counter'
// export { useCountStore }
