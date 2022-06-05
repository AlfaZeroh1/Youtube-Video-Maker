let boxes = 0;
let sw = screen.width;
let wdW = document.getElementById('window').scrollWidth;
let scx = 0;
let scrolling = false;

let form = document.getElementById('form');
if(boxes == 0){
    form.style.left='480px';
}

function ongeza(){
    let boxno = document.getElementById('boxno').value;
    let boxname = document.getElementById('boxname').value;
    let boxt = document.getElementById('boxt').value;
    let boxp = document.getElementById('boxp').value;
    let boximg = document.getElementById('boximg').value;
    let boxerr = document.getElementById('boxerr');
    function isEmpty(elem){if(elem === "")return true}
    if(isEmpty(boxno)){
        boxerr.style.border="1px solid red";
        boxerr.innerHTML = "Box NO not Provided";
    }
    else if(isEmpty(boxname)){
        boxerr.style.border="1px solid red";
        boxerr.innerHTML = "Box Name not Provided";
    }
    else if(isEmpty(boxt)){
        boxerr.style.border="1px solid red";
        boxerr.innerHTML = "Box Title not Provided";
    }
    else if(isEmpty(boxp)){
        boxerr.style.border="1px solid red";
        boxerr.innerHTML = "Explanation not Provided";
    }
    else if(isEmpty(boximg)){
        boxerr.style.border="1px solid red";
        boxerr.innerHTML = "Image Link not Provided";
    }
    else{
        boxerr.style.border="1px solid green";
        boxerr.style.color="lightgreen";
        //ADD THE  BOX
        boxes++;
        let newBox =  "<div id='box"+boxes+"' class='box'><div class='boxh'><div class='hc'><div class='hct'>"+boxno+"</div><div class='hcp'>"+boxname+"</div></div></div><div class='boxt'>"+boxt+"</div><div class='boxp'>"+boxp+"</div><div class='boxi'><img src='"+boximg+"'></div></div>";
        let wdw = document.getElementById('window');
        wdw.innerHTML+=newBox;
        
        //Move the box
        if(boxes > 1){
            form.style.left='0';
        }
        wdW = document.getElementById('window').scrollWidth;
        window.scrollTo(wdW,0);
        boxerr.innerHTML = "Box Number "+boxes+" Added  "+wdW;
    }

}

function toa(){
    if(boxes<1){
        alert("No box to delete, click Add REAL Button to add.");
    }
    else{
        let thebox = "box"+boxes;
        let lastBox = document.getElementById(thebox);
        lastBox.remove();
        boxes--;
        alert("Last Box Number "+boxes+" has been Removed");
        let boxerr = document.getElementById('boxerr');
        wdW = document.getElementById('window').scrollWidth;
        boxerr.innerHTML = "Box "+boxes+" Removed "+wdW;
        window.scrollTo(wdW,0);

    }
    
}

function lala(){
    scx++;
    window.scrollTo(scx, 0);
}
function sclorr(){
    window.scrollTo(0,0);
    if(window.scrollX == 0 && window.scrollY == 0){
        // Get the root element
        let rt = document.querySelector(':root');
        //change the --boxY var
        rt.style.setProperty('--wdW', '3840px');
        form.style.visibility='hidden';
        scrolling = true;
        boxes++;
        let ytBox =  "<div id='box"+boxes+"' class='box'><div class='boxh'><div class='hc' style='background:red;color:white'><div class='hct'>End</div><div class='hcp'>Kindly, Subscribe</div></div></div><div class='boxt' style='background:red;color:white'>Thanks For Watching.</div><div class='boxp'>Subscribe and Drop A Like Comment and share</div><div class='boxi'><img src='icons/youtube.png'></div></div>";
        let fw = "<div id='fw'></div>"
        let wdw = document.getElementById('window');
        wdw.innerHTML+=ytBox;
        wdw.innerHTML+=fw;
        const myTimeout = setTimeout(autoScroll, 2000);
        function autoScroll(){
            myInterval = self.setInterval(lala, 10);
        }     
    }
    else{alert('Try Again. The Scroll Bar needs to scroll to the end');}
}
//Pause Scrolling
document.addEventListener('dblclick', function(){
    if(scrolling==false){
        alert('Not Scrolling at the moment')
    }else{
        // Get the root element
        let rt = document.querySelector(':root');
        //change the --boxY var
        rt.style.setProperty('--wdW', '1920px');
        clearInterval(myInterval);
        form.style.visibility='visible';
        let lbox = "box"+boxes;
        document.getElementById(lbox).remove();
        document.getElementById('fw').remove();
        let boxerr = document.getElementById('boxerr');
        wdW = document.getElementById('window').scrollWidth;
        boxerr.innerHTML = "Box "+boxes+" Removed "+wdW;
        boxes--;
        window.scrollTo(wdW,0);
        scrolling = false;
    }
});