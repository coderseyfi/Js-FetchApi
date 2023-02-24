// TODO:  fetch api ile url qeyd ele ve  datalari getir
let list = document.querySelector('.info-list')
const input = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const info = document.querySelector('.info')

btn.addEventListener('click', (e) => {
    console.log('test')
    
    const searchVal = input.value
    if (searchVal !== '') {
        info.classList.add('active-info')
        fetch(`https://api.github.com/users/${searchVal}`)
            .then(res => res.json())
            .then(data => { 
                console.log(data)
                changeItems(data) 
            })
    }
    e.preventDefault()
})

function changeItems(data) {
    if (data.message == 'Not Found') {
        const about = document.querySelector('.about')
        about.textContent = 'bele bir user yoxdur'
    } else {
        
        // let li = document.createElement('li')
         let name = document.querySelector('.info-name')
         let loc = document.querySelector('.loc')
         let flw = document.querySelector('.flw')
         let bio = document.querySelector('.bio')
         let img = document.querySelector('.img')
         let email = document.querySelector('.email')
         let id = document.querySelector('.id')
         let comp = document.querySelector('.comp')
         let flwing = document.querySelector('.flwing')
         let repo = document.querySelector('.repo')
         let blog = document.querySelector('.blog')


         name.innerHTML = `${data.name}`
         bio.innerHTML = `${data.bio}`
         email.innerHTML = `${data.login}`
         loc.innerHTML = `${data.location}`
         flw.innerHTML = `${data.followers}`
         id.innerHTML = `${data.id}`
         comp.innerHTML = `${data.company}`
         flwing.innerHTML = `${data.following}`
         repo.innerHTML = `${data.public_repos}`
         blog.innerHTML = `${data.blog}`
         img.src = `${data.avatar_url}`
    }
}














