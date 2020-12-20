import { useReducer} from 'react';
// import { useReducer, useState } from 'react';
import styles from './Counter.module.css';

function countReducer (state, action){
  // prevState - state это то что сейчас в count (до вызова setCount)
  // nextState - action будет взято из setCount
  switch(action.type){
    case 'inctement':
      // return state + action.payload
      return {...state, count: state.count + action.payload}
    case 'decrement':
      // return state - action.payload
      return {...state, count: state.count - action.payload}
    default:
      throw new Error (`Unsuported action type ${action.type}`)
  }
}

export default function Counter() {
  
  // Было - const [count, setCount] = useState(0)
  // Создам Reducer
  // Reducer возвращает [state, dispatch] - текущее состоание и dispatch
  // dispatch - отправит action в countReducer
  // Reducer принимает useReducer(countReducer, 0) - функцию Reducer и начальное состояние
  // Reducer может принять не обязательный третий параметр - 
  // ссылку на функцию которая проинициализирует начальное значение
  // тогад второй параметр проигнорируется (типа layzy state)
  
  // count - может быть чем угодно!
  // const [count, dispatch] = useReducer(countReducer, 0)
  const [state, dispatch] = useReducer(countReducer, {count: 0})

  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({type: 'inctement', payload: 1})}
      >
        Увеличить
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({type: 'decrement', payload: 1})}
      >
        Уменьшить
      </button>
    </div>
  );
}
// function countReducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + action.payload };

//     case 'decrement':
//       return { ...state, count: state.count - action.payload };

//     default:
//       throw new Error(`Unsuported action type ${action.type}`);
//   }
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(countReducer, {
//     count: 0,
//   });

//   return (
//     <div className={styles.container}>
//       <p className={styles.value}>{state.count}</p>
//       <button
//         className={styles.btn}
//         type="button"
//         onClick={() => dispatch({ type: 'increment', payload: 1 })}
//       >
//         Увеличить
//       </button>

//       <button
//         className={styles.btn}
//         type="button"
//         onClick={() => dispatch({ type: 'decrement', payload: 1 })}
//       >
//         Уменьшить
//       </button>
//     </div>
//   );
// }
