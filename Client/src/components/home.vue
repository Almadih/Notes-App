<template>
<div >
    <h2>home</h2>
    
        <v-btn fixed dark fab bottom right color="pink" append to="/new">
              <v-icon >add</v-icon>
            </v-btn> 
    
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
         
     <v-layout row wrap slot="activator">
          <v-progress-circular indeterminate color="primary" :size="40" v-if="loading"></v-progress-circular>
<v-flex xs12 lg6 md6 v-for="card in cards" :key="card.id">
            <v-card :color="card.color" class="white--text" hover transition="slide-y-transition">
              <v-card-title primary-title>
<div>                <h2>{{card.title}}</h2><br>
                <div>{{card.text}}</div></div>
              </v-card-title>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon v-bind:to="{name:'edit',params:{id:card.id}}">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn icon @click="del(card.id)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
    </v-layout>
    </v-container>
    <v-snackbar :timeout="3000" :bottom="true" v-model="snack">Connection Error</v-snackbar>
</div>
</template>

<script>
import api from './api'
export default {

    
    
    name : 'home',
    data (){
        return {
            cards : [],
            loading:true,
            snack:false
        }
    },
    methods : {
    del(id){
       if(confirm('Do you want to delete?')){
        api.delete(id).then(()=>{
            setTimeout(()=>{
            api.fetch().then(data =>{
            this.cards = data;
        })
            },600)
       })
        
        }},
        
        tes(){
            console.log('ggg');
        }
      
       },
   created (){

        api.fetch().then(data =>{
            this.cards = data;
            this.loading = false;
        })

    },
watch:{
'this': function(){
            api.fetch().then(data =>{
            this.cards = data;
        })
        }
}
    }
</script>

<style scoped>
.btn--floating .icon {
    height: auto;
    width: auto;
}
    .progress-circular{
       left: 50%;
  top: 50%;
  position: fixed;
    }
</style>