<template>
     <v-app>
         
  <div id="app">
    <v-toolbar dark color="primary">
        
    <v-toolbar-title>Notes App</v-toolbar-title>
        <v-spacer></v-spacer>
       <v-flex lg6 md6 sm8 xs8 > <v-text-field prepend-icon="search" label="Search" flat solo-inverted></v-text-field></v-flex>
  </v-toolbar>
      <div class="container">
    <router-view/>
      </div>
  </div>
    </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>


