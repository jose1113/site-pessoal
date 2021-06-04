function swapStyleSheet(sheet){
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

let dataReload = document.querySelectorAll("[data-reload]")

let language = {
    pt: {
        developer: "Eu sou desenvolvedor Front-end",
        contact: "Contato",
        aboutMe: "Sobre mim",
        topo: "Topo [1]",
        aboutMeup: "Sobre mim [2]",
        skills: "Habilidades [3]",
        education: "Minha formação [4]",
        aboutMeDown: "Sobre mim",
        sobreText: "Sou um estudante da área de T.I., onde atualmente estou matrículado na FATEC de Taquaritinga/SP. Sou formado em Técnico em Sistemas para Internet, pela ETEC da mesma cidade. Sendo assim, tenho experiência em algumas linguagens de programação, bem como frameworks. Alguns deles estão listados abaixo.",
        totalProjects: "Total de projetos",
        completed: "Concluídos",
        progress: "Em andamento",
        skillsDown: "Habilidades",
        developerDown: "Desenvolvimento Front-end",
        code: "HTML5 e CSS3",
        graphicDesign: "Design gráfico",
        myFormation: "Minha formação",
        educationOne: "Formado em Técnico em Informática para Internet Etec Dans (2019)",
        educationTwo: "Cursando superior de tecnologia em Sistemas para Internet",
        rights: "Copyright © José Igor - Todos os direitos reservados.",
        nameForm: "Nome"
    },
    en: {
        developer: "I'm a Front-end developer",
        contact: "Contact",
        aboutMe: "About me",
        topo: "Top [1]",
        aboutMeup: "About me [2]",
        skills: "Skills [3]",
        education: "Education [4]",
        aboutMeDown: "About me",
        sobreText: "I am a student in the IT area, where I am currently enrolled at FATEC in Taquaritinga/SP. I have a degree in Internet Systems Technician from ETEC in the same city. Therefore, I have experience in some programming languages ​​as well as frameworks. Some of them are listed below.",
        totalProjects: "Total projects",
        completed: "Completed",
        progress: "Progress",
        skillsDown: "Skills",
        developerDown: "Front-end development",
        code: "HTML5 and CSS3",
        graphicDesign: "Graphic design",
        myFormation: "Education",
        educationOne: "Graduated in Technician in Computers for Internet Etec Dans (2019)",
        educationTwo: "Studying higher in technology in Internet Systems",
        rights: "Copyright © José Igor - All rights reserved.",
        nameForm: "Name"
    }
}

if (window.location.hash) {
    if (window.location.hash === "#en") {
        topo.textContent = language.en.developer,
        contato.textContent = language.en.contact,
        sobre.textContent = language.en.aboutMe,
        sobreTopo.textContent = language.en.aboutMeup,
        sobreBaixo.textContent = language.en.aboutMeDown,
        sobreTexto.textContent = language.en.sobreText,
        skills.textContent = language.en.skills,
        topUp.textContent = language.en.topo,
        educationTop.textContent = language.en.education,
        totalProjects.textContent = language.en.totalProjects,
        completed.textContent = language.en.completed,
        progress.textContent = language.en.progress,
        skillsDown.textContent = language.en.skillsDown,
        developerDown.textContent = language.en.developerDown,
        code.textContent = language.en.code,
        graphicDesign.textContent = language.en.graphicDesign,
        myFormation.textContent = language.en.myFormation,
        educationOne.textContent = language.en.educationOne,
        educationTwo.textContent = language.en.educationTwo,
        rights.textContent = language.en.rights,
        nameForm.textContent = language.en.nameForm
    }
}

for (i = 0; i <= dataReload.length - 1; i++) {
    dataReload[i].onclick = function() {
        setTimeout(function () {
            location.reload(true);
        }, 150) // adjust the timer that works for you (1000 = 1 second)
    }
}