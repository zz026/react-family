import FieldContext from './FieldContext'
import useForm from './useForm'

const Form = ({ children, form, onFinish, onFinishFailed }) => {
  const [formIntance] = useForm(form)
  
  formIntance.setCallbacks({
    onFinish,
    onFinishFailed
  })

  return <form onSubmit={
    e => {
      e.preventDefault()
      formIntance.submit()
      console.log(1)
    }
  }>
    <FieldContext.Provider value={formIntance}>
      {children}
    </FieldContext.Provider>
  </form>
}

export default Form