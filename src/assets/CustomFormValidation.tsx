import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
type FormValues = {
 username:string,
 email:string,
 channel:string
}
const CustomFormValidation = () => {
  const { register,control, handleSubmit, formState } = useForm<FormValues>()
const {errors} = formState
  const onSubmit = (data:FormValues)=>{
console.log(data);

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          {' '}
          <label htmlFor='username'>username</label>
          <input
            type='text'
            id='username'
            {...register('username', {
              required: {
                value: true,
                message: 'username is required',
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: {
                value: true,
                message: 'email is required',
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email format',
              },
              validate:{
               notAdmin:(fieldValue)=>{
               return (
                fieldValue !=='freelancersami16203@gmail.com' || "Enter a different email address"
               )
              },
             notBlackListed: (fieldValue) =>{
              return (
               !fieldValue.endsWith('baddomain.com') || "This domain is not supported"
              )
             }
             }
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>channel</label>
          <input type='text' id='channel' {...register('channel',{
           required:'channel is required'
          })} />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default CustomFormValidation
