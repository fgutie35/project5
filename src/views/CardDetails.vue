<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
   <div class="mb-2 text-2x1 font-bold px-3">
    {{ route.params.id }}

   </div>
</template>