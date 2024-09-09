import { useState } from "react";

import { Form as FormComponents } from "../../../components/Form";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { DataProps, schema } from "../../../schema/plantSchema";

import { removeQuotesAndSplit } from "../../../utils/removeQuotesAndSplit";

import imgRight from "../../../assets/main-plant.png";

import Modal from "../../../components/modal";
import { capitalize } from "../../../utils/capitalize";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataProps>({
    resolver: zodResolver(schema),
  });

  const [openModal, setOpenModal] = useState(false);

  const onSubmit = async (data: DataProps) => {
    const req = {
      ...data,
      id: (Math.floor(Math.random() * 1000000) + 1).toString(),
      title: capitalize(data.title),
      subtitle: capitalize(data.subtitle),
      label: [data.label, capitalize(data.type)],
      isInSale: data.discount <= 0 ? false : true,
      features: removeQuotesAndSplit(data.features),
      imgUrl: "/src/assets/img-promo.jpg",
    };
    try {
      await fetch("http://localhost:3000/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });

      setOpenModal(true);
      setInterval(() => {
        setOpenModal(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao enviar os dados");
    } finally {
      reset();
    }
  };

  return (
    <>
      <section className="w-full h-full flex-1 mb-20 lg:mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col mx-12 pt-20 h-full md:w-2/3"
        >
          <FormComponents.Title>Plant Registration</FormComponents.Title>
          <FormComponents.Container>
            <FormComponents.Label htmlFor="title">
              Plant Name
            </FormComponents.Label>
            <FormComponents.Input
              {...register("title")}
              placeholder="Echinocereus Cactus"
              id="name"
              type="text"
            />
            {errors?.title && (
              <FormComponents.Error>
                {errors?.title.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <FormComponents.Container>
            <FormComponents.Label htmlFor="subtitle">
              Plant Subtitle
            </FormComponents.Label>
            <FormComponents.Input
              {...register("subtitle")}
              type="text"
              id="subtitle"
              placeholder="A majestic addition to your plant collection"
            />
            {errors?.subtitle && (
              <FormComponents.Error>
                {errors?.subtitle.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <FormComponents.Container>
            <FormComponents.Label htmlFor="type">
              Plant Type
            </FormComponents.Label>
            <FormComponents.Input
              {...register("type")}
              placeholder="Cactus"
              id="type"
              type="text"
            />
            {errors?.type && (
              <FormComponents.Error>
                {errors?.type.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <FormComponents.Container>
            <FormComponents.Label htmlFor="price">Price</FormComponents.Label>
            <FormComponents.NumericInput
              {...register("price")}
              prefix="$"
              placeholder="$139.99"
              id="price"
              type="text"
            />
            {errors?.price && (
              <FormComponents.Error>
                {errors?.price.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <FormComponents.Container>
            <FormComponents.Label htmlFor="discount">
              Discount percentage
            </FormComponents.Label>
            <FormComponents.NumericInput
              {...register("discount")}
              suffix="%"
              placeholder="20%"
              id="price"
              type="text"
            />
            {errors?.discount && (
              <FormComponents.Error>
                {errors?.discount.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <fieldset className="flex font-inter mt-4 gap-4 items-center justify-start accent-customLunarGreen bg-customWisper">
            <legend className="font-inter text-customIBBNB font-semibold mb-2">
              Label:
            </legend>

            <div>
              <FormComponents.Input
              {...register('label')}
                type="radio"
                id="indoor"
                value="Indoor"
              />
              <FormComponents.Label htmlFor="indoor" className="px-1">
                Indoor
              </FormComponents.Label>
              {errors?.label && (
                <p className="text-red-700 text-xs mt-1">
                  {errors?.label.message}
                </p>
              )}
            </div>

            <div>
              <FormComponents.Input
              {...register('label')}
                type="radio"
                id="outdoor"
                value="Outdoor"
              />
              <FormComponents.Label htmlFor="outdoor" className="px-1">
                Outdoor
              </FormComponents.Label>
            </div>
          </fieldset>

          <FormComponents.Container>
            <FormComponents.Label htmlFor="features">
              Features
            </FormComponents.Label>
            <FormComponents.TextArea
              {...register("features")}
              placeholder="Species: Echinocereus..."
              id="features"
            />
            {errors?.features && (
              <FormComponents.Error>
                {errors?.features.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <FormComponents.Container>
            <FormComponents.Label htmlFor="description">
              Description
            </FormComponents.Label>
            <FormComponents.TextArea
              {...register("description")}
              placeholder="Ladyfinger cactus..."
              id="description"
            />
            {errors?.description && (
              <FormComponents.Error>
                {errors?.description.message}
              </FormComponents.Error>
            )}
          </FormComponents.Container>

          <button
            type="submit"
            className="font-inter text-sm w-full bg-customLunarGreen rounded-sm text-customWhite font-bold mt-8 py-2 transition-all hover:text-customLunarGreen hover:bg-customAvocado hover:ring-1 hover:ring-customLunarGreen shadow-2xl"
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
  );
};

export default Form;
