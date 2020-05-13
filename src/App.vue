<template>
  <v-app>
    <v-toolbar dark fixed app>
      <v-toolbar-title>
        <div class="d-flex align-center">
          <div style="padding-left: 10px; ">
            Vue APP
          </div>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.icon" :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y dark class="hidden-md-and-up">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(item) in menu"
            :key="item.icon"
            :to="item.link"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-menu>
      
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
      menu: [
        { icon: "home", title: "Home", link:"/"},
        { icon: "about", title: "About",link:"/about"}
      ]
  }),
};
</script>
