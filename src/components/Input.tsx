import { Field, ErrorMessage } from "formik"

const Input = (props : any) => {
  return (
    <div className="flex flex-col">
    <label htmlFor={props.control} className={`${props.className} font-primary font-semibold mb-1"`}>{props.children}</label>
    <Field type="text" id={props.control} name={props.control} className="border-2 border-primary h-10 rounded-lg"/>
    <ErrorMessage name={props.control} component="p" className='text-red-500 font-medium'/>
  </div>
  )
}

export default Input