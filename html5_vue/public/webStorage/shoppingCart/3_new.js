let storage = localStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = ''     // storage.setItem('addItemList','')
    }

    // 幫每個 Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.addButton') // list 是陣列
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', e => {
            // alert(e.target.id)
            // let teddyInfo = document.querySelector(`#A1001 input`).value
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            
            addItem(e.target.id, teddyInfo)
        })
    }    
}
function addItem(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    // 1 動態新增
    let newItem = document.querySelector('#newItem')
    newItem.innerHTML = `
        <img src="imgs/${itemValue.split('|')[1]}">
        <span>${itemValue.split('|')[0]}</span>
        <span>${itemValue.split('|')[2]}</span>
    `

    // 2 寫入 storage
    if(storage[itemId]){
        alert('You have checked.')
    }else{
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue)
    }

    // 3 計算購買數量和小計
    let itemString = storage.getItem('addItemList')
    let items = itemString.substring(0, itemString.length - 2).split(`, `)
    // console.log(items)      // ['A1001', 'A1005', 'A1006', 'A1002']

    subtotal = 0
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i])
        subtotal += parseInt(itemInfo.split('|')[2])
    }
    
    document.querySelector('#itemCount').innerText = items.length
    document.querySelector('#subtotal').innerText = subtotal
}
window.addEventListener('load', doFirst)