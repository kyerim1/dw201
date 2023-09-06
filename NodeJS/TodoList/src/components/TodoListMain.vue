<template>
    <TodoListMenu class="p-0"/>
    <div v-for="key in Object.keys(filter_todos)" :key="key" class="mb-3">
        <div v-if="use_category">
            <em>{{ key }}</em>
        </div>
        <TodoList :data="filter_todos[key]" />
    </div>
    <div class="my-2 mt-5">
        <span style="background-color: red;">&nbsp;</span>&nbsp;
        <strong>처리하지 못한 할일</strong>
    </div>
    <TodoList :data="pending_todos" />
</template>

<script>
import TodoListMenu from '../components/TodoListMenu.vue'
import TodoList from '../components/TodoList.vue'
</script>

<style>
</style>