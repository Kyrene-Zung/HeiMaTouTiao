import { showToast } from 'vant'
import 'vant/es/toast/style'

export const $baseToast = (text = '', icon = '', position = 'middle') => {
  showToast({
    message: text,
    icon: icon,
    position: position,
  })
}
