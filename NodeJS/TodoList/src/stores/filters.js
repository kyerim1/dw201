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

    const getPendingTodos = (todos)=>{   // 미루어진 할일
        return todos.value.filter( (todo) => todo.date < today && !todo.completed)
        .slice().sort(fnSort)
        //  오늘 날짜와 비교하여 날짜가 지났고  완료 되지 않은 일 filter 로찾기
    }
    const getActiveToday = (todos)=>{  // 앞으로 해야 될 할일
        return todos.value.filter( (todo) => todo.date == today && !todo.completed)
        .slice().sort(fnSort)
        // 오늘 날짜와 같고  완료되지않은 일 filter로 찾기
    }

    const getCompletedToday = (todos)=>{ // 완료 된할일
        return todos.value.filter( (todo) => todo.date == today && todo.completed)
        .slice().sort(fnSort)
        // 오늘 날짜와 같고  완료 된 일 
    }

    const getAllTodayTodo = (todos)=>{ // 오늘 의 모든 할일
        return getActiveToday(todos).concat(getCompletedToday(todos)).slice().sort(fnSort)
    // 오늘 날짜 에 해당하는 모든 할일( 해야될일, 완료된 일)
    }

    const getAllTodo = (todos)=>{// 모든 할일
        return todos.value.slice().sort(fnSort)
        // 지금까지 등록한 모든 할일
    }
    
    return {   getPendingTodos,   getActiveToday,  getCompletedToday,
        getAllTodayTodo,   getAllTodo   }
}