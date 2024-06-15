// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a
// computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get
// three specific skills from this list and show them.


let programmer_skills = {

    languages: ["HTML", "CSS", "TypeScript", "Python"],

    frameworks: ["Ruby on Rails", "Angular", "Spring"],

    tools: ["Git", "Subversion", "Mercurial"],

  };
  

  let { languages, frameworks, tools } = programmer_skills;
  

  console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);




