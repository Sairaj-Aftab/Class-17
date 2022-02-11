// -------Tabs---------------//

const tabss = document.querySelectorAll('.tabs .header ul li a');
const tabss_pane_all = document.querySelectorAll('.tabs .body .tab-pane');


tabss.forEach(item => {
    
    item.addEventListener('click', function (e) {
        tabss.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');

        const tabss_pane = document.querySelector(this.getAttribute('href'));
        tabss_pane_all.forEach(item => {
            item.classList.remove('active');
        })
        tabss_pane.classList.add('active');
    })
})