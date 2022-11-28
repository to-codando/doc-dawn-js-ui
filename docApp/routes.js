import { routerFactory } from 'lemejs'

import { appWrapper } from './appWrapper.js'

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/tutorials\/$/,
  component: appWrapper,
  isInitial: true
})

// router.add({
//   hash: 'not-found',
//   validator: /^#\/not-found$/,
//   component: appNotFound,
//   isDefault: true
// })

export { router }