var itemCount = 0;
document.querySelector('.add').addEventListener("click", ()=>{
	itemCount ++;
    document.getElementById('itemCount').innerText = itemCount;
});


// $('.clear').click(function() {
//     itemCount = 0;
//     $('#itemCount').html('').css('display', 'none');
//     $('#cartItems').html('');
// }); 