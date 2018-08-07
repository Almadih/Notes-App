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
         v-model="title"></v-text-field>
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
             <v-btn color="primary" @click="save">Save</v-btn>
           
    </v-container>
    </v-card>
</div>
</template>

<script>
    import api from './api'
export default {
    name : 'edit',
    data (){
        return {
            id:null,
            title : null,
            text : null,
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
        save (){
            let data = {
                text : this.text,
                title : this.title,
                color : this.color,
                id:this.$route.params.id
            };
            
            api.update(data).then( () =>{
             
                setTimeout(()=>{
                  this.$router.push('/')  
                },400)
                
                
            })
            
            
            
        }
 
        
    },
 created (){
     api.find(this.$route.params.id).then(data =>{
         console.log(data);
      this.title = data.title;
      this.text = data.text;
      this.id = data.id
      this.color = data.color
     })
     
    }
 }

</script>