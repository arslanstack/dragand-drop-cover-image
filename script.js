
function refresh(){
    location.reload();
}

function rmstuff(){
    // console.log("Ran cleaner")
    var myNode = document.getElementById("cover-img");
    myNode.innerHTML = "";
    

}
function func1() {
    console.log("Func 1 ran on drag")
    var img1 = document.getElementById('img1');
    var cover = document.getElementById('cover-img');
    img1.addEventListener('dragstart', (e) => {
        e.target.className += ' hold';
        console.log("Drag start fired!");
    })
    img1.addEventListener('dragend', (e) => {
        e.target.className = 'img-box';
        console.log("Drag end fired!");
    })


    cover.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag Over Method triggered!");
    })
    cover.addEventListener('dragenter', () => {
        console.log("Drag Enter Method triggered!");
    })
    cover.addEventListener('dragleave', () => {
        console.log("Drag Leave Method triggered!");
    })
    cover.addEventListener('drop', (e) => {
        console.log("Drop Method triggered!");
        e.target.innerHTML = ''
        const clone = img1.cloneNode(true);
        clone.className = "img-box";
        e.target.append(clone);
        
    })
}


function func2() {
    console.log("Func 2 ran on drag")
    var img2 = document.getElementById('img2');
    var cover = document.getElementById('cover-img');
    img2.addEventListener('dragstart', (e) => {
        e.target.className += ' hold';
        console.log("Drag start fired!");
    })
    img2.addEventListener('dragend', (e) => {
        e.target.className = 'img-box';
        console.log("Drag end fired!");
    })


    cover.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag Over Method triggered!");
    })
    cover.addEventListener('dragenter', () => {
        console.log("Drag Enter Method triggered!");
    })
    cover.addEventListener('dragleave', () => {
        console.log("Drag Leave Method triggered!");
    })
    cover.addEventListener('drop', (e) => {
        console.log("Drop Method triggered!");
        e.target.innerHTML = ''
        const clone = img2.cloneNode(true);
        clone.className = "img-box";
        e.target.append(clone);
    })
}


function func3() {
    console.log("Func 3 ran on drag")
    var img3 = document.getElementById('img3');
    var cover = document.getElementById('cover-img');
    img3.addEventListener('dragstart', (e) => {
        e.target.className += ' hold';
        console.log("Drag start fired!");
    })
    img3.addEventListener('dragend', (e) => {
        e.target.className = 'img-box';
        console.log("Drag end fired!");
    })


    cover.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag Over Method triggered!");
    })
    cover.addEventListener('dragenter', () => {
        console.log("Drag Enter Method triggered!");
    })
    cover.addEventListener('dragleave', () => {
        console.log("Drag Leave Method triggered!");
    })
    cover.addEventListener('drop', (e) => {
        console.log("Drop Method triggered!");
        e.target.innerHTML = ''
        const clone = img3.cloneNode(true);
        clone.className = "img-box";
        e.target.append(clone);
    })
}


function func4() {
    console.log("Func 4 ran on drag")
    var img4 = document.getElementById('img4');
    var cover = document.getElementById('cover-img');
    img4.addEventListener('dragstart', (e) => {
        e.target.className += ' hold';
        console.log("Drag start fired!");
    })
    img4.addEventListener('dragend', (e) => {
        e.target.className = 'img-box';
        console.log("Drag end fired!");
    })


    cover.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag Over Method triggered!");
    })
    cover.addEventListener('dragenter', () => {
        console.log("Drag Enter Method triggered!");
    })
    cover.addEventListener('dragleave', () => {
        console.log("Drag Leave Method triggered!");
    })
    cover.addEventListener('drop', (e) => {
        console.log("Drop Method triggered!");
        e.target.innerHTML = ''
        const clone = img4.cloneNode(true);
        clone.className = "img-box";
        e.target.append(clone);
    })
}





