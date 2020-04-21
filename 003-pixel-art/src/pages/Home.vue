<template>
  <div class="container">
    <h1>Pixel Art</h1>
    <div class="arena">
      <div class="config">
        <v-color-picker v-model="color" />
        <div class="btns-table">
          <span>Coluna</span>
          <div class="btns">
            <v-btn icon color="red"><v-icon>mdi-minus</v-icon></v-btn>
            <v-btn icon color="green"><v-icon>mdi-plus</v-icon></v-btn>
          </div>  
        </div>
        <div class="btns-table">
          <span>Linha</span>
          <div class="btns">
            <v-btn icon color="red"><v-icon>mdi-minus</v-icon></v-btn>
            <v-btn icon color="green"><v-icon>mdi-plus</v-icon></v-btn>
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
        console.log(event);
        if(event.buttons == 1){
          column.color  = this.color;
        }
        
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
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
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