let a = document.querySelector(`.js-a`)

let b = document.querySelector(`.js-x`)

let c = document.querySelector(`.Social-Media`)

let d = document.querySelector(`.body-content`)

console.log(d)

 



let Openslide = false

function AAA() {

  console.log(a.style)

   Openslide = !Openslide

  if (a.style.left === `-500px` || Openslide  ) {
    a.style.left = `0px`

    c.classList.add(`SM`)

    d.style.left = `500px`

     

  }
  else {
    a.style.left = `-500px`
    c.classList.remove(`SM`)
    d.style.left = `0px`
  }
 
}

