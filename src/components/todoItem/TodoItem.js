import React from "react";
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import close from '../../assets/icons/close.png';
import unchecked from '../../assets/icons/circle.png';
import checked from '../../assets/icons/checked.png';

function TodoItem(props){
    const [taskChecked, setTaskChecked] = React.useState(false)
    const onComplete = () => {
        if(!taskChecked){
            setTaskChecked(true);
            props.completed = taskChecked;
        }
        else{
            setTaskChecked(false);
            
        }
    }

    const onDelete = () => {
        alert('Se eliminó la tarea');
    }
    return (
        <li className={ styles.todoItem } style={{color: "gray"}}>
            <div className={ styles.todoBody }>

                <div className={ styles.closerContainer}>
                    <span onClick={ () => { onDelete() }}>
                        <img src={ close } />
                    </span>
                </div>

                <div className={ classNames(styles.contentContainer, taskChecked && styles.checked) }>
                    <p>{ props.text }</p>
                </div>

                <div className={ styles.checkerContainer }>
                    <span onClick={ () => { onComplete() }} >
                        <img src={ !taskChecked ? unchecked : checked }/>
                    </span>
                </div>


            </div>
            
            
        </li>
    );
}

export { TodoItem };