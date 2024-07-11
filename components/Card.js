class Card {
    constructor(description, isCompleted) {
        this._description  = description;
        this._isCompleted = isCompleted;
    }

    AddCard() {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.innerText = this._description;
        body.appendChild(p);
    }

    removeCard() {
        const el = document.querySelectorAll("p");
        el.forEach(e => {
            e.addEventListener("click", () => e.remove());
        })
    }

    removeAll() {
        const bnt = document.querySelector()
    }
}


const input = document.querySelector("input");

input.addEventListener("keyup",(e) => {
    const card = new Card(input.value, false);
    
    if(e.key === "Enter")
    {
        card.AddCard();
        input.value = "";
    }
        

    card.removeCard();
    console.log(card);
});