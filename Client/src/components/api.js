let baseUrl = 'https://fabulous-doll.glitch.me/';
export default {
    
    fetch:async function(){
        let res = await fetch(baseUrl+'api');
        
        let data = await res.json();
        
        return data;
    },
    delete: async function(id){
        fetch(baseUrl+'api/'+id,{
            method:'delete'
        }) 
    },
    newNote: async function(data){
        fetch(baseUrl+'api/new',{
        method : 'post',
        headers :new Headers({
        'Content-type' : 'application/json'}),
        body : JSON.stringify(data)})
    },
    find: async function (id){
        let res = await fetch(baseUrl+'api/'+id,{method:'post'});
        let data = await res.json();
        
        return data;
    },
    update: async function (data){
         fetch(baseUrl+'api/update/'+data.id,{
                method : 'post',
                headers :new Headers({
                'Content-type' : 'application/json'}),
                body : JSON.stringify(data)
            })
        
    }
};