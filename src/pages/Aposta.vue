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
          id: "apostadorId", label: "Apostador", type: "select", value: "", options: [
            { value: "A", text: "Categoria A" },
            { value: "B", text: "Categoria B" },
            { value: "C", text: "Categoria C" }
          ]
        },
        {
          id: "cavaloId", label: "Cavalo", type: "select", value: "", options: [
            { value: "C1", text: "Cavalo 1" },
            { value: "C2", text: "Cavalo 2" },
            { value: "C3", text: "Cavalo 3" }
          ]
        },
        {
          id: "campeonatoId", label: "Campeonato", type: "select", value: "", options: [
            { value: "C1", text: "Campeonato 1" },
            { value: "C2", text: "Campeonato 2" },
            { value: "C3", text: "Campeonato 3" }
          ]
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
        const apostadoresResponse = await fetch("https://localhost:7052/api/Apostador");
        const apostadoresData = await apostadoresResponse.json();
        this.fields.find(f => f.id === "apostadorId").options = apostadoresData.map(a => ({
          value: a.id,
          text: a.nome
        }));

        const cavalosResponse = await fetch("https://localhost:7052/api/Cavalo");
        const cavalosData = await cavalosResponse.json();
        this.fields.find(f => f.id === "cavaloId").options = cavalosData.map(c => ({
          value: c.id,
          text: c.nome
        }));

        const campeonatosResponse = await fetch("https://localhost:7052/Campeonato");
        const campeonatosData = await campeonatosResponse.json();
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