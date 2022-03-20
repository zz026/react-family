import React, { Component } from 'react'
import FieldContext from './FieldContext'

class Field extends Component {
  static contextType = FieldContext

  componentDidMount() {
    this.context.registerField(this)
  }

  componentWillUnmount () {
    this.context.unRegisterField(this)
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const { name } = this.props
    const { getFieldValue, setFieldsValue } = this.context
    return {
      value: getFieldValue(name),
      onChange: e => {
        setFieldsValue({
          [name]: e.target.value
        })
      }
    }
  }

  render() {
    const { children } = this.props
    console.log('render')
    return React.cloneElement(children, this.getControlled())
  }
}

export default Field  