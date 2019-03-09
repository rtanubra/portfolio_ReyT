function handlePortfolioAnchor(){
    //handling portfolio anchor
    console.log("Ready to handle portfolio anchor.")
    $(".js-portfolio-nav").click(event=>{
        //done to stop refresh
        event.preventDefault()
        console.log("navigte to portfolio")
        window.scrollTo(0,350)
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
            window.scrollTo(0,2800)
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