<template>
<div>
     <v-card>
        <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
                  <v-flex>
        <v-text-field
          label="Note Title"
         v-model="title" ></v-text-field>
      </v-flex>
            
      <v-flex>
       <v-select :items="items" label="Note color" v-model="color">
    </v-select>
      </v-flex>
            
            <v-flex>
        <v-text-field
          label="Note Text"
          multi-line
        v-model="text"></v-text-field>
      </v-flex>
              <v-btn color="gray" to="/">Cancle</v-btn>
             <v-btn color="primary" @click="sendData">Save</v-btn>
           
    </v-container>
    </v-card>
</div>

</template>

<script>
    import api from './api'
export default {
    name : 'new',
    data (){
        return {
            
            title : null,
            text:null,
            color:null,
            items:[
                'red',
                'blue',
                'cyan',
               'grey'
            ]
        }
    },
    methods :{
        sendData : function(){
            let data = {
                title : this.title,
                text : this.text,
                color:this.color
            };
            api.newNote(data)
            .then(() => {
                setTimeout(()=>{
                   this.$router.push('/') 
                },400);
              
            })
            .catch(err => console.log(err));
            
          
        }
    }
}
</script>

