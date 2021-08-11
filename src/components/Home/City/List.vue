<template>
  <div class="list-wrapper">
    <VueSlickCarousel v-if="data.length !== 0" v-bind="slickOptions">
      <div
        class="list-item"
        v-for="(item, i) in data.hourly.slice(0, 6)"
        :key="i"
      >
        <img
          v-if="item.weather[0].main === 'Clear'"
          src="@/assets/images/small-icon-sunny.png"
          class="item-condition"
          alt=""
        />
        <img
          v-else
          src="@/assets/images/small-icon-cloudy.png"
          class="item-condition"
          alt=""
        />
        <p class="text-[#9CA3AF] text-base mb-1">{{ item.temp | toWhole }}º</p>
        <p class="text-[#9CA3AF] text-xs lg:text-sm">
          {{
            new Date(item.dt * 1000 + data.timezone_offset * 1000)
              | military_time
          }}
        </p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      infinite: true,
      dots: false,
      centerMode: true,
      centerPadding: "20px",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 992,
          settings: {
            centerMode: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
      ],
    },
  }),
};
</script>

<style></style>
