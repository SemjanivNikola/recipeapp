import ButtonSpinner from "@/components/spinner/ButttonSpinner";
import TextInput from "@/components/text-input/TextInput";
import { useCreateRecipeMutation } from "@/store/services/recipeApi";
import { Controller, useForm } from "react-hook-form";
import s from "./create-recipe-screen.module.css";
import ScreenHeader from "@/components/screen-header/ScreenHeader";
import { useSelector } from "react-redux";
import { selectUser } from "../auth/slices/authSlice";
import { formatDateForDisplay, formatDateForStore } from "./dateHelper";

type RecipeType = {
  title: string;
  authorId: string;
  dateCreated: Date;
  _instruction: string;
  _tag: string;
  instructions: string[];
  tags: string[];
};

const initialValues = {
  title: "",
  instructions: [],
  _instruction: "",
  tags: [],
  _tag: "",
};

const DATE = new Date();
const DATE_FOR_DISPLAY = formatDateForDisplay(DATE);

const CreateRecipeScreen = () => {
  const user = useSelector(selectUser);
  const [createRecipe, status] = useCreateRecipeMutation();
  const { handleSubmit, control, formState } = useForm<RecipeType>({
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
              <div>Author: {user?.name}</div>
              <div>Date: {DATE_FOR_DISPLAY}</div>
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
