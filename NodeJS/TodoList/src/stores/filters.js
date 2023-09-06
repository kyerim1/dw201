// filters.js

import { inject } from 'vue'

export const useFilter = () =>{
    const today = inject('today')
    const fnSort = (a,b) => {  // 날짜 기준 으로 정렬
        const a_date = Date.parse(a.date)
        const b_date = Date.parse(b.date)
        if( a_date > b_date) return 1
        else if(a_date < b_date ) return 0
        else return a.id-b.id
    }

    const getPendingTodos = (todos)=>{
        return todos.value.filter( (todo) => todo.date < today && !todo.completed)
        .slice().sort(fnSort)
    }
    const getActiveToday = (todos)=>{
        return todos.value.filter( (todo) => todo.date == today && !todo.completed)
        .slice().sort(fnSort)
    }

    const getCompletedToday = (todos)=>{
        return todos.value.filter( (todo) => todo.date == today && todo.completed)
        .slice().sort(fnSort)
    }

    const getAllTodayTodo = (todos)=>{
        return getActiveToday(todos).concat(getCompletedToday(todos)).slice().sort(fnSort)
    }

    const getAllTodo = (todos)=>{
        return todos.value.slice().sort(fnSort)
    }
    
    return {   getPendingTodos,   getActiveToday,  getCompletedToday,
        getAllTodayTodo,   getAllTodo   }
}