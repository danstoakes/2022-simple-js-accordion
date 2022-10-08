document.addEventListener("DOMContentLoaded", function (event) {
    const accordionTabs = document.getElementsByClassName("accordion-tab-head");
    if (accordionTabs !== null) {
        for (var i = 0; i < accordionTabs.length; i++)
        {
            const tab = accordionTabs[i];
            tab.addEventListener("click", function () {
                const openTabContainer = document.getElementsByClassName("tab-open");

		if (openTabContainer !== null && openTabContainer.length > 0) 
		{	
			openTabContainer[0].querySelector(".accordion-tab-body").style.height = "0px";
                	openTabContainer[0].classList.remove("tab-open");
		}
    
                const tabContainer = tab.parentElement;
                tabContainer.classList.add("tab-open");
		
		tabContainer.querySelector(".accordion-tab-body").style.height = tabContainer.querySelector(".accordion-tab-body-list").clientHeight + "px";
            });
        }
    }
}, false);
