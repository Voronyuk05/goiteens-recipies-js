import { Recipe } from "./Recipe/Recipe";
import recipies from '../recipies.json'

export const App = () => {
  return (
    <Recipe recipe={recipies}/>
  )
};
