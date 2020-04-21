<template>
  <div class="container">
    <h1>Pixel Art</h1>
    <div class="arena">
      <div class="config">
        <v-color-picker v-model="color" />
        <div class="btns-table">
          <span>Colunas</span>
          <div class="btns">
            <v-btn icon color="red" @click="removeCollumn"><v-icon>mdi-minus</v-icon></v-btn>
            <v-btn icon color="green" @click="addCollumn"><v-icon>mdi-plus</v-icon></v-btn>
          </div>  
        </div>
        <div class="btns-table">
          <span>Linhas</span>
          <div class="btns">
            <v-btn icon color="red" @click="removeRow"><v-icon>mdi-minus</v-icon></v-btn>
            <v-btn icon color="green" @click="addRow"><v-icon>mdi-plus</v-icon></v-btn>
          </div>  
        </div>
        
      </div>
      <div class="table">
        <table cellspacing="0" cellpadding="0">
          <tr v-for="(row, index_row) of matriz" :key="index_row">
            <td 
              v-for="(column, index_columns) of row.columns" 
              :key="index_columns"
              :style="`background:${column.color}`"
              @click="()=> handleClick(column)"
              @mouseover="(event)=> handleHover(event, column)"
              ></td>
          </tr>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
  import matriz from '../data/matriz';

  export default {
    name: "Home",
    data() {
      return {
        color: "",
        matriz: matriz
      }
    },
    methods: {
      handleClick(column) {
        column.color  = this.color;
      },
      handleHover(event, column){
        if(event.buttons == 1){
          column.color  = this.color;
        }
      },
      addRow(){
        const lastRow = this.matriz[this.matriz.length - 1];
        const tamanho = lastRow ? lastRow.columns.length : 1;        
        const columns = [];
        // anteriorimente eu tinha usado o fill() mas o vuejs intepreta como objetos iguais
        for(let i = 0; i< tamanho; i++){
          columns.push({
            color: '#fff',
          })
        }
        this.matriz.push({
          columns
        });        
      },
      removeRow(){
        this.matriz.splice(this.matriz.length - 1, 1);        
      },
      addCollumn(){
        this.matriz = this.matriz.map(item => {
          item.columns.push({
            color: '#fff'
          })
          return item;
        });
      },
      removeCollumn(){
       this.matriz = this.matriz.map(item => {
          item.columns.splice(item.columns.length - 1, 1)
          return item;
        }); 
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container{
    h1{
      text-align: center;
    }

    .arena{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .config{
        display: flex;
        flex-direction: column;

        .btns-table{
          border-radius: 4px;
          margin-top: 16px;
          contain: content;
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);          
          width: 100%;
          display: flex;
          font-size: 18px;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 16px;

          .btns{
            button{
              margin-right: 16px;
            }
            i{
              font-size: 32px;
            }
          }
        }
      }
    }

    .table{
       display: flex;
       justify-content: center;
       align-items: center;
       flex: 1;
      table{
        border: none;
      }
       td{
         height: 24px;
         width: 24px;
         border: 0.5px solid #afafb4;

         &:hover{
           cursor: pointer;
         }

       }
    }
  }

</style>