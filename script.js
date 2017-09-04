document.addEventListener('DOMContentLoaded',function() {
    var textIn = document.querySelector("#text-in")
    textIn.onkeyup=changeEventHandler;

    textIn.onfocusin = () => {
        console.log("FOCUS")};
        textIn.select()

    textIn.value = "The more you know, the better."


    },false);


function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    console.log("this was changed")
    console.log(this.value);
    document.querySelector(".out").innerHTML = negateSentence(this.value)
}




function negateSentence(s){
    var n = nlp(s)
    n.verbs().toNegative()
    // todo test if negative, if so pos
    return n.out()
}