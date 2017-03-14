<template>
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="./contacts">CRM</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
                <li class="active"><a href="./contacts">Contacts</a></li>
                <li class=""><a href="./contacts">demo1</a></li>
                <li class=""><a href="./contacts">demo2</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="./contacts" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="./contacts">Edit account</a></li>
            <li role="separator" class="divider"></li>
            <li><a rel="nofollow" data-method="delete" href="./users/sign_out">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
         props: ['myPage'],
       computed: {
          myPageType:function(){
             let name;
             switch(this.myPage){
               case 'index': name='首页';break;
               case 'page1': name='第一页';break;
               case 'page2': name='第二页';break;
               default:name='首页';break;
             }
            return name;
          }
       }

    }


</script>