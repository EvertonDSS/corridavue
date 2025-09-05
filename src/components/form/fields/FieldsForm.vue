<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>

    <input v-if="type === 'text'" :id="id" type="text" class="form-control" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />

    <input v-else-if="type === 'number'" :id="id" type="number" class="form-control" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />

    <select v-else-if="type === 'select'" :id="id" class="form-control" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
      <option disabled value="">Selecione...</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    type: { type: String, default: "text" },
    modelValue: [String, Number],
    options: { type: Array, default: () => [] }
  },
  emits: ["update:modelValue"]
}
</script>
