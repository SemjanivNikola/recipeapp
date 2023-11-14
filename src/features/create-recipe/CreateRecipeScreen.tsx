import ScreenHeader from "@/components/screen-header/ScreenHeader";
import ButtonSpinner from "@/components/spinner/ButttonSpinner";
import TextInput from "@/components/text-input/TextInput";
import { useCreateRecipeMutation } from "@/store/services/recipeApi";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectUser } from "../auth/slices/authSlice";
import InstructionsFieldArray from "./InstructionsFieldArray";
import ListInput from "./ListInput";
import s from "./create-recipe-screen.module.css";
import { formatDateForDisplay, formatDateForStore } from "./dateHelper";

type RecipeType = {
  title: string;
  authorId: string;
  dateCreated: Date;
  instructions: string[];
  tags: string[];
};

const initialValues = {
  title: "",
  instructions: ["Type instructions here"],
  tags: [] as string[],
};

const DATE = new Date();
const DATE_FOR_DISPLAY = formatDateForDisplay(DATE);

const CreateRecipeScreen = () => {
  const user = useSelector(selectUser);
  const [createRecipe, status] = useCreateRecipeMutation();
  const methods = useForm<RecipeType>({
    defaultValues: { authorId: user?.id, dateCreated: DATE, ...initialValues },
    mode: "onBlur",
  });

  const onSubmit = async (data: RecipeType) => {
    const formData = {
      recipe: {
        title: data.title,
        authorId: data.authorId,
        dateCreated: formatDateForStore(DATE),
        instructions: data.instructions,
        tags: data.tags,
      },
    };
    await createRecipe(formData)
      .unwrap()
      .then((response) => {
        // response.data.message
        console.log("response >> ", response);
        methods.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const tags = methods.getValues("tags");

  return (
    <div style={{ height: "100%", backgroundColor: "#ccc" }}>
      <ScreenHeader title="Create new recipe" />
      <div className={s.content}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={s.form}>
            <div className={s.row}>
              <div className={s.w30}>
                {/* Author and date can not be modified */}
                <div>Author: {user?.name}</div>
                <div>Date: {DATE_FOR_DISPLAY}</div>
              </div>
              <div className={s.w70}>
                <Controller
                  name="title"
                  control={methods.control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: props }) => (
                    <TextInput
                      type="text"
                      label="Title"
                      isFocused
                      error={methods.formState.errors?.title?.message}
                      {...props}
                    />
                  )}
                />

                <InstructionsFieldArray />

                <ListInput list={tags} update={(newList) => methods.setValue("tags", newList)} />
              </div>
            </div>

            <div className={s.buttonRow}>
              {status.isLoading ? (
                <ButtonSpinner />
              ) : (
                <button type="submit" className={s.submitBtn}>
                  Create
                </button>
              )}
              {/* TODO: Uncomment when doing edit feature */}
              {/* {status.isLoading ? <ButtonSpinner /> : <button className={s.transparentBtn}>Delete</button>} */}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateRecipeScreen;
