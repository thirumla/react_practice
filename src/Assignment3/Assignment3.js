import { useForm } from 'react-hook-form';

function FormValidation(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      return (
        <>
  <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        paddingLeft:"40px",
      }}>
        <h3>Form validations using react-hook-form  library</h3>
        <hr/>


        <fieldset>
          <legend>User Form</legend>
          <form onSubmit={handleSubmit((data)=>console.log())}>
          Owner Name  :  <input {...register('ownerName',{required:true})}/>
          {errors.ownerName && <span className='error'>Owner name is required.</span>}
          <br/><br/>
		  Contact Number  :  <input {...register('contactNo',{ pattern: /\d+/ })}/>
          {errors.contactNo && <span className='error'>Contact name is required.</span>}
          <br/><br/>
		  Vehicle Model :   <input {...register('vehicalModel',{required:true})}/>
          {errors.vehicalModel && <span className='error'>Owner name is required.</span>}
          <br/><br/>
		  Registration Number  :    <input {...register('registrationNo',{required:true})}/>
          {errors.registrationNo && <span className='error'>Owner name is required.</span>}
          <br/><br/>
		  Vehicle Color  :      <input {...register('vehicalColor',{required:true})}/> 
          {errors.vehicalColor && <span className='error'>Owner name is required.</span>}
          <br/><br/>
          <input type="submit" />
          </form>
          </fieldset>
          </div>
          </>
          )
}

export default FormValidation;