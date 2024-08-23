
let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
   



  return (props.rating >= 1 && props.rating <= 5) ? GiveRating  : null
  // return stars;

}

function GiveRating() {
  return <h3>{stars[props.rating - 1]}</h3>;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
