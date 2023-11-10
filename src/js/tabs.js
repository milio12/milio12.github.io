

 tabs = document.querySelectorAll(".tab")
 indicator = document.querySelector(".indicator")
 panels = document.querySelectorAll(".tab-panel")

indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach(tab =>{
  tab.addEventListener("click", ()=>{
     tabTarget = tab.getAttribute("aria-controls")

    indicator.style.width = tab.getBoundingClientRect().width + 'px'
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


    panels.forEach(panel =>
      {
       panelId = panel.getAttribute("id")
      if(tabTarget === panelId){
        panel.classList.remove("invisible", "opacity-0")
        panel.classList.add("visible", "opacity-100")
      } else {
        panel.classList.add("invisible", "opacity-0")
      }
    })
  })
})