<template>
  <label :for="data.id" :class="customClassLabel">Stuck:</label>
  <select :name="id + 's'" :id="data.id" :class="customClassSelect">
    <option v-for="option in data.options" :key="option.value">
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["data", "customClassLabel", "customClassSelect"],
};
</script>
