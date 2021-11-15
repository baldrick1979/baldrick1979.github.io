import Flickity from 'vue-flickity';
    
new vue({
components: {
Flickity
},

data() {
return {
flickityOptions: {
initialIndex: 0,
prevNextButtons: false,
pageDots: true,
freeScroll: true,
wrapAround: true,
draggable: true,
dragThreshold: 10,
adaptiveHeight: true,
autoPlay: 6000,
pauseAutoPlayOnHover: false,
imagesLoaded: true,
accessibility: true,
selectedAttraction: 0.04,
friction: 0.6,

// any options from Flickity can be used
}
}
},

methods: {
next() {
this.$refs.flickity.next();
},

previous() {
this.$refs.flickity.previous();
}
}

});