// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.



let Mix_data: [string, number, string, boolean, string,] = ["shoaib", 23, "Mitho", true, "Azlaan"];


let Only_words = Mix_data.filter((item) => typeof item === "string");

console.log(Only_words);  // Output [ 'shoaib', 'Mitho', 'Azlaan' ]


// Notes
// is mein hamne array mein se sirf strings words ko nikal kar aik new array mein save kiyya...   