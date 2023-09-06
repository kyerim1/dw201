<template>
    <TodoListNew/>
    <section class="container">
        <div class="row justify-content-center m-2">
            <TodoListMain/>
        </div>
    </section>
</template>

<script>
    import { ref, readonly, provide } from 'vue'
    import { useStorage } from '../stores/storage'
    import TodoListMain from '../components/TodoListMain.vue'
    import TodoListNew from '../components/TodoListNew.vue'
    export default {
        name : "TodoListContainer",
        components:{
            TodoListNew,TodoListMain
        }
    }
</script>

<style>

</style>