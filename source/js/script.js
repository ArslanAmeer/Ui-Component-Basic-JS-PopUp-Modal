document.addEventListener("DOMContentLoaded",function(){

    var modal = document.getElementById('modal');

    document.getElementById('linkModal').addEventListener('click',function(){
        modal.classList.remove('offmodal');
        modal.classList.add('onmodal');

    },false)

    document.querySelector('.close').addEventListener('click',function(){
        modal.classList.remove('onmodal');
        modal.classList.add('offmodal');
    },false)


});