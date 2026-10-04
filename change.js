change=document.getElementById('change')

change.addEventListener('click', change_all)

function change_all(){
    if (document.getElementsByTagName('div')[2].innerHTML==='Булыга') {
        document.getElementsByTagName('div')[0].innerHTML = 'Issued by the Ministry of Int. Affairs of Russia'
        document.getElementsByTagName('div')[2].innerHTML = 'Bulyga'
        document.getElementsByTagName('div')[3].innerHTML = 'Anastasia'
        document.getElementsByTagName('div')[4].innerHTML = 'Sergeevna'
        document.getElementsByTagName('div')[5].innerHTML = 'Female  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25.12.2006'
    }
    else
         if (document.getElementsByTagName('div')[2].innerHTML==='Bulyga') {
             document.getElementsByTagName('div')[0].innerHTML = 'Выдан МВД России по Мск. области'
        document.getElementsByTagName('div')[2].innerHTML = 'Булыга'
        document.getElementsByTagName('div')[3].innerHTML = 'Анастасия'
        document.getElementsByTagName('div')[4].innerHTML = 'Сергеевна'
        document.getElementsByTagName('div')[5].innerHTML = 'Жен  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25.12.2006'
         }
}
