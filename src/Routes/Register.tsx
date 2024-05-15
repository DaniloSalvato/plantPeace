import imgRight from "../assets/main-plant.png"

const Register = () => {
  return (
    <main className="flex bg-customWisper w-full">
      <section className="w-full flex-1">
        <form className=" flex flex-col mx-12 pt-20 md:w-2/3">
          <h1 className="font-inter text-customLunarGreen font-semibold text-lg border-b border-customGray">
            Plant Registration
          </h1>

          <div className="flex flex-col font-inter mt-4 text-sm">
            <label className="text-customIBBNB font-medium">Plant Name</label>
            <input
              type="text"
              placeholder="Echinocereus Cactus"
              className="px-4 py-2 mt-2 w-full border border-customGray rounded text-sm text-black"
            />
          </div>

          <div className="flex flex-col font-inter mt-4 text-sm">
            <label className="text-customIBBNB font-medium">
              Plant Subtitle
            </label>
            <input
              type="text"
              placeholder="A majestic addition to your plant collection"
              className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black"
            />
          </div>

          <div className="flex flex-col font-inter mt-4">
            <label className="text-customIBBNB font-medium text-sm">
              Plant Type
            </label>
            <input
              type="text"
              placeholder="Cactus"
              className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black"
            />
          </div>

          <div className="flex font-inter mt-4 flex-wrap lg:flex-nowrap md:gap-2">
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-customIBBNB font-medium text-sm">
                Price
              </label>
              <input
                type="text"
                placeholder="$139.99"
                className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black"
              />
            </div>

            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-customIBBNB font-medium text-sm">
                Discount percentage
              </label>
              <input
                type="text"
                placeholder="20%"
                className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black"
              />
            </div>
          </div>

          <fieldset className="flex font-inter mt-4 gap-4 items-center justify-start accent-customLunarGreen">
            <legend className="font-inter text-customIBBNB font-semibold mb-2">
              Label:
            </legend>

            <div>
              <input type="radio" id="indoor" name="label" />
              <label htmlFor="indoor" className="px-1">
                Indoor
              </label>
            </div>

            <div>
              <input type="radio" id="outdoor" name="label" />
              <label htmlFor="outdoor" className="px-1">
                Outdoor
              </label>
            </div>
          </fieldset>

          <div className="flex flex-col font-inter mt-4">
            <label className="font-inter text-customIBBNB font-medium">
              Features
            </label>
            <textarea
              className="border border-customGray rounded px-4 py-2 pb-10 mt-2 text-sm text-black"
              placeholder="Species: Echinocereus..."
            ></textarea>
          </div>

          <div className="flex flex-col font-inter py-2 mt-4">
            <label className="font-inter text-customIBBNB font-medium">
              Description
            </label>
            <textarea
              className="border border-customGray rounded px-4 py-2 pb-10 mt-2 text-sm text-black"
              placeholder="Ladyfinger cactus..."
            ></textarea>
          </div>
          <button className="font-inter text-sm w-full bg-customLunarGreen rounded-sm text-customWhite font-bold mt-16 py-2">
            Register
          </button>
        </form>
      </section>
      <section className="flex-1 hidden sm:block sm:w-full bg-customWisper">
        <img
          src={imgRight}
          alt=""
          className="hidden sm:block lg:w-full h-full object-cover filter grayscale"
        />
      </section>
    </main>
  )
}

export default Register
