function handlePortfolioAnchor(){
    //handling portfolio anchor
    console.log("Ready to handle portfolio anchor.")
    $(".js-portfolio-nav").click(event=>{
        //done to stop refresh
        event.preventDefault()
        console.log("navigte to portfolio")
        let viewport_width= $( window ).width();
        if (viewport_width <=640){
            window.scrollTo(0,360)
        }
        else{
            window.scrollTo(0,320)
        }
    })
}
function handleAboutAnchor(){
    //handling About me Anchor
    console.log("Ready to handle about anchor")
    $(".js-about-nav").click(event=>{  
        event.preventDefault()
        let viewport_width= $( window ).width();
        console.log("navigate to about")
        if (viewport_width <=640){
            window.scrollTo(0,2900)
        }
        else{
            window.scrollTo(0,1600)
        }
    })
}
//called at the document ready to listen to events
function callback(){
    handlePortfolioAnchor()
    handleAboutAnchor()
}
$(callback)