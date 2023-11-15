import { useCreateRecipeMutation } from "@/store/services/recipeApi";
import { useSelector } from "react-redux";
import { selectUser } from "../../auth/slices/authSlice";
import ErrorView from "../../error/ErrorView";
import { formatDateForDisplay, formatDateForStore } from "../helpers/dateHelper";
import FormActionBar from "./FormActionBar";
import RecipeForm from "./RecipeForm";

interface RecipeType {
  title: string;
  authorId: string;
  dateCreated: string;
  instructions: string[];
  tags: string[];
}

const INITIAL = {
  title: "",
  instructions: ["Type instructions here"],
  tags: [] as string[],
};

const DATE = new Date();
const DATE_FOR_DISPLAY = formatDateForDisplay(DATE);

const CreateFormWrapper = () => {
  const user = useSelector(selectUser);
  const [createRecipe, status] = useCreateRecipeMutation();

  if (user?.id == null) {
    return <ErrorView />;
  }

  const initialValues = {
    authorId: user.id,
    dateCreated: formatDateForStore(DATE),
    ...INITIAL,
  };

  const staticData = {
    userName: user.name ?? "-",
    dateCreated: DATE_FOR_DISPLAY,
  };

  const onSubmit = async (data: RecipeType, reset: () => void) => {
    console.log("test >> ", data);
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
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <RecipeForm
      initialValues={initialValues}
      staticData={staticData}
      onAPISubmit={onSubmit}
      formActionButtons={<FormActionBar title="Create" status={status.isLoading} />}
    />
  );
};

export default CreateFormWrapper;
