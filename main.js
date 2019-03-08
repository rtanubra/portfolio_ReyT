let navigationBurgerClose = true;

function renderNavigationBurger(){
    //this function renders navigation burger based on its state
}

function handleNavigationBurger(){
    //this function changes the state of the navigation burger upon click.
    console.log("handling click of navigation burger")
}

//called at the document ready to listen to events
function callback(){
    handleNavigationBurger()
}
$(callback)