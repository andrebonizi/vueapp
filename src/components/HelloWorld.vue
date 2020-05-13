<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4" cols="12">
        Hello World!
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          
        </h1>
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="60%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">{{ slide.text }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      
      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
      ],
      slides: [
        {
          text:'First',
          img: '../../public/img/transparent.png'
        },
        {
          text:'Second',
          img: '../../public/img/logo.png'
        },
        {
          text: 'Third',
          img: '../../public/img/logo.png'
        },
      ]
    }),
  }
</script>
