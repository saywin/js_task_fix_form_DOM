document.querySelectorAll("input").forEach(function(e){var t,a=document.createElement("label"),l=e.parentNode;a.classList.add("field-label"),a.setAttribute("for",e.id),a.textContent=e.name,e.placeholder=(t=e.name.replace(/([a-z])([A-Z])/g,"$1 $2"))[0].toUpperCase()+t.slice(1),l.insertBefore(a,e)});
//# sourceMappingURL=index.a039b1b3.js.map
