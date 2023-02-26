import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetcher } from 'lib/getUsers';
import { setToken } from 'lib/auth';


const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    FirstName: '',
    LastName: '',
    Address: '',
    Phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
          method: 'POST',
        }
      );
      // console.log(responseData)
      setToken(responseData);
      // router.redirect('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex w-full">
      <div className="w-full bg-white border-2 rounded p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            Register
          </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mb-4 md:flex md:flex-wrap md:justify-between"
        >
          <div className="flex flex-col mb-4 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border-2 py-2 px-3"
              type="text"
              name="username"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 py-2 px-3"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 py-2 px-3"
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="FirstName">
              First Name
            </label>
            <input
              className="border-2 py-2 px-3"
              type="text"
              name="FirstName"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="LastName">
             LastName
            </label>
            <input
              className="border-2 py-2 px-3"
              type="text"
              name="LastName"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="Address">
             Address
            </label>
            <input
              className="border-2 py-2 px-3"
              type="text"
              name="Address"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="Phone">
             Phone Number
            </label>
            <input
              className="border-2 py-2 px-3"
              type="tel"
              name="Phone"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          
          <button
            className="block bg-teal-400 text-lg rounded p-4 mx-auto"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;