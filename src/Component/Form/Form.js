import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormComp({formSubC}) {
const { register, handleSubmit, formState: { errors }, reset } = useForm();


const onSubmit=(data) => {
  data.id= Date.now().toFixed(3);
  data.fav=false;
  formSubC(data);
  reset();
}
//console.log(errors);


  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
     <div>
      <label htmlFor="">enter the name</label>
      <input autoComplete ='nope' type="text" pattern="[a-z A-Z]+" {...register("name", {required: 'name required' })} />
      {errors.name && (
      <small>{errors.name.message}</small>
      )}
     </div>
     <div>
      <label htmlFor="">enter the email</label>
      <input autoComplete ='nope' type="email" {...register("email", {required: 'email required',pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "Invalid email address",} })} />
      {errors.email && (
        <small>{errors.email.message}</small>
      )}
     </div>
     <div>
      <label htmlFor="">Mobile Number</label>
      <input autoComplete ='nope' type="phone" {...register("phone", {required: 'phone required',pattern: {value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,message: "Invalid phone no",} })} />
      {errors.phone && (
        <small>{errors.phone.message}</small>
      )}
     </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComp;
