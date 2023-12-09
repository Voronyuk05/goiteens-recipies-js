import PropTypes from 'prop-types'

export function RecipeInfo({name, time, servings, calories, difficulty, image, iconTime: IconTime, iconCalories: IconCalories, iconPie: IconPie}) {
    return (
        <li>
            <img width="300px" src={image} alt={name} />
            <h2>{name}</h2>
            <p><IconPie />  Кількість порцій: {servings}</p>
            <p><IconCalories />  Кількість калорій: {calories} ккал</p>
            <p>{difficulty}</p>
            <p> <IconTime /> Час приготування {time} хвилин </p>
        </li>
    )
    
}

RecipeInfo.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number,
    image: PropTypes.string
}

