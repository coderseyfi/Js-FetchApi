// TODO:  fetch api ile url qeyd ele ve  datalari getir
let list = document.querySelector('.info-list')
const input = document.querySelector('.inp')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    const searchVal = input.value
    if (searchVal !== '') {
        fetch(`https://api.github.com/users/${searchVal}`)
            .then(res => res.json())
            .then(data => {

                let li = document.createElement('li')
                let name = document.createElement('h2')
                let loc = document.createElement('span')
                let comp = document.createElement('span')
                let img = document.createElement('img')

                name.innerHTML = `${data.name}`
                loc.innerHTML = `${data.location}`
                comp.innerHTML = `${data.company}`
                img.src = `${data.avatar_url}`

                li.append(name);
                li.append(loc);
                li.append(comp);
                li.append(img);
                list.append(li)

                if(data.name == null)
                {
                    const about = document.querySelector('.about')
                    about.textContent = 'bele bir user yoxdur'
                }
                
            })
    }
    e.preventDefault()
})














