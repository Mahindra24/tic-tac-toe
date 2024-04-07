//get all the elements
const boxEl=document.querySelectorAll(".box")
const startEl=document.querySelector("#restart")
let soundOne= document.querySelector("#player-1")
let soundTwo= document.querySelector("#player-2")
let soundThree= document.querySelector("#winning")

let winConditions=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6] ]


player0=true
boxEl.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(player0){
            box.innerText="O"
            player0=false
            soundOne.play()
        }
        else{
            box.innerText="X"
            player0=true
            soundTwo.play()
        }
       
        box.disabled=true
        winFunction()
    })

})

let winFunction=()=>{
    for(let condition of winConditions){
        // console.log(condition[0],condition[1],condition[2])
        let winIndex1=boxEl[condition[0]].innerText
        let winIndex2=boxEl[condition[1]].innerText
        let winIndex3=boxEl[condition[2]].innerText

        if(!winIndex1=="" && !winIndex2=="" && !winIndex3==""){

            if(winIndex1==winIndex2 && winIndex2==winIndex3){
                console.log("Congratulations! You Win", winIndex1)
                soundThree.play()
                lockBtn()
            }
        }

    }
}
startEl.addEventListener("click",()=>{

    boxEl.forEach((box)=>{
        box.innerText=""
    })
    unlockBtn()

})

let lockBtn=()=>{
    for(let box of boxEl){
        box.disabled=true
    }
}
let unlockBtn=()=>{
    for(let box of boxEl){
        box.disabled=false
    }
}

