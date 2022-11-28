import { dawnJS } from 'dawn-js-core'
import { appInput } from "dawn-js-ui"

window.onhashchange = () => {
  initRouter()
}

window.addEventListener('DOMContentLoaded', () => {
  initRouter()
})


const initRouter = () => {
  const hash = window.location.hash

  switch (hash) {
    case '#/tutorials/':
      loadPage(tutorialsPage)
      break;
    default:
      console.log('nada a fazer')
  }

}

const tutorialsPage = () => {


  appInput.register('ds-name', document.body)
  appInput.props.set({ label: 'Nome'})
  appInput.init()

  appInput.state.on( payload => {
    appInput.props.set({ label: payload.value })
  })


}

const loadPage = (callback) => {
  setTimeout(() => callback(), 1000)
}


