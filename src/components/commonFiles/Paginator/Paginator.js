import React from "react";
import classes from "./Paginator.module.css";

const Paginator = (props) => {
    let pages = [],
        i = 1,
        k = 2;
    for (i = props.currentPage - 2; i <= props.currentPage + k; i++) {
        if (i < 1) k = 4
        else pages.push(i);
    }
    return (
        <div className={classes.pages__inner}>
            {pages.map(el => {
                return <span
                    className={((props.currentPage === el) && classes.page__selected) || classes.pages}
                    onClick={() => {
                        props.onPageChange(el)
                    }}>{el}</span>
            })}
        </div>
    );
}

export default Paginator;