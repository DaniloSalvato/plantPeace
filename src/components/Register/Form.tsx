import { useCallback, useState } from "react"

import imgRight from "../../assets/main-plant.png"

import { IFormErrors, IPlantFormState } from "../../types/plant"
import Modal from "./Modal"
import { NumericFormat } from "react-number-format"

const Form = () => {
  const [plantForm, setPlantForm] = useState<IPlantFormState>({
    plantName: "",
    plantSubtitle: "",
    plantType: "",
    price: 0,
    discountPercentage: 0,
    label: "",
    features: "",
    description: "",
  })

  const [errors, setErrors] = useState<IFormErrors>({
    plantName: null,
    plantSubtitle: null,
    plantType: null,
    price: null,
    discountPercentage: null,
    label: null,
    features: null,
    description: null,
  })

  const [openModal, setOpenModal] = useState(false)

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      const stringRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
      const textRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\(\)\:\,\.\'"\-]*$/

      e.preventDefault()

      const {
        plantName,
        plantSubtitle,
        plantType,
        price,
        discountPercentage,
        label,
        features,
        description,
      } = plantForm

      let formIsValid = true

      if (
        !stringRegex.test(plantName.trim()) ||
        plantName.trim().length < 3 ||
        plantName.trim().length > 70
      ) {
        setErrors((prev) => ({
          ...prev,
          plantName:
            "Plant name is required. It must contain between 3 and 30 characters and only allow letters, spaces, and accented characters.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, plantName: null }))
      }

      if (
        !stringRegex.test(plantSubtitle.trim()) ||
        plantSubtitle.trim().length < 3 ||
        plantSubtitle.trim().length > 70
      ) {
        setErrors((prev) => ({
          ...prev,
          plantSubtitle:
            "Plant Subtitle is required. It must contain between 3 and 30 characters and only allow letters, spaces, and accented characters.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, plantSubtitle: null }))
      }

      if (
        !textRegex.test(plantType.trim()) ||
        plantType.trim().length <= 3 ||
        plantType.trim().length > 50
      ) {
        setErrors((prev) => ({
          ...prev,
          plantType:
            "Plant type is required. It must contain between 3 and 50 characters and only allow letters, spaces, and accented characters.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, plantType: null }))
      }

      if (isNaN(price) || price <= 0) {
        setErrors((prev) => ({
          ...prev,
          price: "Price must be a valid number greater than 0.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, price: null }))
      }

      if (isNaN(discountPercentage) || discountPercentage < 0) {
        setErrors((prev) => ({
          ...prev,
          discountPercentage:
            "Discount percentage must be a valid number equal to or greater than 0.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, discountPercentage: null }))
      }

      if (!label) {
        setErrors((prev) => ({
          ...prev,
          label: "Label is required.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, label: null }))
      }

      if (
        !textRegex.test(features.trim()) ||
        features.trim().length < 3 ||
        features.trim().length > 500
      ) {
        setErrors((prev) => ({
          ...prev,
          features:
            "Features is required. It must contain between 3 and 500 characters and only allow letters, spaces, and accented characters.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, features: null }))
      }

      if (
        !textRegex.test(description.trim()) ||
        description.trim().length < 3 ||
        description.trim().length > 500
      ) {
        setErrors((prev) => ({
          ...prev,
          description:
            "Description is required. It must contain between 3 and 500 characters and only allow letters, spaces, and accented characters.",
        }))
        formIsValid = false
      } else {
        setErrors((prev) => ({ ...prev, description: null }))
      }

      if (!formIsValid) return

      if (formIsValid) {
        sendData()

        setOpenModal(true)

        setTimeout(() => {
          setOpenModal(false)
        }, 5000)
      }
    },
    [plantForm]
  )

  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function removeQuotesAndSplit(text: string) {
    const cleanedText = text.replace(/"/g, "").replace(/\n/g, "")

    return cleanedText.split(", ")
  }

  const sendData = async () => {
    const req = {
      id: (Math.floor(Math.random() * 1000000) + 1).toString(),
      name: capitalize(plantForm.plantName),
      subtitle: capitalize(plantForm.plantSubtitle),
      label: [plantForm.label, capitalize(plantForm.plantType)],
      price: plantForm.price,
      isInSale: plantForm.discountPercentage <= 0 ? false : true,
      discountPercentage: plantForm.discountPercentage,
      features: removeQuotesAndSplit(plantForm.features),
      description: plantForm.description,
      imgUrl: "/src/assets/img-promo.jpg",
    }
    try {
      await fetch("http://localhost:3000/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
    } catch (error) {
      console.error("Erro ao enviar os dados")
    } finally {
      setPlantForm({
        plantName: "",
        plantSubtitle: "",
        plantType: "",
        price: 0,
        discountPercentage: 0,
        label: "",
        features: "",
        description: "",
      })
    }
  }

  return (
    <> 
    
      <section className="w-full h-full flex-1 mb-20 lg:mt-10">
        <form className=" flex flex-col mx-12 pt-20 h-full md:w-2/3">
          <h1 className="font-inter text-customLunarGreen font-semibold text-lg border-b border-customGray">
            Plant Registration
          </h1>

          <div className="flex flex-col font-inter mt-4 text-sm">
            <label className="text-customIBBNB font-medium">Plant Name</label>
            <input
              type="text"
              placeholder="Echinocereus Cactus"
              name="plantName"
              value={plantForm.plantName}
              className="px-4 py-2 mt-2 w-full border border-customGray rounded text-sm text-black bg-customWisper"
              onChange={(e) =>
                setPlantForm((prev) => ({
                  ...prev,
                  plantName: e.target.value,
                }))
              }
            />
            {errors?.plantName && (
              <p className="text-red-700 text-xs mt-1">{errors?.plantName}</p>
            )}
          </div>

          <div className="flex flex-col font-inter mt-4 text-sm">
            <label className="text-customIBBNB font-medium">
              Plant Subtitle
            </label>
            <input
              type="text"
              name="plantSubtitle"
              value={plantForm.plantSubtitle}
              placeholder="A majestic addition to your plant collection"
              className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black bg-customWisper"
              onChange={(e) =>
                setPlantForm((prev) => ({
                  ...prev,
                  plantSubtitle: e.target.value,
                }))
              }
            />
            {errors?.plantSubtitle && (
              <p className="text-red-700 text-xs mt-1">
                {errors?.plantSubtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col font-inter mt-4">
            <label className="text-customIBBNB font-medium text-sm">
              Plant Type
            </label>
            <input
              type="text"
              name="plantType"
              value={plantForm.plantType}
              placeholder="Cactus"
              className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black bg-customWisper"
              onChange={(e) =>
                setPlantForm((prev) => ({ ...prev, plantType: e.target.value }))
              }
            />
            {errors?.plantType && (
              <p className="text-red-700 text-xs mt-1">{errors?.plantType}</p>
            )}
          </div>

          <div className="flex font-inter mt-4 flex-wrap lg:flex-nowrap md:gap-2">
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-customIBBNB font-medium text-sm">
                Price
              </label>
              <NumericFormat
                prefix="$"
                type="text"
                name="price"
                value={plantForm.price}
                placeholder="$139.99"
                className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black bg-customWisper"
                onChange={(e) =>
                  setPlantForm((prev) => ({
                    ...prev,
                    price:
                      +e.target.value.replace(/\$/g, "").replace(/,/g, ".") ||
                      0,
                  }))
                }
              />
              {errors?.price && (
                <p className="text-red-700 text-xs mt-1">{errors?.price}</p>
              )}
            </div>

            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-customIBBNB font-medium text-sm">
                Discount percentage
              </label>
              <NumericFormat
                suffix="%"
                type="text"
                name="discountPercentage"
                value={plantForm.discountPercentage}
                placeholder="20%"
                className="border border-customGray rounded px-4 py-2 mt-2 text-sm text-black bg-customWisper"
                onChange={(e) =>
                  setPlantForm((prev) => ({
                    ...prev,
                    discountPercentage: +e.target.value.replace(/%/g, "") || 0,
                  }))
                }
              />
              {errors?.discountPercentage && (
                <p className="text-red-700 text-xs mt-1">
                  {errors?.discountPercentage}
                </p>
              )}
            </div>
          </div>

          <fieldset className="flex font-inter mt-4 gap-4 items-center justify-start accent-customLunarGreen bg-customWisper">
            <legend className="font-inter text-customIBBNB font-semibold mb-2">
              Label:
            </legend>

            <div>
              <input
                type="radio"
                id="indoor"
                name="label"
                value="Indoor"
                onChange={(e) => {
                  setPlantForm((prev) => ({
                    ...prev,
                    label: e.target.value,
                  }))
                }}
              />
              <label htmlFor="indoor" className="px-1">
                Indoor
              </label>
              {errors?.label && (
                <p className="text-red-700 text-xs mt-1">{errors?.label}</p>
              )}
            </div>

            <div>
              <input
                type="radio"
                id="outdoor"
                name="label"
                value="Outdoor"
                onChange={(e) => {
                  setPlantForm((prev) => ({
                    ...prev,
                    label: e.target.value,
                  }))
                }}
              />
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
              name="features"
              value={plantForm.features}
              className="border border-customGray rounded px-4 py-2 pb-10 mt-2 text-sm text-black bg-customWisper"
              placeholder="Species: Echinocereus..."
              onChange={(e) =>
                setPlantForm((prev) => ({ ...prev, features: e.target.value }))
              }
            ></textarea>
            {errors?.features && (
              <p className="text-red-700 text-xs mt-1">{errors?.features}</p>
            )}
          </div>

          <div className="flex flex-col font-inter py-2 mt-4">
            <label className="font-inter text-customIBBNB font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={plantForm.description}
              className="border border-customGray rounded px-4 py-2 pb-10 mt-2 text-sm text-black bg-customWisper"
              placeholder="Ladyfinger cactus..."
              onChange={(e) =>
                setPlantForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            ></textarea>
            {errors?.description && (
              <p className="text-red-700 text-xs mt-1">{errors?.description}</p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="font-inter text-sm w-full bg-customLunarGreen rounded-sm text-customWhite font-bold mt-8 py-2 transition-all hover:text-customLunarGreen hover:bg-customWhite hover:ring-1 hover:ring-customLunarGreen shadow-2xl"
          >
            Register
          </button>
        </form>
        <Modal isVisible={openModal} />
      </section>
      <section className="flex-1 hidden sm:block sm:w-full bg-customWisper">
        <img
          src={imgRight}
          alt=""
          className="hidden sm:block w-full h-full object-cover grayscale"
        />
      </section>
    </>
  )
}

export default Form
