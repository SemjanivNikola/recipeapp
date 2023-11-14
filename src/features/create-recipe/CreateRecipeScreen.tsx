import ButtonSpinner from "@/components/spinner/ButttonSpinner";
import TextInput from "@/components/text-input/TextInput";
import { useCreateRecipeMutation } from "@/store/services/recipeApi";
import { Controller, useForm } from "react-hook-form";
import s from "./create-recipe-screen.module.css";
import ScreenHeader from "@/components/screen-header/ScreenHeader";

type RecipeType = {
  title: string;
  authorId: string;
  dateCreated: string;
  _instruction: string;
  _tag: string;
  instructions: string[];
  tags: string[];
};

const initialValues = {
  title: "",
  authorId: "",
  dateCreated: "",
  instructions: [],
  _instruction: "",
  tags: [],
  _tag: "",
};

const CreateRecipeScreen = () => {
  const [createRecipe, status] = useCreateRecipeMutation();
  const { handleSubmit, control, formState } = useForm<RecipeType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: RecipeType) => {
    const formData = {
      recipe: {
        title: data.title,
        authorId: data.authorId,
        dateCreated: data.dateCreated,
        instructions: data.instructions,
        tags: data.tags,
      },
    };
    await createRecipe(formData);
  };

  return (
    <div style={{ height: "100%", backgroundColor: "#ccc" }}>
      <ScreenHeader title="Create new recipe" />
      <div className={s.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.row}>
            <div className={s.w30}>
              {/* Author and date can not be modified */}
              {/* TODO: Display author name, but save his id */}
              <div>Author: Current user</div>
              {/* TODO: Display current date, but save in format YYYY-MM-DD*/}
              <div>Date: 2023-11-14</div>
            </div>
            <div className={s.w70}>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: props }) => (
                  <TextInput type="text" label="Title" isFocused error={formState.errors?.title?.message} {...props} />
                )}
              />

              <ul>
                <li></li>
              </ul>

              <Controller
                name="_instruction"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: props }) => <TextInput type="text" label="Instruction" {...props} />}
              />

              <ul>
                <li></li>
              </ul>

              <Controller
                name="_tag"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: props }) => <TextInput type="text" label="Tag" {...props} />}
              />
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
            {status.isLoading ? <ButtonSpinner /> : <button className={s.transparentBtn}>Delete</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipeScreen;
