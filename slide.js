
const slidecontainer=document.querySelector('.slideshow');
var idslide=document.getElementById('idslide');

slidecontainer.style.backgroundImage = `url(./images/6.jpg)`;
slidecontainer.style.backgroundRepeat = "no-repeat";
slidecontainer.style.backgroundSize = "cover";
slidecontainer.style.backgroundPosition = "center";


var currentIndex = 1;
var totalCount = 8;
var mybcg=setInterval(changebcg,3000);
function changebcg()
{
    if (currentIndex > totalCount)
        currentIndex = 1;
    // $(body).css('background-image', 'url(/images' + currentIndex++ + '.jpg)');
    // mybcg.style.backgroundImage=`url(${currentIndex++}.jpg)`;
   slidecontainer.style.backgroundImage = `url(./images/${currentIndex}.jpg)`;
   slidecontainer.style.backgroundRepeat = "no-repeat";
   slidecontainer.style.backgroundSize = "cover";
   slidecontainer.style.backgroundPosition = "center";
   
   
    currentIndex++;
     
} 
