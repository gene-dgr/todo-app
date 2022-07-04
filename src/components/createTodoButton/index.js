
import React from "react";
import styles from './styles.module.css';


function CreateTodoButton(){

    const onclickButton = (msg) => {
        console.log("se hizo click al boton");
    }
    return (
        <div className={ styles.createContainer }>
            <button
                className={ styles.todoButton }
                onClick={ () => {onclickButton()} }>
                +
            </button>
        </div>
        

    );
}

export { CreateTodoButton };