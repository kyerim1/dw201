<template>
    <div class="row">
        <div class="col">
            <span style="background-color: blue;">&nbsp;</span>&nbsp;
            <strong>{{ state }}</strong>
        </div>
        <div class="col">
            <div class="btn-group float-end">
                <button class="btn btn-sm dropdown-toggle" type="button"
                data-bs-toggle="dropdown">리스트 필터</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li v-for="key in Object.keys(filters)" :key="key"> <!-- TodoListMAin의 filters 객체의 str을 화면 에 드롭다운으로 표시한다.-->
                        <a class="dropdown-item" @click="filter=key">
                            {{  filters[key].str }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { ref, watch, computed, inject } from 'vue';

export default{
    name:'TodoListMenu',
    emits : [ 'change-filter'],  // emits는 자식이 부모에게 데이터 보낼때 사용
    setup(props, context){
        const filters = inject('filters')
        const filter = ref(0)//  .value가 있는 변경 가능한 객체로 반환
  // 그래서 filter는  value 키를 가지는 객체가된다.
        const state = computed( ()=>{
            return filters[filter.value].str
        })
        watch(  // 리스트 필터 의 변환 하는 값을 감지 한다.
            ()=>filter.value,
            (filter) => {
                context.emit('change-filter',filter)
            }
        )
        return { state, filter, filters }
    }
}

</script>

<style>

</style>