<template>
    <!--  할일 새롭게 작성하는 컴포넌트  
    첫번째 input에 v-model 명칭을 job이라고 세팅하면  val_obj객체의 job에 저장된다.
    두번째 input의 v-model 명칭을 date로 세팅하면 val_obj객체의 date에 저장된다.
    -->
    <section class="mb-5">
        <div class="container">
            <div class="row justify-content-center m-2">
                <div class="col border border-primary rounded">
                    <input type="text" id="todo_input" class="form-control my-2"
                    v-model="job" placeholder="할일을 작성하세요"/>
                </div>
                <div class="row my-2">
                    <div class="col-6">
                        <input type="date" v-model="date" :min="today" />
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-primary btn-sm float-end"
                        @click="onAddTodo">할일추가</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { reactive, toRefs, inject, ref } from 'vue';

export default{
    name:"TodoListNew",
    setup(){
        const today = inject('today')
        const addTodo = inject('addTodo') // TodoListContainer로 부터 주입
        const val_obj = reactive( {  // 오늘할일 작성한 값이 저장될 객체 
            job:'', date:today , today:today,
        })
        const onAddTodo =() =>{ // 커튼 클릭하면 TodoListContainer의 addTodo에 의해 로컬 스토리지에 val_obj 객체 값이 저장된다.
            if(val_obj.job.length > 0 ){
                addTodo(val_obj.job, val_obj.date)
                val_obj.job=''
                val_obj.date=today
            }
        }
        return {
            ...toRefs(val_obj), onAddTodo
        }
    }
}

</script>

<style>

</style>