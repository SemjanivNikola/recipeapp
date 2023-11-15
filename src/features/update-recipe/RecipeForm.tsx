import TextInput from "@/components/text-input/TextInput";
import { Controller, FormProvider, useForm } from "react-hook-form";
import InstructionsFieldArray from "../create-recipe/InstructionsFieldArray";
import ListInput from "../create-recipe/ListInput";
import s from "../create-recipe/create-recipe-screen.module.css";

interface RecipeType {
  title: string;
  authorId: string;
  dateCreated: string;
  instructions: string[];
  tags: string[];
}

interface RecipeFormProps {
  initialValues: RecipeType;
  staticData: {
    userName: string;
    dateCreated: string;
  };
  onAPISubmit: (data: RecipeType, method: () => void) => void;
  formActionButtons: React.ReactElement;
}

const RecipeForm = ({ initialValues, staticData, onAPISubmit, formActionButtons }: RecipeFormProps) => {
  const methods = useForm<RecipeType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: RecipeType) => {
    onAPISubmit(data, methods.reset);
  };

  const handleUpdate = (newList: string[]) => {
    methods.setValue("tags", newList);
  };

  const tags = methods.getValues("tags");

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={s.form}>
        <div className={s.row}>
          <div className={s.w30}>
            {/* Author and date can not be modified */}
            <div>Author: {staticData.userName}</div>
            <div>Date: {staticData.dateCreated}</div>
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

            <ListInput list={tags} update={handleUpdate} />
          </div>
        </div>

        {formActionButtons}
      </form>
    </FormProvider>
  );
};

export default RecipeForm;
