import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props)=>{
    
    if(props.items.length ===0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    if(props.items.length ===1){
        return <ul className="expenses-list">
        {props.items.map((expense, index) => {
            return(
            <div>
                <ExpenseItem
                 key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
            />
            <p>Only single Expense here. Please add more...</p>
            </div>
            );
        })}
    </ul>
    }
    
    return <ul className="expenses-list">
        {props.items.map((expense, index) => {
            return(
                <ExpenseItem
                 key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
            />
            );
        })}
    </ul>
}

export default ExpensesList;