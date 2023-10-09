<template>
    <div id="s-table">
    </div>
</template>


<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

import { createTable } from '../packages/s-table/index';

onMounted(() => {
    createTable('s-table', {
        data: [
            { id: 1, name: 'Bob', wealth: 230.20 },
            { id: 2, name: 'Alice', wealth: 180.55 },
            { id: 3, name: 'John', wealth: 67.23 },
        ],

        columns: [ 
            {
                renderer(ctx) {
                    ctx.td.innerHTML = ctx.item.name;
                },
            },
            {
                renderer(ctx) {
                    ctx.td.innerHTML = ctx.item.wealth;
                },
            }
        ],
    });
});
</script>



<style>
td {
    background-color: rgb(238, 238, 238);
    border: 1px solid black;
    padding: 4px 16px;
}
</style>