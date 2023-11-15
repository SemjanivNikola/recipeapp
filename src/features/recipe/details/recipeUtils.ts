export function isRecipeOwner(list: string[], recipe: string) {
  return list.includes(recipe);
}

export function storeRecipeIds(state: string[]) {
  localStorage.setItem("recipes", JSON.stringify(state));
}
