import Button from "../components/Button"

const Subscribe = ({ fullWidth }) => {
  return (
    <section className="max-container flex justify-between items-center flex-col gap-10" id="contact-us">
      <h3 className="text-4xl max-sm:text-2xl leading-[60px] lg:max-w-full font-palanquin font-bold">
        Sign Up For <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[60%] flex w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text"
          className="input"
          placeholder="subscribe@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:max-w-full">
          <Button 
            fullWidth
            label="Sign Up"
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe