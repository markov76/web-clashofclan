const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Painoit sitten kuitenkin :)', 'success')
  })
}
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))

let f = document.getElementById("footter");

f.classList.add("important");

//let button = document.getElementById("id");

 // button.addEventListener("click", fetch )

/*  function doSome() {
    fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => document.getElementById('print-here').innerHTML =
JSON.stringify(data.message));
  }*/
  let btn = document.getElementById("btnClick");
  let image = document.getElementById("image");
  
  btn.addEventListener("click", function () {
    fetch("https:dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      image.src = result.message
    })
    .catch(err=>console.log(err))
  })