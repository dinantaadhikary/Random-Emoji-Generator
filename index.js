const btn1 = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){
    let response = await fetch ("https://emoji-api.com/emojis?access_key=42809aaad0fd5db53c3722cd27a76994539e9984")
    data = await response.json()
    console.log(data);
    for (let i=0; i<1500; i++){
        emoji.push({
           emojiName: data[i].character,
           emojiCode: data[i].unicodeName,


        });

    }
}

getEmoji();
btn1.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btn1.innerText = emoji[randomNum].emojiName;
    emojiNameE1.innerText = emoji[randomNum].emojiCode;
});
