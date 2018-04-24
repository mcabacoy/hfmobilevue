<template>
<div>
    <swipe class="swiper-container">
        <swipe-item v-for="(item, index) in gamelist"
            :key="index" 
            :class="item.customclass">Hey {{ item }}
        </swipe-item>  
    </swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    data(){
        return {
            gamelist: [
                {
                    customclass: 'picture',
                    name: '加油金块'
                },
                {
                    customclass: 'picture',
                    name: '加油金块'
                },
                {
                    customclass: 'picture',
                    name: '加油金块'
                }
            ]
        }
    },
    components: {
        Swipe,
        SwipeItem,
    },
    mounted() {
        this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                        el:  '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 3000,
                    }
            });
        });
    },
    name: 'gameListSwiper'
}
</script>
