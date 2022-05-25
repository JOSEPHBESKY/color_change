var input=document.getElementById('input')
// text_color_change
function show() {
    var hex=document.getElementById('input').value
    input.style.color=hex
}
input.addEventListener('keyup',show)

// // body_backgroundColor_change
// function show1() {
//     var hex=document.getElementById('input').value        
//         document.body.style.backgroundColor=hex   
// }
// input.addEventListener('mouseenter',show1)
// input.addEventListener('mouseleave',show1)

// // target_backgroundColor_change
// function show2() {
//     var hex=document.getElementById('input').value
//     input.style.backgroundColor=hex
// }
// input.addEventListener('click',show2)

