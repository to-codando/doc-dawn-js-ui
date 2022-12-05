import { input } from 'dawn-js-ui'

export const tutorialsPage = () => {


  appInput.register('ds-name', document.body)
  appInput.props.set({ label: 'Nome'})
  appInput.init()

  appInput.state.on( payload => {
    appInput.props.set({ label: payload.value })
  })


}