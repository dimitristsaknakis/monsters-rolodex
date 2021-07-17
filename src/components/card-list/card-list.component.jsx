/* Rendered by App */

import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                // Create Card components for each monster of props.monsters
                // passed from App. Pass monster prop down to Card component
                props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))
            }
        </div>
    );
};

// export default CardList; // doesn't require { } on component import, and can be any name
// export { CardList }; // requires { } on component import, and must be same name