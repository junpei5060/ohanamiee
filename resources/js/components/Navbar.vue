<template>
  <div>
    <body>
      <header>
            <h1>
                <a href="/">Ohanamiee</a><br>
            </h1>
            <nav class="pc-nav">
                <ul>
                    <li><router-link to="/login" class="btn-flat-dashed-border">Login</router-link></li>
                </ul>
            </nav>
        </header>
    </body>
  </div>
</template>

<script>
    export default {}
</script>

<style scoped>
header {
padding: 32px 4% 0px;
position: fixed;
top: 0;
width: 100%;
background-color: transparent;
display: flex;
align-items: center;
z-index: 2;
font-family: monospace;
}
h1 {
margin: 0; padding: 0;
font-size: 32px;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-left: 250px;
}

li router-link{
    text-decoration: none;
}


h1 a {	
text-decoration: none;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

nav {
margin: 0 0 0 auto;
}
ul {
list-style: none;
margin: 0 auto;
display: flex;
margin-right: 250px;
font-weight: bold;
}
li {
margin: 0 0 0 50px;
font-size: 20px;
font-weight: bold;
text-decoration: none;
color: #666666;
}
v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

.btn-flat-dashed-border {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: dashed 1px #67c5ff;
  border-radius: 3px;
  transition: .4s;
}

.btn-flat-dashed-border:hover {
  border-style: dotted;
  color: #679efd;
}

/* スマホ対応 */
@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
body{
  overflow:hidden;
}


header {
padding: 30px 4% 10px;
position: fixed;
top: 0;
width: 100%;
background-color: transparent;
display: flex;
align-items: center;
z-index: 2;
}

h1{
margin: 0; padding: 0;
font-size: 16px;
}

ul{
list-style: none;
display: flex;
margin-right: 30px;
font-weight: bold;
}

li{
font-size: 12px;
}
}


</style>