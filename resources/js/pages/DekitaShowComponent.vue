
<template>
    <div class="container">
        <div>
            <div >
                <form>
                    <div >
                        <label for="id" >No.</label>
                        <input type="text" class="feedback-input" readonly id="id"
                               v-model="task.id">
                    </div>
                    <div >
                        <label for="title" >タイトル</label>
                        <input type="text" class="feedback-input" readonly id="title"
                               v-model="task.title">
                    </div>
                    <div >
                        <label for="person-in-charge">学生の名前
                        </label>
                        <input type="text" class="feedback-input" readonly id="person-in-charge"
                               v-model="task.person_in_charge">
                    </div>
                    <div >
                        <label for="content">想い出</label>
                        <textarea type="text" class="feedback-input" readonly id="content"
                               v-model="task.content"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            taskId: String
        },
        data: function () {
            return {
                task: {}
            }
        },
        methods: {
            getTask() {
                axios.get('/api/dekita/' + this.taskId)
                    .then((res) => {
                        this.task = res.data;
                    });
            }
        },
        mounted() {
            this.getTask();
        }
    }
</script>

<style scoped>
.container{
    margin-top: 200px;
    background:rgb(30,30,40);
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);


form { max-width:420px; margin:50px auto; }

.feedback-input {
  color:#666666;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid #CC6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px solid #CC4949; }

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background:#CC6666;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:white;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}
[type="submit"]:hover { background:#CC4949; }
</style>

