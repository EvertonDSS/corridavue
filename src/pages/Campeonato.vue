<template>
    <div class="container mt-4">
        <h1>Campeonato</h1>
        <DynamicForm :fields="this.fields" @submit="saveForm" />
    </div>
</template>

<script>
import DynamicForm from '@/components/form/DynamicForm.vue';
import axios from 'axios';

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

                const response = await axios.post("https://corrida-hasv.onrender.com/Campeonato", data);

                console.log("Campeonato salvo com sucesso:", response.data);

            } catch (err) {
                console.error("Erro ao salvar campeonato:", err);
            }
        }
    }
}
</script>