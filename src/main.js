export const tabs = document.querySelectorAll(".tab");
export const sections = document.querySelectorAll(".section");

tabs.forEach((t, i) => {

    t.addEventListener("click", _ => {

        // Remove ">" markers on every tab
        tabs.forEach((tab) => {
            if (tab.innerText.startsWith(">")) {
                tab.innerText = tab.innerText.substring(1)
            }
        });

        // Hide all sections
        sections.forEach(s => {
            s.hidden = true;
        });

        // Make the clicked tab's section visible
        t.innerText = `>${t.innerText}`;
        sections[i].hidden = false;

    });

});
