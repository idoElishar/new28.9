import React from 'react';
import { useForm } from 'react-hook-form';

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          {...register('username', {
            required: 'Username required',
            minLength: {
              value: 2,
              message: 'Username need to be at least 2 characters.',
            },
          })}
          type="text"
          id="username"
          name="username"
          placeholder="Enter UserName"
        />
        {errors.username && typeof errors.username === 'string' && (
          <p style={{ color: 'red' }}>{errors.username}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          {...register('email', {
            required: 'Email  required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a normal email address',
            },
          })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        {errors.email && typeof errors.email === 'string' && (
          <p style={{ color: 'red' }}>{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          {...register('password', {
            required: 'Password  required',
            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/,
              message:
                'Password must contain a number, one uppercase , one lowercase , and one special character.',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters.',
            },
            maxLength: {
              value: 20,
              message: 'Password must not exceed 20 characters.',
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        {errors.password && typeof errors.password === 'string' && (
          <p style={{ color: 'red' }}>{errors.password}</p>
        )}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RegularForm;
