let storage = localStorage;
function doFirst(){
    
    //幫每個Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.addButton')  //list 是陣列
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', e => {
            // alert(e.target.id)
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            // alert(teddyInfo);

            addItem(e.target.id, teddyInfo)
        })
    }
}
function addItem(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    let newItem = document.querySelector('#newItem')
    newItem.innerHTML = `
        <img src="imgs/${itemValue.split('|')[1]}">
        <span>${itemValue.split('|')[0]}</span>
        <span>${itemValue.split('|')[2]}</span>
    `
}
window.addEventListener('load', doFirst)