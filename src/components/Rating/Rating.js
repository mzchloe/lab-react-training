

export default function Rating({children}){
 
    let stars = []
    for(let i = 0; i < 5; i++){
        if (i < Math.round(children)) {
            stars.push('★') 
        } else {
          stars.push('☆') 
        }
    }

    /* First attempt but not working with decimals, and conditions are missing */
/*    const displayRatings = (numberOfStars) => {
        numberOfStars = parseFloat(numberOfStars);
        numberOfStars = Math.floor(numberOfStars);

        return '★'.repeat(numberOfStars) + '☆'.repeat(5- numberOfStars);
    };  */

    

    return (
        <div>
         {stars}
        </div>
    )
}
