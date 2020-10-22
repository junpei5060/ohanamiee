<template>
    <div class="container">
      <header>
      <Header />
    </header>
        <table >
            <thead >
            <tr>
                <th class="number">No.</th>
                <th>タイトル</th>
                <th>想い出</th>
                <th>学生の名前</th>
                <th>詳細</th>
                <th>編集</th>
                <th>削除</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.content }}</td>
                <td>{{ task.person_in_charge }}</td>
                <td class="tekitou">
                    <router-link :to="{name: 'task.show', params: {taskId: task.id }}" 
                    class="btn-real">
                        <i class="fas fa-eye"></i>
                    </router-link>
                </td>
                <td>
                    <router-link :to="{name: 'task.edit', params: {taskId: task.id }}"
                    class="btn-real">
                        <i class="fas fa-key"></i>
                    </router-link>
                </td>
                <td>
                    <i v-on:click="deleteTask(task.id)" class="far fa-trash-alt" ></i>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
          <i v-on:click="show" class="btn-circle-fishy">新規作成</i>
          <modal name="hello-world" :draggable="true" :resizable="true" :width="500":height="700">
            <div class="modal-header">
              <h2>新規作成</h2>
            </div>
            <div class="modal-body">
              <Create />
              <i v-on:click="hide" class="fas fa-backspace fa-lg" ></i>
            </div>  
          </modal>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Create from './DekitaCreateComponent.vue'

    export default {
        data: function () {
            return {
                tasks: [],
                showContent: false
            }
        },
        methods: {
            getTasks() {
                axios.get('/api/dekita')
                    .then((res) => {
                        this.tasks = res.data;
                    });
            },
            deleteTask(id) {
                axios.delete('/api/dekita/' + id)
                    .then((res) => {
                        this.getTasks();
                    });
            },
            show : function() {
                  this.$modal.show('hello-world');
                },
            hide : function () {
                  this.$modal.hide('hello-world');
                },
          },
           
            mounted() {
                this.getTasks();
            },
            components: {
            Header,
            Create
          }
    }
</script>

<style scoped>
.container{
    background-color: #FFF;
    margin: 0 auto;
    padding: 0;
    overflow:hidden;
    width: 1200px;
    height: 100vh;
    max-width: 100%;
    height: auto;
}

table{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

table tr{
  border-bottom: solid 1px #eee;
  cursor: pointer;
}

table tr:hover{
  background-color: #d4f0fd;
}

table th:nth-child(1){
  text-align: center;
  width: 5%;
  padding: 15px 0;
  background-color:#CCFFFF;
}
table th:nth-child(2){
  text-align: center;
  width: 15%;
  padding: 15px 0;
  background-color:#CCFFFF;
}
table th:nth-child(3){
  text-align: center;
  width: 45%;
  padding: 15px 0;
  background-color:#CCFFFF;
}
table th:nth-child(4){
  text-align: center;
  width: 10%;
  padding: 15px 0;
  background-color:#CCFFFF;
}

table th:nth-child(5){
    background-color:#CCFFFF;
    text-align: center;
    width: 5%;
    padding: 15px 0;
}
table th:nth-child(6){
    background-color:#CCFFFF;
    text-align: center;
    width: 5%;
    padding: 15px 0;
}
table th:nth-child(7){
    background-color:#CCFFFF;
    text-align: center;
    width: 5%;
    padding: 15px 0;
}
table td:nth-child(1){
  text-align: center;
  width: 5%;
  padding: 15px 0;
}
table td:nth-child(2){
  text-align: center;
  width: 15%;
  padding: 15px 0
}
table td:nth-child(3){
  text-align: center;
  width: 45%;
  padding: 15px 0
}
table td:nth-child(4){
  text-align: center;
  width: 10%;
  padding: 15px 0
}

table td:nth-child(5){
    text-align: center;
    width: 5%;
    padding: 15px 0;
}
table td:nth-child(6){
    text-align: center;
    width: 5%;
    padding: 15px 0;
}
table td:nth-child(7){
    text-align: center;
    width: 5%;
    padding: 15px 0;
}


.btn-real {
  display: inline-block;
  text-decoration: none;
  color: rgba(152, 152, 152, 0.43);/*アイコン色*/
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 10px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #b5b5b5;
  text-decoration: none;
}
.btn-real i {
  line-height: 20px;
}
.btn-real:active {
  /*押したとき*/
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: none;
}
.btn-circle-fishy {
    display: inline-block;
    text-decoration: none;
    color: #FFF;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    background-image: linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
    transition: .4s;
    position: fixed;
    bottom: 16px;
    right: 28px;
    z-index: 1;
    opacity: 0.8;
}

.btn-circle-fishy:hover {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
}

.modal-header, .modal-body {
  padding: 5px 10px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}

</style>