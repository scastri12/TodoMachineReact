import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
    "complete": <CheckSVG className="Icon-svg"/>,
    "delete": <DeleteSVG className="Icon-svg"/>
};

function TodoIcon({ type }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };