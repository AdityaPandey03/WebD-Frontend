const cardContainer=document.querySelector(".card-container");

const cardData=
[
    {heading: "heading1", content:"adiPandey", id:1 },
    {heading: "heading1", content:"adiPandey", id:2 },
    {heading: "heading1", content:"adiPandey", id:3 },
    {heading: "heading1", content:"adiPandey", id:4 },
    {heading: "heading1", content:"adiPandey", id:5 },
    {heading: "heading1", content:"adiPandey", id:6 },
    {heading: "heading1", content:"adiPandey", id:7 },
];

const createNotes=((array)=>{
    array.forEach(cardObj=>{
        const { heading,content }=cardObj;
        const id=cardObj.id;
        const card=document.createElement("div");
        card.classList.add("card");
        card.id=id;

        const insideHtml=`<div class="card-header"><div class="card-heading">${heading}</div><div class="edit-note"><img src="../../asset/edit_note.svg"></div></div><div class="card-content">${content}</div>`

    card.innerHTML= insideHtml;

    cardContainer.appendChild(card);

    });
});

createNotes(cardData);