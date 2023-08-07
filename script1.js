const menu = [
    {
        'page-menu':'HOME'
    },
    {
        'page-menu':'ABOUT AS'
    },
    {
        'page-menu':'COFFEE'
    },
    {
        'page-menu':'CONTACT AS'
    }
];
const footer=[
    {
        'page-footer':'MENU'
    },
    {
        'page-footer':'GALLARY'
    },
    {
        'page-footer':'HOURE & DERECTION'
    },
    {
        'page-footer':'CONTACT AS'
    },
]
var pageMenu='';
for(let i in menu){
    pageMenu +=`<li><a href="#">${menu[i]['page-menu']}</a></li>`;
}
document.getElementsByClassName('page-menu')[0].innerHTML=`<ul>${pageMenu}</ul>`;
var pageFooter='';
for(let i in footer){
    pageFooter +=`<li><a href="#">${footer[i]['page-footer']}</a></li>`;
}
document.getElementsByClassName('page-footer')[0].innerHTML=`<ul>${pageFooter}</ul>`;

    document.getElementById('row').style.display='none';
    document.getElementById('btn_login').addEventListener('click',function(){
        document.getElementById('box').style.display='flex';
        document.getElementById('row').style.display='flex';
    })
    document.getElementById('tbn_close').addEventListener('click',function(){
        document.getElementById('row').style.display='none';
        document.getElementById('box').style.display='none';
    })
    document.getElementById('row1').style.display='none';
    document.getElementById('btn_login1').addEventListener('click',function(){
        document.getElementById('box1').style.display='flex';
        document.getElementById('row1').style.display='flex';
    })
    document.getElementById('tbn_close1').addEventListener('click',function(){
        document.getElementById('row1').style.display='none';
        document.getElementById('box1').style.display='none';
    })