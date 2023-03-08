import './style.css';

const tabs: NodeListOf<HTMLHeadingElement> = document.querySelectorAll<HTMLHeadingElement>(".tab");
const sections: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".section");

console.log(tabs);
console.log(sections);

tabs.forEach((t, i) => {
    t.addEventListener("click", _ => {
        // Make all sections hidden
        sections.forEach(s => {
            s.hidden = true;
        });
        // Make the correct section visible
        sections[i].hidden = false;
    });
});
