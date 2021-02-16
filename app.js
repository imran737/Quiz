var questoins = [
    {
        question: 'HTML stands for -------',
        option: ['Hyper Text Markup Language', 'Hyper Tension Markup Loss', 'Hygen Temp Makeup life', 'Hello Text Mass Language'],
        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        question: 'CSS stands for -------',
        option: ['Curly Score Source', 'Cascading Style Sheets', 'Current Style Solid', 'Cube Style Sheet'],
        correctAnswer: 'Cascading Style Sheets'
    },
    {
        question: 'Is JS Functional languagae?',
        option: ['True', 'False'],
        correctAnswer: 'True'
    },
    {
        question: 'JS stands for -------',
        option: ['Hyper Text Markup Language', 'Hyper Tension Markup Loss', 'Hygen Temp Makeup life', 'Java Script'],
        correctAnswer: 'Java Script'
    }
]

var questionIndx = 0

function displayQuestion(){
    var a = document.getElementById("questionCompleted")
    a.innerHTML = questionIndx + 1
    var b = document.getElementById("totalQuestion")
    b.innerHTML = question.length
    var questiondisplay = document.getElementById("question")
    questiondisplay.innerHTML = questions[1].question
    var optionDiv = document.getElementById("optonsparent")
    for (var i = 0; i<questoins[1].option.length; i++) {
        var div = document.createElement('div')
        div.setAttribute("class", "col-md-6 p-3")
        var optionbtn = document.createElement("button")
        optionbtn.setAttribute("class", "custombtn")
        var opitonBtnText = document.createTextNode(questions[1].option)
        optionbtn.appendChild(opitonBtnText)
        div.appendChild(optionBtn)
        optionDiv.appendChild(div) 
    }
}
