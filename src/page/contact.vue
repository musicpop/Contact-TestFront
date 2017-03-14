<template>
<div>
    <div class="container-fluid">
     <legend>Contact Details</legend>
    <div class="col-sm-6 col-md-6 col-lg-6">
    <form class="form" id="edit_contact" v-on:submit.prevent="updateContact" >

    <fieldset>
       
        <div class="form-group">
            <label class="control-label" for="first_name">First Name</label><br>
            <input class="form-control" type="text" v-model="contact.first_name" name="first_name" id="first_name" required>
        </div>
        <div class="form-group">
            <label class="control-label" for="last_name">Last Name</label><br>
            <input class="form-control" type="text" v-model="contact.last_name" name="last_name" id="last_name" required>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="contact_email">Email</label><br>
            <input class="form-control" type="text" v-model="contact.email" name="email" id="contact_email" required>
        </div>
        <div class="form-group">
            <label class="control-label" for="contact_desc">Description</label><br>
            <input class="form-control" type="text" v-model="contact.description" name="description" id="contact_desc" required>
        </div>
    </fieldset>

   

  <div class="actions">
    <input type="submit" name="commit" :value="message" class="btn btn-primary pull-right">
  </div>
</form>
</div>
<div class="col-sm-6 col-md-3 col-lg-3">
<ul>
        <li class="alert alert-danger" v-if="!validation.first_name">First Name cannot be empty.</li>
        <li class="alert alert-danger" v-if="!validation.last_name">Last Name cannot be empty.</li>
        <li class="alert alert-danger" v-if="!validation.email">Please provide a valid email address.</li>
        <li class="alert alert-danger" v-if="!validation.des">Description cannot be empty.</li>
      </ul>
      <div class="alert alert-success collapse" role="alert">
  You successfully add or update a contact</a>.
</div>
</div>
</div>

</div>      
</template>



<script>

    export default{
        props: {
           message:{
               type:String,
               default:'update'
           }
        },
        data(){
            return{
                contact:{
                first_name:"",
                last_name:"",
                email:"",
                description:""
                }
            }
        },
        // 数据验证
        computed: {
            validation: function () {
            var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              return {
                first_name: !!this.contact.first_name.trim(),
                email: emailRE.test(this.contact.email),
                last_name: !!this.contact.last_name.trim(),
                des: !!this.contact.description.trim()
              }
            },
            isValid: function () {
              var validation = this.validation
              return Object.keys(validation).every(function (key) {
                return validation[key]
              })
            }
          },
        methods:{
            fetchData() {
                this.$http.get('http://localhost:8089/contacts/'+this.$route.params.id).then(function(res) {
                    this.contact = res.data;
                })
            },
            updateContact(){
                if (this.isValid) {
                    //判断是新增还是编辑
                    if(this.contact.id){
                        this.$http.put('http://localhost:8089/contacts/'+this.contact.id,this.contact).then(function(res) {
                            $('.alert').show();
                            $(".alert").delay(2000).slideUp(200, function() {
                                $(this).hide();
                            });
                            console.log(res.data);
                        })
                    }else{
                        this.contact.id = "";
                        this.$http.post('http://localhost:8089/contacts',this.contact).then(function(res) {
                            $('.alert').show();
                            this.contact.id = res.data.id;
                        })
                    }
                }
            }
        },
        created(){
            //判断是新增还是编辑
            if(this.message != 'add'){
                this.fetchData();
            }
        },


    }

</script>