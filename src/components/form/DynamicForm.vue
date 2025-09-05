<template>
  <form @submit.prevent="onSubmit">
    <FieldsForm
      v-for="field in fields"
      :key="field.id"
      v-bind="field"
      v-model="formData[field.id]"
    />
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</template>

<script>
import { reactive } from "vue"
import FieldsForm from "./fields/FieldsForm.vue"

export default {
  name: "DynamicForm",
  components: { FieldsForm },

  props: {
    fields: { type: Array, required: true }
  },

  emits: ["submit"],

  setup(props, { emit }) {
    // cria objeto reativo com os valores iniciais
    const formData = reactive({})
    props.fields.forEach(f => {
      formData[f.id] = f.value || ""
    })

    const onSubmit = () => {
      emit("submit", formData)
            props.fields.forEach(f => {
        formData[f.id] = ""
      })

    }

    return {
      formData,
      onSubmit
    }
  }
}
</script>