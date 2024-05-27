function page1Animation(){
    var tl=gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.14
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.3
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.3
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.3
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.4,
    x:200
},"-=0.8")
tl.from(".section1bottom",{
    y:30,
    opacity:0,
    duration:0.4,
    stagger:0.15
})
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -70%",
            scrub:2,
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5,
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:0.5,
    },"as")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:0.5,
    },"as")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:0.5,
    },"sa")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:0.5,
    },"sa")
    tl2.from(".elem.line3.left",{
        x:-300,
        opacity:0,
        duration:0.5,
    },"sv")
    tl2.from(".elem.line3.right",{
        x:300,
        opacity:0,
        duration:0.5,
    },"sv")

}

page1Animation();
page2Animation();