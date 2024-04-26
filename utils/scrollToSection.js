// utils/scrollToSection.js
export const scrollToSection = (sectionId) => {
  const section = document.querySelector(`#${sectionId}`)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}
//code to transition to section
/* function handleClick(section: string, e: { preventDefault: () => void }) {
    e.preventDefault()
    window.location.hash = section
    scrollToSection(section)
  } 
  */

//code to add to onSubmit handler
//onSubmit={(e) => handleClick("a", e)}
