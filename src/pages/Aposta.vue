<template>
  <div class="container mt-4">
    <h1>Aposta</h1>
    <DynamicForm :fields="this.fields" @submit="saveForm" />
  </div>
</template>




<script>
import DynamicForm from '@/components/form/DynamicForm.vue';
import axios from 'axios';

export default {
  name: 'ApostaPage',
  components: {
    DynamicForm
  },
  data() {
    return {
      fields: [
        {
          id: "apostadorId", label: "Apostador", type: "select", value: "", options: []
        },
        {
          id: "cavaloId", label: "Cavalo", type: "select", value: "", options: []
        },
        {
          id: "campeonatoId", label: "Campeonato", type: "select", value: "", options: []
        },
        {
          id: "valorTotal", label: "Valor Total", type: "number", value: ""
        },
        {
          id: "valorAposta", label: "Valor da Aposta", type: "number", value: ""
        },
        {
          id: "porcentagem", label: "Porcentagem", type: "number", value: ""
        }
      ]
    }
  },
  mounted() {
    this.loadOptions();
  },
  methods: {
    async loadOptions() {
      try {

        const { data: apostadoresData } = await axios.get("https://corrida-hasv.onrender.com/api/Apostador");
        this.fields.find(f => f.id === "apostadorId").options = apostadoresData.map(a => ({
          value: a.id,
          text: a.nome
        }));

        const { data: cavalosData } = await axios.get("https://corrida-hasv.onrender.com/api/Cavalo");
        this.fields.find(f => f.id === "cavaloId").options = cavalosData.map(c => ({
          value: c.id,
          text: c.nome
        }));

        const { data: campeonatosData } = await axios.get("https://corrida-hasv.onrender.com/Campeonato");
        this.fields.find(f => f.id === "campeonatoId").options = campeonatosData.map(c => ({
          value: c.id,
          text: c.nome
        }));
      } catch (error) {
        console.error("Erro ao carregar opções:", error);
      }
    },
    saveForm: async (data) => {
      try {
        console.log(data);

        const response = await axios.post("https://corrida-hasv.onrender.com/api/Aposta", data);

        console.log("Aposta salva com sucesso:", response.data);

      } catch (err) {
        alert("Erro ao salvar aposta");
        console.error("Erro ao salvar aposta:", err);
      }
    }
  }
}
</script>