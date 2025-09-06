<template>
    <div class="container mt-4">
        <h1>Apostador</h1>
        <DynamicForm :fields="this.fields" @submit="saveForm" />
    </div>
</template>

<script>
import DynamicForm from '@/components/form/DynamicForm.vue';
import axios from 'axios';

export default {
    name: 'ApostadorPage',
    components: {
        DynamicForm
    },
    data() {

        return {
            cavalo: {},
            newCavalo: {},
            fields: [
                { id: "nome", label: "Nome", type: "text" }
            ]
        }

    },
    methods: {
        saveForm: async (data) => {
            try {
                console.log(data);

                const response = await axios.post("https://corrida-hasv.onrender.com/api/Apostador", data);

                console.log("Apostador salvo com sucesso:", response.data);

            } catch (err) {
                console.error("Erro ao salvar aposta:", err);
            }
        }
    }
}
</script>