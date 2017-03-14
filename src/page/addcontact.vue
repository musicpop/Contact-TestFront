<template>
    <div>
        <div>
             <contact message="add"></contact> 
        </div>
    </div>
</template>



<script>
    import contact from './contact.vue'
    export default{
        components:{ contact},
        data(){
            return{
                data:'page1'
            }
        }
    }

    </script>