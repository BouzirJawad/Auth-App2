import React from 'react'
import axios from "axios"
import { useFormik } from "formik"
import { loginSchema } from '../schemas/LoginSchema'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'


function Login() {
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values, { resetForm }) => {
        await handleLogin(values);
        resetForm()
      },
    })

    const handleLogin = async (values) => {
      try {
        const res = await axios.post(`http://localhost:7460/api/auth/register`, values);
  
        if (res.data.token) {
          setToken(res.data.token)
          localStorage.setItem("token", token)
          toast.success("Login successful !", { duration: 2000 })
          navigate("/")
        } else {
          toast.error("Invalid email or password", { duration: 2000 })
        }
      } catch (err) {
        toast.error("Server error. Try again later", { duration: 2000 });
        resetForm()
      }
    };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2 className="text-2xl font-extrabold text-[#00EEFF] mb-4">Login</h2>

        <div className="mb-4">
          <label className="text-white">email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email
                ? "input-error rounded-md bg-[#8186BC] p-2 mt-1 w-full"
                : "rounded-md bg-[#8186BC] p-2 mt-1 w-full"
            }
          />
          {errors.email && touched.email && (
            <p className="text-xs mb-1 text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-white">password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.password && touched.password
                ? "input-error rounded-md bg-[#8186BC] p-2 mt-1 w-full"
                : "rounded-md bg-[#8186BC] p-2 mt-1 w-full"
            }
          />
          {errors.password && touched.password && (
            <p className="text-xs mb-1 text-red-500">{errors.password}</p>
          )}
        </div>
        <div className="text-center mt-3">
          <button
            className="bg-[#00EEFF] w-[40%] text-md font-bold"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default Login