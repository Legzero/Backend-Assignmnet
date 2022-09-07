const prompt = require(`prompt-sync`)({sigint:true})

const mySentence = []

let sample = `I love algorithms but i think the ones here are too simple`

console.log(sample)



const getSentence = () => {

    let sentence = prompt(`Enter the above sentence ⤴: `) 

    

    mySentence.push(sentence)

    

    const sentence2 = sentence.split(' ')



    console.log(mySentence)

    console.log(sentence2)

}



getSentence()