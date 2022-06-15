// mechanika pokazu slajdów w divie container
/**
* @param  {number} interval (in milliseconds)
*/
function cycleBackgrounds(interval) {
  let index = 0
  
  const $imageEls = document.querySelectorAll('#main .slide')
  
  setInterval(() => {
    index = index + 1 < $imageEls.length ? index + 1 : 0
  
    $imageEls[index].classList.add('show')
       
    const previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;
  
    $imageEls[previous].classList.remove('show')
  }, interval)
}

  document.addEventListener("DOMContentLoaded", function() {
  cycleBackgrounds(4000);
});

//mechanika otwierania i zamykania diva about_us
function zmianaAboutUs()
{
  div_about_us = document.getElementById("about_us_tile");
    
  if (div_about_us.style.visibility == "visible") div_about_us.style.visibility="hidden";
  else div_about_us.style.visibility="visible";
}

function zmianaSearchResults()
{
  div_search_results = document.getElementById("search_results");
  div2 = document.getElementById("reservation");
  textOne = document.getElementById("FromWhenText");
  textTwo = document.getElementById("ToWhenText");
    
  if (div_search_results.style.visibility == "visible") 
  {
    div_search_results.style.visibility="hidden";
    div2.style.width="100%";
    textOne.style.marginLeft="545px";
    textTwo.style.marginLeft="884px";
  }
  else
  {
    div_search_results.style.visibility="visible";
    div2.style.width="70%";
    textOne.style.marginLeft="318px";
    textTwo.style.marginLeft="658px";
  } 
}

//funkcja rozwijajaca i zwijajaca diva search_results (pokazująca szczegóły pokoi)
function showSearchResults()
{
  div = document.getElementById("search_results");
  div2 = document.getElementById("reservation");
  textOne = document.getElementById("FromWhenText");
  textTwo = document.getElementById("ToWhenText");
    
  if (div.style.visibility == "visible") 
  {
    div.style.visibility="hidden";
    div2.style.width="100%";
    textOne.style.marginLeft="545px";
    textTwo.style.marginLeft="884px";
  }
  else 
  {
    div.style.visibility="visible";
    div2.style.width="70%";
    textOne.style.marginLeft="318px";
    textTwo.style.marginLeft="658px";
  }
}

//funkcja pokazująca detale pokoi i zmieniajaca zdjęcie pokoju w divie search_results
var vImg = true;
function showRoomDetails(nr)
{   
  if(vImg) 
  {
    document.getElementById('room'+nr).style.background = 'url(img/rooms_details/'+nr+'.png)';
    vImg = false;
  }
  else
  {
    document.getElementById('room'+nr).style.background = 'url(img/rooms/room'+nr+'.jpg)';
    vImg = true;
  }

  var imgText = document.getElementById('imgText');
  imgText.style.visibility="hidden";

  var nazwy = ['Pokój I','Pokój II','Pokój III','Pokój IV','Pokój V','Pokój VI','Pokój VII','Pokój VIII','Pokój IX','Pokój X','Pokój XI','Pokój XII'];
  var liczby_os = ['1 osoba','1 osoba','1 osoba','2 osoby','2 osoby','2 osoby','3 osoby','3 osoby','3 osoby','4 osoby','4 osoby','4 osoby'];
  var ceny = ['100zł/24h','100zł/24h','100zł/24h','150zł/24h','150zł/24h','200zł/24h','300zł/24h','300zł/24h','500zł/24h','600zł/24h','600zł/24h','700zł/24h'];
  var oceny = ['9,4','7,9','8,1','9,2','9,5','9,3','9,5','9,8','7,7','8,7','9,9','10'];
  var gwiazdki = ['⭐⭐⭐','⭐','⭐','⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐'];

  var nazwa = document.getElementById('nazwa');
  var liczba_os = document.getElementById('liczba_os');
  var cena = document.getElementById('cena');
  var rating = document.getElementById('rating');
  var star = document.getElementById('star')
  var roomImg = document.getElementById('roomImg');

  nazwa.innerHTML = nazwy[nr-1];
  liczba_os.innerHTML = liczby_os[nr-1];
  cena.innerHTML = ceny[nr-1];
  rating.innerHTML = oceny[nr-1];
  star.innerHTML = gwiazdki[nr-1];
  roomImg.style.background = 'url(img/rooms/room'+nr+'.jpg)';
}

//aktywacja inputa do wpisywania uwag przy rezerwacji
function disableInput()
{
  var checkBox = document.getElementById('checkComments').value;
  var comments_field = document.getElementById('comments_field');
  console.log(checkBox);
  
  if(checkBox==false && checkBoxStatus)
  {
    comments_field.style.pointerEvents="none";
  }
  else
  {
    comments_field.style.pointerEvents="auto";
  }
}
      
