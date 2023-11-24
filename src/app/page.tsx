import Image from 'next/image'

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">AI Meal Plannerizer!</h1>
          <p className="py-7 text-xl">
           Welcome to Meal Plannerizer. Login to use the power of AI to personalize your meal plan.
          </p>
          <p className='py-7 text-xl'>
            Get personal recommendations based on your diet, allergies, and preferences.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label font-semibold">
                <a href="#" className="label-text-alt link link-hover text-lg">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='button' className="btn btn-primary text-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
