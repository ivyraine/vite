let storage = localStorage;
function doFirst(){
    let itemString = storage.getItem('addItemList')
    let items = itemString.substring(0, itemString.length - 2).split(`, `)
    // console.log(items)      // ['A1001', 'A1005', 'A1006', 'A1002']

    newDiv = document.createElement('div')
    newTable = document.createElement('table')

    // 將 table 放進 div，再將 div 放進 cartList
    newDiv.appendChild(newTable)
    document.querySelector('#cartList').appendChild(newDiv)

    total = 0
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i])
        total += parseInt(itemInfo.split('|')[2])

        // 呼叫 createCartList 建立 <tr>
        createCartList(items[i], itemInfo)
    }
    document.querySelector('#total').innerText = total
}
function createCartList(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    let itemTitle = itemValue.split('|')[0]
    let itemImage = itemValue.split('|')[1]
    let itemPrice = parseInt(itemValue.split('|')[2])

    newTable.innerHTML += `
        <tr class="item">
            <td style="width:200px;">
                <img src="imgs/${itemImage}" width="60">
            </td>
            <td style="width:280px;" id="${itemId}">
                <p>${itemTitle}</p>
                <button>Delete</button>
            </td>
            <td style="width:170px;">
                <p>${itemPrice}</p>								
            </td>								
            <td style="width:60px;">
                <p>
                    <input type="number" value="1" min="1">
                </p>
            </td>
        </tr>
    `
}
window.addEventListener('load', doFirst)