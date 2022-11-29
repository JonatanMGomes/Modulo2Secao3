const qtdColumns = document.getElementById('qtdColumns');
const products = document.getElementById('products');


function columnsConfigChange(e) {
    if (e.target.value === '2'){
        products.style.gridTemplateColumns = 'auto auto';
    } else if(e.target.value === '3'){
        products.style.gridTemplateColumns = 'auto auto auto';
    } else{
        products.style.gridTemplateColumns = 'auto auto auto auto auto';
    }
}

qtdColumns.addEventListener('change', columnsConfigChange);