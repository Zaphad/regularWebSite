// Your code here!

//var script = document.createElement('script');
//script.type = 'text/javascript';
//script.src = 'http://code.jquery.com/jquery-1.8.3.js';
//document.head.appendChild(script);



//$().ready(function () {




var frame = document.createElement("div"),
    sidebar = document.createElement("div"),
    footer = document.createElement("div"),
    main = document.createElement("div"),
    menu = document.createElement("div"),
    header = document.createElement("div"),
    menuref1 = document.createElement("a");
    menuref2 = document.createElement("a");
    menuref3 = document.createElement("a");
    menuref4 = document.createElement("a");
    menuref5 = document.createElement("a");

frame.innerHTML = 'Hi !';
header.innerHTML = 'Hi there!';
main.innerHTML = 'Hi there!';
sidebar.innerHTML = 'Hi there!';
footer.innerHTML = 'Hi there!';
menuref1.innerHTML = 'Главная';
menuref2.innerHTML = 'Каталог игр';
menuref3.innerHTML = 'Помощь';
menuref4.innerHTML = 'Контакты';
menuref5.innerHTML = 'AnotherPage';




frame.style.backgroundColor = "#1667ac";
header.style.backgroundColor = "red";
menu.style.backgroundColor = "#101417";
menu.style.cssFloat = "right";
menuref1.style.textDecoration = "none";
menuref1.setAttribute("href", "index.html");
menuref2.setAttribute("href", "index.html");
menuref3.setAttribute("href", "index.html");
menuref4.setAttribute("href", "index.html");
menuref5.setAttribute("href", "index.html");

menuref1.style.cssText = 'color:#1683a3;margin:0 0 0 10px; text-decoration:none;';
menuref2.style.cssText = 'color:#1683a3;margin:0 0 0 10px; text-decoration:none;';
menuref3.style.cssText = 'color:#1683a3;margin:0 0 0 10px; text-decoration:none;';
menuref4.style.cssText = 'color:#1683a3;margin:0 0 0 10px; text-decoration:none;';
menuref5.style.cssText = 'color:#1683a3;margin:0 0 0 10px; text-decoration:none;';



//document.body.appendChild(menuref1);
document.body.appendChild(frame);
frame.appendChild(header);
frame.appendChild(menu);
menu.appendChild(menuref1);
menu.appendChild(menuref2);
menu.appendChild(menuref3);
menu.appendChild(menuref4);
menu.appendChild(menuref5);
frame.appendChild(main);
frame.appendChild(sidebar);
frame.appendChild(footer);


//document.getElementsByTagName("a").style.backgroundColor = "blue";

//})