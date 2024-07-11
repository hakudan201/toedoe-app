<template>
  <div class="card mt-2">
    <ul class="list-group list-group-flush" v-if="tasks.length && show">
      <Task
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @update="$emit('updated', $event)"
        @completed="$emit('completed', $event)"
        @removed="$emit('removed', $event)"
      />
    </ul>
  </div>
</template>

<script setup>
import Task from "./Task.vue";
defineProps({
  tasks: Array,
  show: {
    type: Boolean,
    default: true,
  },
});
</script>
