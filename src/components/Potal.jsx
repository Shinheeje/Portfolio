import { createPortal } from 'react-dom'
import Why from './Why'

const Potal = (props) => {
  const modalRoot = document.getElementById('modal')
  return createPortal(<Why {...props} />, modalRoot)
}

export default Potal