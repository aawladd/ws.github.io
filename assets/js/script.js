var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autoplayTimeout:1000,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// MultiLinks

var myLinks =[
    "http://youtube.com/FunctionalValue/",
    "https://drive.google.com/drive/folders/17mJJx7O2zMar5tAnfQ8fEwGYao0n0Mf1?usp=sharing"
]

function openMultipleLinks(links){
    for(var i = 0; i<links.length; i++){
        window.open(links[i])
    }
}