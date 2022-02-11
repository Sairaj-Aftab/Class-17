// ----------Product Template---------------//

const pro_form = document.querySelector('.product-tem #form');
const add_product = document.querySelector('.product-tem .col-md-9 .row');

pro_form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const p_name =  this.querySelector('input[placeholder="Product Title"]').value;
    const p_des =  this.querySelector('input[placeholder="Product Description"]').value;
    const p_reg =  this.querySelector('input[placeholder="Regular Price"]').value;
    const p_sale =  this.querySelector('input[placeholder="Sale Price"]').value;
    const p_photo =  this.querySelector('input[placeholder="Photo Link"]').value;

    if (p_name == '' || p_des == '' || p_reg == '' || p_sale == '' || p_photo == '') {
        alert('All fields are requierd')
    } else {
        let arr = [];
        if (getProduct('Product')) {
           arr = getProduct('Product');
        }
        arr.push({
        title : p_name,
        des : p_des,
        reg : p_reg,
        sale : p_sale,
        photo : p_photo
        })

        sendProduct('Product', arr);
        allproducts();
    }
})

allproducts();
function allproducts() {
    let getAllProduct = getProduct('Product');
    let ht_products = '';
    getAllProduct.map(item => {
        ht_products += `<div class="col-md-4">
        <div class="card shadow">
          <div class="img">
            <img style="width: 100%; height: 200px; object-fit: cover;" src="${item.photo}" alt="">
          </div>
          <div class="title text-center w-90 mx-auto mt-2" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <h4>${item.title}</h4>
          </div>
          <div class="price w-90 mx-auto d-flex justify-content-between font-weight-bold">
            <span>$${item.sale}</span> <span style="text-decoration: line-through; color: red;">$${item.reg}</span>
          </div>
          <button class="btn btn-success btn-block w-90 mx-auto my-3">Add to Card</button>
        </div>
      </div>`
    })
    add_product.innerHTML = ht_products;

    
}