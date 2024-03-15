<template>
      <div id="appMain">
       <button @click="increment">Count up: {{ counterUp }}</button>
       <button @click="decrement">Count down: {{ counterDown }}</button> 
      </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';

const counterUp = ref('');
const counterDown = ref('');

onMounted(() => {
  counterUp.value = 0;
  counterDown.value = 100;
});

function increment() {
    counterUp.value++;
  }

  function decrement() {
    counterDown.value--;
  }

</script>


<style>
button {
    background-color: purple !important;
    border-style: none;
 	  color: white;
  	margin: 25px;
    height: 35px;
    border-radius: 12px;
}
</style>