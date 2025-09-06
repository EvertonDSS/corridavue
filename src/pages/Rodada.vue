<template>
    <div class="container mt-4">
        <h1>Rodada</h1>
        <DynamicForm :fields="this.fields" @submit="saveForm" />

        <h1>Rodada do campeonato</h1>
        <DynamicForm :fields="this.fieldsRodadaCampeonato" @submit="saveFormRodadaCampeonato" />

    </div>
</template>

<script>
import DynamicForm from '@/components/form/DynamicForm.vue';
import axios from 'axios';

export default {
    name: 'RodadaPage',
    components: {
        DynamicForm
    },
    data() {

        return {
            cavalo: {},
            newCavalo: {},
            fields: [
                { id: "nomeRodada", label: "Nome Rodada", type: "text" }
            ],
            fieldsRodadaCampeonato: [
                { id: "campeonatoId", label: "Campeonato", type: "select", value: "", options: [] },
                { id: "valorRodada", label: "Valor da Rodada", type: "number", value: "" },
                { id: "porcentagem", label: "Porcentagem", type: "number", value: "" },
                { id: "rodadaId", label: "Rodada", type: "select", value: "", options: [] },
                { id: "valorPremio", label: "Valor do Prêmio", type: "number", value: "" }
            ]
        }

    },
    mounted() {
        this.loadOptions();
    },
    methods: {
        async loadOptions() {
            try {
                // Campeonatos
                const { data: campeonatosData } = await axios.get("https://corrida-hasv.onrender.com/Campeonato");
                this.fieldsRodadaCampeonato.find(f => f.id === "campeonatoId").options = campeonatosData.map(c => ({
                    value: c.id,
                    text: c.nome
                }));

                // Rodadas
                const { data: rodadasData } = await axios.get("https://corrida-hasv.onrender.com/api/Rodada");
                this.fieldsRodadaCampeonato.find(f => f.id === "rodadaId").options = rodadasData.map(r => ({
                    value: r.id,
                    text: r.nomeRodada
                }));

            } catch (error) {
                console.error("Erro ao carregar opções:", error);
            }
        },
        saveForm: async (data) => {
            try {
                console.log(data);

                const response = await axios.post("https://corrida-hasv.onrender.com/api/Rodada", data);

                console.log("Rodada salva com sucesso:", response.data);

            } catch (err) {
                console.error("Erro ao salvar rodada:", err);
            }
        },
        saveFormRodadaCampeonato: async (data) => {
            try {
                console.log(data);

                const response = await axios.post("https://corrida-hasv.onrender.com/api/Rodada/Campeonato", data);

                console.log("Rodada salva com sucesso:", response.data);

            } catch (err) {
                console.error("Erro ao salvar rodada:", err);
            }
        }
    }
}

</script>