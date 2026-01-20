import React, {useState} from 'react';
import loginIcon from  '../assest/assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email : "",
    password : ""
  })
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    
    try {
      // Mock login for demonstration - in real app, this would be an API call
      if (data.email && data.password) {
        // Mock user data
        const userData = {
          _id: '1',
          firstName: 'Akshar',
          lastName: 'Doe',
          email: data.email,
          role: 'user'
        };
        
        // Mock token
        const token = 'mock-jwt-token-' + Date.now();
        
        // Use AuthContext login
        login(userData, token);
        
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Please enter email and password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section id='login'>
      <div className ='mx-auto container p-4'>
      <div className='bg-white p-5 w-full max-w-sm mx-auto'>
      <div className='w-20 h-20 mx-auto'>
          <img src={loginIcon} alt="login icons" />
          </div>
        
          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                     <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

</form>
<p className='my-5'>Don't have account ? <Link to={"/signup"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>


</div>
          </div>
    </section>

  )
}

export default Login;
