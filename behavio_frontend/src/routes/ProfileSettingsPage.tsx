import Header from "../components/ui/Header"
import SettingsImage from "../components/ui/SettingsImage"

const ProfileSettingsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-fit py-20 bg-accent min-w-full flex flex-col items-center tracking-wide text-black gap-10 p-3">
        <section className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <h1 className="text-4xl md:text-6xl text-offBlue">Update Profile</h1>
          <SettingsImage width={250} />
        </section>
        <section className="w-full h-screen bg-accent max-w-6xl">
          <form className="text-black flex items-center flex-col w-full">
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              <div className="w-full flex flex-col gap-5">
                <div className="form-control w-full">
                  <label htmlFor="first-name" className="label">
                    <span>First Name</span>
                  </label>
                  <input type="text" name="first-name" placeholder="Type here" className="input input-bordered w-full bg-secondary" />
                </div>
                <div className="form-control w-full ">
                  <label htmlFor="last-name" className="label">
                    <span>Last Name</span>
                  </label>
                  <input type="text" name="last-name" placeholder="Type here" className="input input-bordered w-full bg-secondary" />
                </div>
                <div className="form-control w-full ">
                  <label  className="label">
                    <span>Job Title</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full bg-secondary" />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span>Profile Picture URL</span>
                  </label>
                  <input type="textarea" placeholder="Type here" className="input input-bordered w-full bg-secondary" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span>Your bio</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24 lg:h-[9.8rem] bg-secondary" placeholder="Type Here"></textarea>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span>City</span>
                  </label>
                  <input type="textarea" placeholder="Type here" className="input input-bordered w-full bg-secondary" />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span>State</span>
                  </label>
                  <input type="textarea" placeholder="Type here" className="input input-bordered w-full bg-secondary" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-10">
              <button className="btn text-secondary mx-auto tracking-widest bg-primary-light hover:bg-primary-dark shadow-lg hover:shadow-xl active:shadow-lg">Cancel</button>
              <button className="btn text-secondary mx-auto tracking-widest bg-primary-light hover:bg-primary-dark shadow-lg hover:shadow-xl active:shadow-lg">Update Profile</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default ProfileSettingsPage