import React from "react";
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import close from '../../assets/icons/close.png';
import unchecked from '../../assets/icons/circle.png';
import checked from '../../assets/icons/checked.png';

function TodoItem(props){

    // console.log(props)
    const onDelete = () => {
        alert('Se eliminó la tarea');
    }
    return (
        <li key={props.key} className={ styles.todoItem } style={{color: "gray"}}>
            <div className={ styles.todoBody }>

                <div className={ styles.closerContainer}>
                    <span onClick={ () => { onDelete() }}>
                        <img src={ close } />
                    </span>
                </div>

                <div className={ classNames(styles.contentContainer, props.completed && styles.checked) }>
                    <p>{ props.text }</p>
                </div>  

                <div className={ styles.checkerContainer }>
                    <span >
                        <img src={ !props.completed ? unchecked : checked }/>
                    </span>
                </div>


            </div>
            
            
        </li>
    );
}

export { TodoItem };