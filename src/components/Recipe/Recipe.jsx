import { RecipeInfo } from "components/RecipeInfo/RecipeInfo"; 
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import PropTypes from 'prop-types'

export function Recipe({recipe}) {
    return (
        <ul>
            {recipe.map(({name, time, servings, calories, difficulty, image} ) => {
                return <RecipeInfo 
                key={name}
                name={name} 
                time={time}
                servings={servings}
                calories={calories}
                difficulty={difficulty}
                image={image}
                iconTime={BsAlarm}
                iconCalories={HiOutlineChartBar}
                iconPie={HiOutlineChartPie}
                />
            })}
        </ul>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.array
}



