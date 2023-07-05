import { useForm } from "react-hook-form"
// import {DevTool} from '@hookform/devtools'


// types

type FormValues = {
 username:string,
 email:string,
 channel:string,

}

let renderCount = 0
const Form = () => {
 const form = useForm<FormValues>()
 const {register,control,handleSubmit} = form
renderCount++
const onSubmit = (data: FormValues) => {
  console.log('Form is submitted', data)
}
  return (
    <div>
      <h1>Form {renderCount/2}</h1>

      <form onSubmit={handleSubmit(onSubmit)} >
       <label htmlFor="username">Username</label>
       <input type="text" id="username" {...register('username')}/>

       <label htmlFor="email">email</label>
       <input type="email"  id="email" {...register('email')}/>
       <label htmlFor="channel">Channel</label>
       <input type="text"  id="channel" {...register('channel')} />
       <button>Submit</button>
      </form>
      {/* <DevTool/> */}
    </div>
  )
}
export default Form