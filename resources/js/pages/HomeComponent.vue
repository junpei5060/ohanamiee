<template>
    <div class="container">
    <header>
      <Navbar />
    </header>
        <div class="box">
            <div id="bgimg"></div>
            <span class="title">児童の「できた」でみんなを笑顔に</span>
            <span class="subtitle">教員のこころをテクノロジーで支える</span>
            <div class="question">
                <router-link class="no-button" to="/register">無料で新規登録</router-link>
            </div>
                <router-link class="login" to="/login">すでにアカウントをお持ちの方はこちら</router-link>
        </div>
         <div class="about">
        <h1 id="about">Ohanamieeとは</h1>
        <div class="about-text"> 
            <P class="about-text1">先生のやりがいを創りたい</P>
            <P class="about-text2">Ohanamieeは、そんな想いから誕生しました。</P>
            <P class="about-text3"><br>
            児童の「できた」を記録し、保護者、教員と共有 児童の「できた」から適切な次の「できた」を提示する</P>
            <P class="about-text4">児童の「できた」の数だけ、教員のやりがいが増える</P>
            <p class="about-text5">Ohanamieeは全ての先生のやりがいを増やします</p>
        </div>
        <div>
        <div class="course">
            <h1 id="course">Ohanamieeが選ばれる理由</h1>
            <div class="course-text"> 
            <P class="course-title1">Ohanamieeは多くの先生に選ばれています</P>
            <P class="course-title2">Ohanamieeの
                <span class="nubmer">3つ</span>の特徴</P>
            </div>
        

        <div class = "course-introdunction">
            <img class="course-img1" src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="画像です" >
            <div class="course-content">
                <p class="course-text1">児童との想い出を記録<p>
                <p class="course-text2">先生という職業はたくさんの児童と接します。<br>
                一人ひとりの児童が違う性格で個性豊かです<br>
                Ohanamieeを使用すれば、児童一人ひとりの想い出を<br>
                一生の想い出として記録することができます<br>
                Ohanamieeを使用して、やりがいを手に入れましょう</p>
            </div>
        </div>
    
        <div class = "course-introdunction2">
            <div class="course-content2">
                <p class="course-text2-1">圧倒的な業務効率化<p>
                <p class="course-text2-2">学校現場はまだまだアナログな世界です<br>
                Ohanamieeを使用すれば、児童の行動を簡単に記録できます<br>
                連絡帳などを書く時も記録が残っているので<br>
                児童一人ひとりに合わせた正確な情報をすぐに記載できます<br>
                Ohanamieeを使用すれば連絡帳や通信簿に割いていた時間を削減できます</p>
            </div>
            <img class="course-img2" src="https://images.unsplash.com/photo-1523473125050-1c9405e8b208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="画像です" >
        </div>

        <div class = "course-introdunction">
        <img class="course-img3" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="画像です" >
            <div class="course-content">
                <p class="course-text3-1">本来の"教育"に集中できる<p>
                <p class="course-text3-2">先生の役割は児童に学びを促し<br>
                立派な大人へと成長させることです<br>
                しかし、現場の先生はたくさんの業務を抱え、児童ときちんと向き合う時間がありません<br>
                Ohanamieeを使用すれば、児童の情報管理を削減し<br>
                本来の"教育"に集中できます</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
components: {
    Navbar,
  }
}

</script>

<style scoped>
.container{
    background-color: #FFF;
    margin: 0 auto;
    padding: 0;
    overflow:hidden;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    height: auto;
    

}

.box{
    position: relative;
    background-color: #fff;
}

#bgimg{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 400px;
width: 100%;
background: url('https://images.unsplash.com/photo-1556760333-8fafc6415d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
z-index: 1;
margin-top: 96px;
object-fit: cover;
font-family: monospace;
opacity: 0.8;

}



.title{
font-size: 42px;
font-weight: bold;
color:#666666;
width: 100%; 
height: 1.5em;
text-align: center;
position: absolute;
margin: auto;
top: 0;
bottom: 150px;
z-index: 2;
animation-name: fadein;
animation-duration: 2s;
font-family :Quicksand, sans-serif;/*Google Font*/

}
@keyframes fadein {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
.subtitle{
font-size: 22px;
font-weight: bold;
color:#666666;
width: 100%; 
height: 1.5em;
text-align: center;
position: absolute;
margin: auto;
top: 0;
bottom: 60px;
z-index: 2;
animation-name: fadein;
animation-duration: 2s;
font-family :Quicksand, sans-serif;/*Google Font*/

}
@keyframes fadein {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}


.no-button{
position: absolute;
top: 63%;
left: 50%;
-ms-transform: translate(-50%,-50%);
-webkit-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
/*以下装飾*/
margin:0;/*余計な隙間を除く*/
font-size: 20px;/*文字サイズ*/
border: solid #FFAAFF 2px; /*線で囲う*/
padding: 7px;/*文字と線の間の余白*/
color: #666666;/*文字色*/
text-decoration: none;/*下線を表示させない*/
z-index: 3;
width: 300px;
text-align: center;
background: #FFAAFF;
border-radius: 2%;
}

.no-button:hover{
    background: rgba(255, 255, 255, 0.3);
}

.login{
color:#666666 ;
width: 100%; 
height: 9.5em;
text-align: center;
position: absolute;
margin: auto;
top: 300px;
bottom: 0px;
z-index: 2;
}

.about{
font-weight: bold;
color:#666666;
width: 100%; 
height: 1.5em;
text-align: center;
position: absolute;
margin:auto;
top: 300px;
bottom: 0px;
z-index: 2;
animation-name: fadein;
animation-duration: 2s;
font-family :Quicksand, sans-serif;/*Google Font*/

}

#about{
    color: #FF8C00;
    background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about h1{
    color: #ffd61a;
    font-size: 32px;
    font-weight: bold;
    padding-top: 20px;
}

.about-text1{
    padding-top: 20px;
    font-size: 14px;
}
.about-text2{
    padding-top: 30px;
    font-size: 14px;
}
.about-text3{
    padding-top: 30px;
    font-size: 14px;
}
.about-text4{
    padding-top: 40px;
    font-size: 14px;
}
.about-text5{
    padding-top: 40px;
    font-size: 14px;
}

 .course{
    text-align: center;
    background-color: #F8F8F8;
}

.course h1{
    font-size: 32px;
    font-weight: bold;
    padding-top: 30px;
    color: #40E0D0;
}

.nubmer{
    font-size: 24px;
    color: #40E0D0;
}

.course-title1{
    padding-top: 30px;
    font-size: 14px;
}
.course-title2{
    padding-top: 20px;
    font-size: 14px;
}

.course-introdunction{
    display:flex;
    margin-top: 80px;
}

.course-img1{
    height: 400px;
    width: 600px;
    margin-left: 300px;
}

.course-content{
    background-color: #fafafa;
    height: 400px;
    width: 600px;

}

.course-text1{
    font-size: 24px;
    font-weight: bold;
    margin-left: 100px;
    margin-top: 80px;
}

.course-text2{
    font-size: 16px;
    margin-top: 40px;
    margin-left: 50px;
    line-height: 24px;
}
.course-introdunction2{
    display:flex;
    margin-top: 0;
}

.course-img2{
    height: 400px;
    width: 600px;
    margin-right: 200px;
}

.course-content2{
    background-color: #fafafa;
    height: 400px;
    width: 1200px;

}

.course-text2-1{
    font-size: 24px;
    font-weight: bold;
    margin-left: 160px;
    margin-top: 120px;
}

.course-text2-2{
    font-size: 16px;
    margin-top: 40px;
    margin-left: 100px;
    line-height: 24px;

}

.course-introdunction3{
    display:flex;
    margin-top: 0;
}

.course-img3{
    height: 400px;
    width: 600px;
    margin-left: 300px;
}

.course-content3{
    background-color: #fafafa;
    height: 400px;
    width: 600px;

}

.course-text3-1{
    font-size: 24px;
    font-weight: bold;
    margin-left: 100px;
    margin-top: 120px;
}

.course-text3-2{
    font-size: 16px;
    margin-top: 40px;
    margin-left: 120px;
    line-height: 24px;
    max-width: 450px;
}

</style>