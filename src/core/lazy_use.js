/*
 * @Name: 组件引用
 */

import {
  Empty,
  CellGroup,
  Cell,
  Field,
  RadioGroup,
  Radio,
  Button,
  Icon,
  Popup,
  Area,
  Toast,
  DatetimePicker,
  Picker
} from 'vant'

const components = {
  install: app => {
    app.use(Empty)
    app.use(CellGroup)
    app.use(Cell)
    app.use(Field)
    app.use(RadioGroup)
    app.use(Radio)
    app.use(Button)
    app.use(Icon)
    app.use(Popup)
    app.use(Area)
    app.use(DatetimePicker)
    app.use(Picker)

    app.config.globalProperties.$toast = Toast
  }
}

export default components
