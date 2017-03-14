<template>
      <div class="col-sm-12 text-left">
<div class="table-responsive">
<table class="table table-striped">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Desc</th>
      <th colspan="2"></th>
    </tr>
  </thead>

  <tbody>
      <tr v-for="item in contacts">
        <td>{{item.first_name}}</td>
        <td>{{item.last_name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.description}}</td>
        <td><a v-bind:href="editpath(item.id)">Edit</a></td>
        <td><a href="#" @click="remove(item)">remove</a></td>
      </tr>
      
  </tbody>
</table>
</div>
<br>

<a class="btn btn-primary pull-right" href="#/contact/add">New Contact</a>


</div>
</template>



<script>

    export default{
        data(){
            return{
                contacts:[]
            }
        },
        methods:{
            fetchData() {
                this.$http.get('http://localhost:8089/contacts').then(function(res) {
                    this.contacts = res.data;
                    console.log(res.data);
                })
            },
            editpath: function (id) {
                return '#/contact/'+id;
            },
            remove: function (contact){
              var r=confirm("Are you sure?")
              if(r){
                if(contact.id){
                  this.$http.delete('http://localhost:8089/contacts/'+contact.id).then(function(res) {
                        this.fetchData();
                        console.log(res.data);
                    })
                }
              }
            }

        },
        created(){
            this.fetchData();
        }
    }

    </script>