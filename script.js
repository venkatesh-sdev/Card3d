window.onload = () => {
    if (innerWidth < 700) {
        document.addEventListener("touchmove", (event) => {
            const div = document.querySelector("#div");
            const touchLocation = event.targetTouches[0];
            const x = touchLocation.clientX;
            const y = touchLocation.clientY;
            rotateElement(div, x, y);
        });
    } else {
        document.addEventListener("mousemove", (event) => {
            const div = document.querySelector("#div");
            const x = event.clientX;
            const y = event.clientY;
            rotateElement(div, x, y);
        });
    }
    var pointer = document.querySelector('.pointer');

    pointer.addEventListener('touchmove', function (e) {
        const touchLocation = e.targetTouches[0];
        pointer.style.left = touchLocation.pageX + 'px';
        pointer.style.top = touchLocation.pageY + 'px';
    })

    pointer.addEventListener('touchend', function (e) {
        const x = parseInt(pointer.style.left);
        const y = parseInt(pointer.style.top);
    })




    function rotateElement(div, x, y) {
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;

        div.style.setProperty("--rotateX", offsetX + "deg");
        div.style.setProperty("--rotateY", -1 * offsetY + "deg");
    }

}