import { Field, ErrorMessage } from "formik";

const Input = (props: any) => {
  return (
    <div className={`flex flex-col ${props.componentClassName}`}>
      <label
        htmlFor={props.control}
        className={`${props.className} font-primary font-semibold mb-1"`}
      >
        {props.children}
      </label>
      <Field
        type="text"
        id={props.control}
        name={props.control}
        className={
          props.fieldClassName
            ? props.fieldClassName
            : "border-2 border-primary h-10 rounded-lg"
        }
      />
      {props.info ? props.info : ''}
      <ErrorMessage
        name={props.control}
        component="p"
        className="text-red-500 font-medium"
      />
    </div>
  );
};

const CheckboxUserTerms = (props: any) => {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="flex gap-2">
      <Field
        type="checkbox"
        id={props.control}
        name={props.control}
        className=""
      />
      <p>
                  Li e aceito os{" "}
                  <a href="" className="font-semibold underline">
                    termos de uso e condições
                  </a>
                </p>
      </div>
      
      <ErrorMessage name={props.control} component="p" className='text-red-500 font-medium'/>
    </div>
  );
};

const Select = (props: any) => {
  const { control, options, className, fieldClassName, info } = props;

  return (
    <div className={`flex flex-col ${props.componentClassName}`}>
      <label
        htmlFor={control}
        className={`${className} font-primary font-semibold`}
      >
        {props.children}
      </label>
      <Field
        as="select"
        id={control}
        name={control}
        className={
          fieldClassName ? fieldClassName : "border-2 border-primary h-10 rounded-lg bg-white"
        }
      >
        {options.map((option : any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      {info ? info : ''}
      <ErrorMessage
        name={control}
        component="p"
        className="text-red-500 font-medium"
      />
    </div>
  );
};


export { Input, CheckboxUserTerms, Select };
