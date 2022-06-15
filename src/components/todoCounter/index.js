import React from "react";
import styles from './styles.module.css';


function TodoCounter(){
    return (
        <h2 className={ styles.titleCounter }>Has completado 2/3 TO-DO's</h2>

    );
}

export { TodoCounter };