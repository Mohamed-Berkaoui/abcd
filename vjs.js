const [$btnYes,$btnNo]=document.getElementsByClassName('button')
const $buttonsContainer=document.getElementsByClassName("buttons-container")[0]
const $movingText=document.getElementById('moving-text')
const $display1=document.querySelector(".display1")
const $display2=document.querySelector(".display2")

const movingTextPostions=[{top:"10%",left:'20%'},
  {top:"60%",left:'30%'},
  {top:"80%",left:'10%'},
  {top:"70%",left:'40%'},
  {top:"30%",left:'30%'},
  {top:"17%",left:'28%'},
  {top:"65%",left:'34%'},
  {top:"89%",left:'19%'},
  {top:"77%",left:'47%'},
  {top:"36%",left:'36%'}
]
let clickCount=0

$btnYes.addEventListener('mouseenter',function(){
  if(clickCount<5){
    $btnYes.style.visibility="hidden"
  }
})
$buttonsContainer.addEventListener('mouseleave',function(){
  if(clickCount<5){
    $btnYes.style.visibility="visible"
  }
})

$btnNo.addEventListener('click',()=>{
  clickCount++
  console.log("first")
  console.log($btnYes.style)
$btnYes.style.scale=`${(clickCount+11)/10}`

$btnYes.style.visibility="visible"
$movingText.style.display="block"
const randomPos=Math.floor(Math.random()*(movingTextPostions.length+1))
$movingText.style.top=movingTextPostions[randomPos].top
$movingText.style.left=movingTextPostions[randomPos].left
})

$btnYes.addEventListener('click',function(){
  $display1.style.display="none"
  $display2.style.display="flex"

})