export default function Login() {
  return (
    <section className="h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative overflow-hidden">
        <div
          id="blur1"
          className="absolute top-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl opacity-40 animate-swap1"
        ></div>
        <div
          id="blur2"
          className="absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl opacity-40 animate-swap2"
        ></div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Brand Boost"
            src="/logo/white-green-word.webp"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 tracking-tight bg-gradient-to-b from-gray-300 via-lightGreen to-lightGreen bg-clip-text uppercase font-bold text-transparent">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-50"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-50"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-lightGreen hover:text-accent"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen sm:text-sm/6"
                />
              </div>
            </div>

            <div>{/* radio input for user type will be here */}</div>

            <div>
              <button
                type="submit"
                className="cursor-pointer flex w-full justify-center rounded-md bg-lightGreen px-3 py-1.5 text-sm/6 font-semibold shadow-xs hover:bg-accent text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightGreen"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-200">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold text-lightGreen hover:text-accent"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
