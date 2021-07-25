const buttons = document.querySelectorAll('.btnripple');

buttons.forEach(function (button){
    button.addEventListener('click',function (e){
        // console.log('hay');

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop,btnleft);

        const xinside = cx-btnleft;
        const yinside = cy-btntop;
        // console.log(xinside,yinside);

        // create circle
        const circle = document.createElement('span');
        // circle.className = 'circle';
        circle.classList.add('circle');

        // console.log(circle);
        // console.log(this);

        circle.style.top = yinside +"px";
        circle.style.left = xinside + "px";

        e.target.appendChild(circle);
        //             or
        // this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600)

    });
});