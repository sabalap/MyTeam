import React, { Fragment } from "react";
import DirectorCard from "./DirectorCard";
const DirectorList = ({ directors }) => {
    return (
        <Fragment>
            {directors.map((director) => {
                return <DirectorCard director={director} key={director.id} />
            })}
        </Fragment>
    )
}
export default DirectorList;
