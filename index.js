let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let baskid = document.getElementById("basket")
let baskid2 = document.getElementById("basket1")
let colors = ["red", "orange", "green"]
let headlabel = ["F", "r", "u", "i", "t", "&nbsp;", "B", "a", "s", "k", "e", "t"]
let i = 0;
let s = "";
for (let x = 0; x < headlabel.length; x++)
    {
      s += "<span style='color:" + colors[i] + "'>" + headlabel[x] + "</span>"
      i++
      if (i === 3){
          i = 0
      }
     }   
baskid.innerHTML = s     

for (let x = 0; x < fruit.length; x++)
    {
      baskid2.textContent += fruit[x]   
     }   
    

function sort()
{ 
    if (fruit[fruit.length - 1] === "🍎")
    {
        appleShelf.textContent += "🍎"
        fruit.pop()
        if (fruit.length == 0) 
        {
            baskid2.textContent = "Empty"
        }
        else
        {
            baskid2.textContent = fruit
        }
        
    }
    else
    {
        orangeShelf.textContent += "🍊"
        fruit.pop()
        if (fruit.length == 0) 
        {
            baskid2.textContent = "Empty"
        }
        else
        {
            baskid2.textContent = fruit
        }
        
    }
}

function start()
{
    if (fruit.length != 0) 
    {
        sort()
    }
    else
    {
        baskid2.textContent = "Empty"
    }
}