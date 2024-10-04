import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";

export default function App() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  const onSubmit = (data) => console.log(data);

  // function Input({ control, name }) {
  //   const {
  //     field,
  //     fieldState: { invalid, isTouched, isDirty },
  //     formState: { touchedFields, dirtyFields },
  //   } = useController({ name, control, rules: { required: true } });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true, maxLength: 20 })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
      <input
        {...register("lastName", {
          required: true,
          maxLength: 30,
          pattern: /^[A-Za-z]+$/i,
        })}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors.lastName?.type === "required" && (
        <p role="alert">Last name is required</p>
      )}
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}
      <input
        type="number"
        {...register("age", {
          min: 18,
          max: 99,
          required: "Age is required",
        })}
        aria-invalid={errors.age ? "true" : "false"}
      />
      {errors.age && <p role="alert">{errors.age.message}</p>}
      {/* <TextField
          onChange={field.onChange} // send value to hook form
          onBlur={field.onBlur} // notify when input is touched/blur
          value={field.value} // input value
          name={field.name} // send down the input name
          inputRef={field.ref} // send input ref, so we can focus on input when error appear
        /> */}
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type="submit" />
    </form>
  );
}
// }

// import * as React from "react";
