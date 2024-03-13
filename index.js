// TODO: Include packages needed for this application
const inquirer=require(`inquirer`);
const generateMarkdown=requiere(`./utils/generateMarkdown`)
// TODO: Create an array of questions for user input
const questions = [{}];
type:

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const contents= generateMarkowdown(data)
//write file 


FileSystem.writeToFile(fileName,contents,(err=>{
    err?new Error("write file blew up"):console.log("Normal Error");
})
)

}

// TODO: Create a function to initialize app
async function init() {
const answers= await inquirer.createPromptModule(questions);
//pass this stuff to the output function
writeToFile(`ream.md`,answers);
}

// Function call to initialize app
function init() {
inquirer.createPromptModule(questions).then((inquirerResponses) => {
console.log(`Genrating README ...`);
writeToFile(`read.me`,answers)});
}
init()