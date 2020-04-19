<template>
  <div class="container">
    <h1>List Of Priorities</h1>
    <form>
      <input type="text" placeholder="Digite here your new priority" />
      <button>Add Priority</button>
    </form>
    <ul>
      <draggable v-model="priorities">
        <transition-group>
          <li v-for="priority of priorities" :key="priority.id" class="item">
            <span>{{priority.name}}</span>
            <button>
              <IconBase icon-name="write" iconColor="#e75146" >
                <IconDelete />
              </IconBase>
            </button>
          </li>
        </transition-group>
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

import IconBase from '../components/IconBase.vue';
import IconDelete from '../components/icons/IconDelete.vue';

export default {
  name: 'Home',
  components: {
    IconBase,
    IconDelete,
    draggable,
  },
  data() {
    return {
      priorities: [
        { name: 'Watch the louças', id: 1 },
        { name: 'Watch the louças', id: 2 },
        { name: 'Watch the louças', id: 3 },
        { name: 'Watch the louças', id: 4 },

      ],
    };
  },
  created() {
    this.loadPriorities();
  },
  methods: {
    addPriority() {

    },
    removePriority() {

    },
    loadPriorities() {

    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  max-width: 1125px;
  background: #fff;
  box-shadow: 0 0 15px #dedede;
  h1{
    color: #4fc08d;
  }

  form{
    display: flex;
    flex-direction: row;
    padding: 32px;
    max-width: 680px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;


    input{
      font-size: 18px;
      flex: 1;
      margin-right: 16px;
      color: #273849;
      padding: 8px 16px;
      border-radius: 4px;
      border: 1px solid #e3e3e3;

      &:focus{
        outline: none;
        border: 1px solid #4fc08d;
      }
    }

    button{
        font-size: 18px;
        background: #4fc08d;
        border: 1px solid #4fc08d;
        color: #fff;
        font-weight: bold;
        border-radius: 4px;
        border: none;
        padding: 8px 16px;
      }

  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;

    li{
      width: 100%;
      max-width: 680px;
      margin: 0 auto;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      border: 1px solid #dedede;
      border-radius: 4px;
      box-shadow: 0 0 5px #dedede;
      margin-bottom: 16px;
      padding: 16px;
      transition: 0.5s;

      &:hover{
        cursor: pointer;
        box-shadow: 0 0 10px #b3b1b1;
      }
      button{
        background: none;
        border: none;

        &:hover{
          cursor: pointer;
        }
      }

    }
  }
}
</style>
