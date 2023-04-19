import './style.css';

const tabs: NodeListOf<HTMLHeadingElement> = document.querySelectorAll<HTMLHeadingElement>(".tab");
const sections: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".section");

tabs.forEach((t, i) => {
    t.addEventListener("click", _ => {
        // Remove markers on every tab
        tabs.forEach((tab) => {
            if (tab.innerText.startsWith(">")) {
                tab.innerText = tab.innerText.substring(1)
            }
        });
        // Make all sections hidden
        sections.forEach(s => {
            s.hidden = true;
        });
        // Make the correct section visible
        t.innerText = `>${t.innerText}`;
        sections[i].hidden = false;
    });
});
