// import { dawnJS } from "dawn-js-core";
// import * as dawnJsCoreIndex from "dawn-js-core/index.js";
// import * as dawnJsUi from "dawn-js-ui";
import {avatar} from "dawn-js-ui";

export const avatarComponentPage = () => {
  const element = document.querySelector('body')

  const dsAvatar1 = avatar()
  dsAvatar1.register('ds-avatar-1', element)
  dsAvatar1.props.set({ 
    size: 1,
  })
  dsAvatar1.init()

  const dsAvatar2 = avatar()
  dsAvatar2.register('ds-avatar-2', element)
  dsAvatar2.props.set({ 
    size: 2,
  })
  dsAvatar2.init()

  const dsAvatar3 = avatar()
  dsAvatar3.register('ds-avatar-3', element)
  dsAvatar3.props.set({ 
    size: 3,
  })
  dsAvatar3.init()

  const dsAvatar4 = avatar()
  dsAvatar4.register('ds-avatar-4', element)
  dsAvatar4.props.set({ 
    size: 4,
  })
  dsAvatar4.init()


  const dsAvatar5 = avatar()
  dsAvatar5.register('ds-avatar-5', element)
  dsAvatar5.props.set({ 
    size: 5,
    style: 'square'
  })
  dsAvatar5.init()

  const dsAvatar6 = avatar()
  dsAvatar6.register('ds-avatar-6', element)
  dsAvatar6.props.set({ 
    size: 6,
    style: 'square'
  })
  dsAvatar6.init()

  const dsAvatar7 = avatar()
  dsAvatar7.register('ds-avatar-7', element)
  dsAvatar7.props.set({ 
    size: 1,
    img: {alt: 'Eu mesmo', src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw'},
    note: { status: 'warning', position:'bottom-right'},
  })
  dsAvatar7.init()

  const dsAvatar8 = avatar()
  dsAvatar8.register('ds-avatar-8', element)
  dsAvatar8.props.set({ 
    size: 2,
    img: {alt: 'Eu mesmo', src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw'},
    note: { status: 'warning', position:'bottom-right'}
  })
  dsAvatar8.init()

  const dsAvatar9 = avatar()
  dsAvatar9.register('ds-avatar-9', element)
  dsAvatar9.props.set({ 
    size: 3,
    style: 'square',
    img: {alt: 'Eu mesmo', src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw'},
    note: { status: 'success', position:'bottom-right'}
  })
  dsAvatar9.init()

  const dsAvatar10 = avatar()
  dsAvatar10.register('ds-avatar-10', element)
  dsAvatar10.props.set({ 
    size: 4,
    style: 'square',
    img: {alt: 'Eu mesmo', src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw'},
    note: { status: 'success', position:'bottom-right'}
  })
  dsAvatar10.init()

  const dsAvatar11 = avatar()
  dsAvatar11.register('ds-avatar-11', element)
  dsAvatar11.props.set({ 
    size: 5,
    img: {alt: 'Eu mesmo', src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw'},
    note: { status: 'danger', position:'bottom-right'}
  })
  dsAvatar11.init()

  const dsAvatar12 = avatar()
  dsAvatar12.register('ds-avatar-12', element)
  dsAvatar12.props.set({ 
    size: 6,
    img: {alt: 'Eu mesmo', src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw'},
    note: { status: 'danger', position:'bottom-right'}
  })
  dsAvatar12.init()
}