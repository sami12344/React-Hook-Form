import { useForm } from 'react-hook-form'
type FormValues = {
  username: string
  email: string
  channel: string
}

const ValidateForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>()
  const { errors } = formState
  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='name'
            {...register('username', {
              required: 'username is required',
            })}
          />
          <p className='error'>{errors.username?.message}</p>
        </div>
        <div className='form-control'>
          {' '}
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            {...register('email', {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email format',
              },
            })}
          />
          <p className='error'>{errors.email?.message}</p>
        </div>
        <div className='form-control'>
          {' '}
          <label htmlFor='channel'>channel</label>
          <input
            type='text'
            id='channel'
            {...register('channel', {
              required: 'channel name is required',
            })}
          />
          <p className='error'>{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ValidateForm
