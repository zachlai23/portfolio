import React from 'react';


// /* Github link

// Image or fpl logo

// Text centered

// Live updater for team progress 

// Scope - I constantly overthink picking players for my fantasy soccer team, 
//         so I thought it would be cool to use machine learning to predict 
//         the points each player will score.

// Project Description - I preprocessed data from GITHUB LINK, 
//         considering stats such as goals scored, assists, clean sheets, 
//         expected stats as the features.  These statistics were averaged from all of the prior
//         games for each plaeyr and then used as features.  The model was trained on data from
//         the 20/21, 21/22, and 22/23 seasons, and tested on the 23/24 season.

//         I used a separate Random Forest model for each position, using features that were more
//         relevant to each position for each one.

//         I wrote algorithims and functions using these predicted points to assist in management of a team,
//         including features like picking an initial team, which players are performing the worst in the current team,
//         and which players you should bring in to the team.

// Outcome - 
//         The model was successful and I was able to craft and manage a team fully based on these predicted points.

//         Team rank / points
//         My team rank / points

// Future - Web app, fully automated transfers */


function FplProject() {
    return ( 
        <>
            <h1>Fantasy Soccer Points Predictor</h1>
            <p>I constantly overthink picking players for my fantasy soccer team, 
            so I thought it would be cool to use machine learning to predict 
            the points each player will score.</p>
            <p>I preprocessed data from GITHUB LINK, 
            considering stats such as goals scored, assists, clean sheets, 
            expected stats as the features.  These statistics were averaged from all of the prior
            games for each plaeyr and then used as features.  The model was trained on data from
            the 20/21, 21/22, and 22/23 seasons, and tested on the 23/24 season.

            I used a separate Random Forest model for each position, using features that were more
            relevant to each position for each one.

            I wrote algorithims and functions using these predicted points to assist in management of a team,
            including features like picking an initial team, which players are performing the worst in the current team,
            and which players you should bring in to the team.</p>
            <p> The model was successful and I was able to craft and manage a team fully based on these predicted points.

            Team rank / points
            My team rank / points</p>
        </>
    );
}

export default FplProject;