<template>
    <div class="container mt-4">
        <h1>Cadastro</h1>
        <DynamicForm :fields="this.fields" @submit="saveForm" />
    </div>
</template>

<script>
import DynamicForm from '@/components/form/DynamicForm.vue';



export default {
    name: 'CavaloPage',
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
                
            } catch (err) {
                alert("Erro ao salvar usuário")
            }
            
        }
    }
}
</script>