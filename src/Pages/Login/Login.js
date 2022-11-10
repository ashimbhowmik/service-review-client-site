import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.png";
import useAuth from "../Hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const handleLogin = (email, password, loginUser, location, navigate) => {
  loginUser(email, password, location, navigate);
};

const Login = () => {
  const {
    signInWithGoogle,
    loginUser,
    isLoading,
    authError,
    user,
    githubSignIn,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  //google
  const handelGoogleSignUp = (signInWithGoogle, location, navigate) => {
    signInWithGoogle(location, navigate);
  };

  //github
  const handleGithubSignUp = (githubSignIn, location, navigate) => {
    githubSignIn(location, navigate);
  };
  return (
    <div>
      <section className="flex w-[85%] mx-auto mt-20 mb-36">
        <div className="w-[65%] relative">
          <h1 className="text-6xl mt-24 ml-32 text-blue-600 font-semibold">
            <i>
              Welcome to My <br />
              <span>Service</span>
            </i>
          </h1>
          <p className="text-xl mt-4 ml-32">
            {" "}
            <i>Please login my site</i>{" "}
          </p>
          <img
            src={loginImg}
            className="w-[650px] h-[500px] absolute top-[160px] left-[300px]"
            alt=""
          />
        </div>
        <div className="w-[35%] ">
          <div className="w-full max-w-md p-4 rounded-md  sm:p-8 text-gray-800 shadow-md">
            <h2 className="mb-8 text-4xl font-semibold text-center">Login</h2>
            <div className="my-6 space-y-4 ">
              <button
                onClick={() =>
                  handelGoogleSignUp(signInWithGoogle, location, navigate)
                }
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-full focus:ring-2 focus:ring-offset-1 border-gray-300 focus:ring-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
              <button
                onClick={() =>
                  handleGithubSignUp(githubSignIn, location, navigate)
                }
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-full focus:ring-2 focus:ring-offset-1 border-gray-300 focus:ring-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
                <p>Login with GitHub</p>
              </button>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full text-gray-600" />
              <p className="px-3 text-gray-600">OR</p>
              <hr className="w-full text-gray-600" />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;
                console.log(email, password);

                handleLogin(email, password, loginUser, location, navigate);
              }}
              novalidate=""
              action=""
              className="space-y-8 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label for="email" className="block text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label for="password" className="text-sm ">
                      Password
                    </label>
                    <Link
                      rel="noopener noreferrer"
                      className="text-xs hover:underline text-gray-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                  />
                </div>
              </div>
              <>
                {isLoading && (
                  <>
                    <div className="alert shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="stroke-info flex-shrink-0 w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Please Wait....</span>
                      </div>
                    </div>
                  </>
                )}
              </>

              {authError && (
                <>
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{authError}</span>
                    </div>
                  </div>
                </>
              )}
              <div className="form-control mt-6 ">
                <button className="w-full px-8 py-3 font-semibold cursor-pointer bg-blue-600 text-gray-50 rounded-full">
                  Login
                </button>
              </div>

              <div className="space-y-2">
                <p className="px-6 text-sm text-center text-gray-600">
                  Don't have an account yet?
                  <Link
                    rel="noopener noreferrer"
                    to="/signup"
                    className="hover:underline text-blue-600"
                  >
                    {" "}
                    SignUp
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
