function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /* pode ser escrito com esse codigo simplificado tambem

  html.classList.toggle("light")

  muito mais simples

  */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de uma pessoa, usando óculos escuros, uma jaqueta preta, com o fundo degrade de roxo para azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de uma pessoa, usando óculos e barba, uma camisa preta, com fundo laranja"
    )
  }
}
