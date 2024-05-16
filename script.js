function karsilama()
{
    var isim=document.getElementById("ad").value;
    var soyisim=document.getElementById("soyad").value;
    //alert("merhaba "+isim);
    document.getElementById("metin").innerHTML="Merhaba "+isim+" "+soyisim;
    //document.title=isim;
}
function hesap()
{
    var n1=document.getElementById("not1").value;
    var n2=document.getElementById("not2").value;
    var ort= (Number(n1)+Number(n2))/2;
    document.getElementById("ortalama").innerHTML=ort;
    if(ort >=50)
    {
        document.getElementById("durum").innerHTML="Başarılı";
        document.getElementById("durum").style.color="green";
    }
    else
    {
        document.getElementById("durum").innerHTML="Başarısız";
        document.getElementById("durum").style.color="red";
    }
        
}
function daire()
{
    var yaricap=document.getElementById("d1").value;
    var cevre= 2*yaricap*3.14;
    var alan= 3.14*yaricap*yaricap;
    document.getElementById("alan").innerHTML="Alan="+alan;
    document.getElementById("cevre").innerHTML="Çevre="+cevre;
}
function yasBul()
{
    var simdikiZaman=new Date();
    var dogum= document.getElementById("dYili").value;
    var yas= simdikiZaman.getFullYear()-dogum ;
    document.getElementById("yas").innerHTML="Yaşınız="+yas;
    if(yas>=18)
        {
            document.getElementById("ehliyet").innerHTML="Ehliyet alabilir";      
            document.getElementById("ehliyet").style.color="green";
        }
        else{
            document.getElementById("ehliyet").innerHTML="Ehliyet alamaz"; 
            document.getElementById("ehliyet").style.color="red";
        }
}
function tnetHesapla()
{
    var dog=document.getElementById("turkceDogru").value;
    var yan=document.getElementById("turkceYanlis").value;
    var net=Number(dog)- (Number(yan)/3);
    document.getElementById("turkceNet").innerHTML="Türkçe Net Sayısı:"+net;
}
function mnetHesapla()
{
    var dog=document.getElementById("mDogru").value;
    var yan=document.getElementById("mYanlis").value;
    var net=Number(dog)- (Number(yan)/3);
    document.getElementById("matNet").innerHTML="Matematik Net Sayısı:"+net;
}
function snetHesapla()
{
    var dog=document.getElementById("sDogru").value;
    var yan=document.getElementById("sYanlis").value;
    var net=Number(dog)- (Number(yan)/3);
    document.getElementById("sosNet").innerHTML="Sosyal Net Sayısı:"+net;
}
function fnetHesapla()
{
    var dog=document.getElementById("fDogru").value;
    var yan=document.getElementById("fYanlis").value;
    var net=Number(dog)- (Number(yan)/3);
    document.getElementById("fenNet").innerHTML="Fen Net Sayısı:"+net;
}
function tarihGetir()
{
    var tar=new Date("2023-12-14");    
    var tyt=new Date("2024-06-08");

    var ay =Math.abs(tyt.getDate()-tar.getDate());
    document.getElementById("tarih").innerHTML=ay+" ay";
}
function vki()
{
    var Boy=document.getElementById("Boy").value;
    var Kilo=document.getElementById("Kilo").value;
    var sonuc= (Number(Kilo)/Number(Boy))/ Number(Boy) ;
    document.getElementById("Hesap").innerHTML= sonuc;
    if (sonuc<18)
    {
        document.getElementById("vkidurum").innerHTML="Çok Zayıf";
    }
    else if(sonuc>=18 && sonuc<25 )
    {
        document.getElementById("vkidurum").innerHTML="İdeal";
    }

    
}

const birthday = new Date('2024-12-31T00:00:00');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function countdown() {
  const now = new Date();
  const difference = birthday - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours < 10 ? '0' + hours : hours;
  minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Call countdown function every second
setInterval(countdown, 1000);

// Initial call to display countdown immediately
countdown();
