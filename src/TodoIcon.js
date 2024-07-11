import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
    "complete": <CheckSVG/>,
    "delete": <DeleteSVG/>
};

function TodoIcon({ type }) {
    return (
        <span
            className={`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };