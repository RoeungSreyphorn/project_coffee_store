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
           