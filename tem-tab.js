// ---------Template Tab----------//

const all_tab = document.querySelectorAll('.first-tab ul a');
const all_pane = document.querySelectorAll('.first-tab .col-md-9');


all_tab.forEach(item => {
    item.addEventListener('click', function(){
        all_tab.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
        const pane = document.querySelector(this.getAttribute('href'))
        all_pane.forEach(item => {
            item.classList.remove('active');
        })
        pane.classList.add('active');
    })
})