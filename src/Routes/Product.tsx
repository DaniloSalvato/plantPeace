import cactus from "../assets/img0-container-3.png"

export default function Product() {
  return (
    <main className="w-full bg-customWisper flex  *:flex-1 justify-center items-center gap-16 p-4">
      <div className="flex flex-wrap flex-col lg:w-3/4 lg:flex-row justify-center items-center gap-4">
        <img
          className="h-full w-full object-cover flex flex-1"
          src={cactus}
          alt="Cactus plant"
        />

        <section className="w-full flex flex-col items-start gap-8 mb-4 flex-1">
          <div className="font-bold">
            <h1 className="font-garamondSerif text-4xl sm:text-5xl text-customLunarGreen mb-2">
              Echinocereus Cactus
            </h1>
            <p className="text-customGray text-xl font-lato">
              A Majestic Addition to Your Plant Collection
            </p>
          </div>

          <div className="font-raleway text-customDarkGreen *:bg-customLightGreen *:py-2 *:px-3 *:rounded-full *:border-2 *:border-customGreen">
            <span className="mr-4">indoor</span>
            <span>cactus</span>
          </div>

          <p className="font-lato text-xl font-bold">$139.99</p>

          <button className="bg-customLunarGreen transition-all hover:opacity-90 active:bg-black text-customAthenaGrey font-raleway py-5 px-14 shadow-2xl">
            Check out
          </button>

          <section className="*:p-2">
            <h2 className="font-lato text-xl font-bold">Features</h2>

            <ul className="font-raleway list-disc list-inside">
              <li>Species: Echinocereus spp.</li>
              <li>
                Mature Size: Varies by species, typically ranging from 4 to 12
                inches (10-30 cm) in height.
              </li>
              <li>
                Blooming Season: Typically spring or summer, with flowers
                lasting several days to weeks.
              </li>
              <li>
                Pot Size: Available in various pot sizes to suit your preference
                and needs.
              </li>
            </ul>
          </section>

          <section className="*:p-2">
            <h2 className="font-lato text-xl font-bold">Description</h2>

            <p className="font-raleway 2xl:w-9/12">
              Ladyfinger cactus (*Echinocereus pentalophus*) is also known as
              Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight,
              light fertilizer, and is prone to root rot. The root system is
              shallow and weak. Aphids and mealybugs are also a danger. Avoiding
              wet soil can help with success with a ladyfinger cactus.
            </p>
          </section>
        </section>
      </div>
    </main>
  )
}
