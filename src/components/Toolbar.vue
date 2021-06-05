<template>
    <div class="main-toolbar">
  
      <v-app-bar
        color="transparent"
        height="80"
        elevation="0"
        dark
      >
        <v-toolbar-title class="title-toolbar"> 
             Movies
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text color= #000>
          Button
        </v-btn>

        <v-btn text color= #000>
          Button
        </v-btn>
      </v-app-bar>
    </div>
</template>

<script>
export default ({
    name: 'Toolbar',
})
</script>

<style lang="scss">
.main-toolbar {
    margin: 0 100px;
    .title-toolbar {
        color: #ff0000;
        font-family: 'Ubuntu-Bold';
    }
}

</style>
