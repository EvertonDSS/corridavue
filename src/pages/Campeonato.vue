<template>
    <div class="container mt-4">
        <h1>Campeonato</h1>
        <DynamicForm :fields="this.fields" @submit="saveForm" />
    </div>
</template>

<script>
import DynamicForm from '@/components/form/DynamicForm.vue';

export default {
    name: 'CampeonatoPage',
    components: {
        DynamicForm
    },
    data() {

        return {
            cavalo: {},
            newCavalo: {},
            fields: [
                { id: "nome", label: "Nome", type: "text" },
                { id: "ano", label: "Ano", type: "number" }
            ]
        }

    },
    methods: {
        saveForm: async (data) => {
            try {
                console.log(data);

            } catch (err) {
                alert("Erro ao salvar usuário")
            }

        }

    }
}   
</script>
