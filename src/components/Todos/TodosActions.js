import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './TodosActions.module.css'

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
    return (
        <div className={styles.todosAction}>
            <Button title={'Reset Todos'} onClick={resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button title={'Clear completed todos'}
                    onClick={deleteCompletedTodos}
            disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}

export default TodosActions