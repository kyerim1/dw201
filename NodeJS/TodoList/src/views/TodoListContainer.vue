<template>  <!--  TodoListContainer가 상위 컴포넌트 이고 하위 컴포넌트로 TodoListNew, TodoListMAin 이 있다.  -->
    <TodoListNew/>
    <section class="container">
        <div class="row justify-content-center m-2">
            <TodoListMain/>
        </div>
    </section>
</template>

<script>
    import { ref, readonly, provide } from 'vue'// 하위 컴포넌트에 주입 하기 위한 provide, 읽기전용 readonly,  값 참조 ref
    import { useStorage } from '../stores/storage'
    import TodoListMain from '../components/TodoListMain.vue'
    import TodoListNew from '../components/TodoListNew.vue'
    export default {
        name : "TodoListContainer",
        components:{
            TodoListNew,TodoListMain
        },
        setup(){
            const todos = ref([]) // 기본 값 참조  [] 이값으로 참조
            const {loadTodos, saveTodos, storage_id} = useStorage()// 로컬스토리지로 저장 불러오기 위해 useStorage 사용
            provide('todos',readonly(todos) )  // todos에 있는값 읽기전요응로 주입

            const initTodos = (init_todos) =>{
                todos.value = init_todos
            }
            const addTodo = (job, date)=>{  //새로운 할일 등록
                todos.value.push( {
                    id: storage_id.value++,
                    job: job,
                    date: date,
                    completed : false,
                })
                saveTodos(todos)
            }
            const removeTodo = (id) => {  // 할일  삭제
                todos.value.splice(id,1)
                todos.value.forEach( (todo,idx) => {
                    todo.id=idx
                })
                saveTodos(todos)
            }
            const completeTodo = (id) =>{// 할일 완료 했으면 완료 처리
                todos.value.find( (todo) => todo.id == id).completed=true
                saveTodos(todos)
            }
            provide('addTodo',addTodo)
            provide('removeTodo',removeTodo)
            provide('completeTodo',completeTodo)

            loadTodos(initTodos) // 할일 목록 불러오기
        },
    }
</script>

<style>

</style>