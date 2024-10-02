import { useForm } from "react-hook-form";

export default function App() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);

  const { handleSubmit1, control, reset } =
    useForm <
    IFormInputs >
    {
      defaultValues: {
        MyCheckbox: false,
      },
    };
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  const {
    register,
    formState: { errors },
    handleSubmit2,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
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
      {errors.lasrName?.type === "required" && (
        <p role="alert">Last name is required</p>
      )}
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}
      <input
        type="number"
        {...register("age", { min: 18, max: 99, required: "Age is required" })}
        aria-invalid={errors.age ? "true" : "false"}
      />
      {errors.age && <p role="alert">{errors.age.message}</p>}
      <Controller
        name="MyCheckbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type="submit" />
    </form>
  );
}
