
import React from 'react'
import Schema from "async-validator"

class FormStore {
  constructor() {
    this.state = {}
    this.fieldList = []
    this.callbacks = {}
  }

  registerField = (field) => {
    this.fieldList.push(field)
  }

  unRegisterField = (field) => {
    this.fieldList.filter(val => val !== field)
    delete this.state[field.props.name]
  }

  getFieldValue = (name) => {
    return this.state[name]
  }

  setFieldsValue = (data) => {
    this.state = {
      ...this.state,
      ...data
    }
    // 更新组件
    this.fieldList.forEach(field => {
      Object.keys(data).forEach(key => {
        field.props.name === key && field.onStoreChange()
      })
    })
  }

  getFieldsValue = () => {
    return { ...this.state }
  }

  setCallbacks = (callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks
    }
  }

  isEmpty = (val) => {
    return val === undefined || val === ''
  }

  validate = () => {
    let err = []

    this.fieldList.forEach(field => {
      const { rules = [], name } = field.props

      // 校验描述对象
      const descriptor = { [name]: rules };
      // 获取校验值
      const value = this.getFieldValue(name)
      // 创建校验器
      const schema = new Schema(descriptor);

      schema.validate({ [name]: value }, errors => {
        errors && err.push(...errors)
      })
    })
    return err
  }

  submit = () => {
    const err = this.validate()
    const { onFinishFailed, onFinish } = this.callbacks
    if (err.length > 0) {
      onFinishFailed(err, this.getFieldsValue())
    } else {
      onFinish(this.getFieldsValue())
    }
  }



  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      getFieldsValue: this.getFieldsValue,
      registerField: this.registerField,
      unRegisterField: this.unRegisterField,
      setCallbacks: this.setCallbacks,
      submit: this.submit,
    }
  }
}


export default function useForm(form) {
  const formRef = React.createRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}