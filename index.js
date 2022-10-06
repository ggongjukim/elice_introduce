// mouseover 시 darkgray, 글자 간격 벌어지기
//이미지 누르면 해당 이미지 뜨도록
const description = document.querySelectorAll(".description");
document.querySelector("#chaeso").classList.add("on");


console.log(document.querySelectorAll(".skill_"));
document.querySelectorAll(".skill_").forEach((button)=>{
    button.addEventListener("click",(e)=>{

        document.querySelector("#main").src = e.target.id + '.png';

        //설명
        description.forEach(item => item.classList.remove("on"));
        console.log(document.querySelector(`.description #${e.target.id}`));
        document.querySelector(`.description#${e.target.id}`).classList.add("on");
    })
})

