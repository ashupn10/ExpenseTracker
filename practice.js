let btn = document.getElementById('addItem');
let inputs=document.querySelectorAll('.form-control');
btn.addEventListener('click',(e)=>{
    e.preventDefault;
    if(inputs[0].value==null) return;
    let obj={
        Expense: inputs[0].value,
        Description:inputs[1].value,
        Category:inputs[2].value
    }
    localStorage.setItem(inputs[2].value,JSON.stringify(obj));
})
addItem();
function addItem(){
    let container=document.getElementById('Expenses');
    Object.keys(localStorage).forEach((key)=>{
        let value=localStorage.getItem(key)
        let obj=JSON.parse(value);
        let ele=document.createElement('div');
        ele.className='element';
        ele.innerHTML=`
            <span>Expense:${obj.Expense}</span>
            <span>   Description:${obj.Description}</span>
            <span>   Category:${obj.Category} </span>
            <button class="edit">Edit</button>
            <button class="Delete"">Delete</button>
            </br>
        `;
        let targetkey=obj.Category;
        container.appendChild(ele);
        ele.addEventListener('click',(e)=>{
            if(e.target.className==='Delete'){
                localStorage.removeItem(targetkey);
                ele.remove();
            }
            if(e.target.className==='edit'){
                inputs[0].value=obj.Expense;
                inputs[1].value=obj.Description;
                inputs[2].value=obj.Category;
                localStorage.removeItem(targetkey);
                ele.remove();
            }
        });
    })
}
