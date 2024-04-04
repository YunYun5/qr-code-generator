import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const questions = [
    {
      type: 'input',
      name: 'URL',
      message: "What is the URL?",
    }
]

inquirer
  .prompt([
    questions[0]
  ])
  .then((answers) => {
    var qr_image = qr.image(answers.URL);
    qr_image.pipe(fs.createWriteStream('qr_img.png'));
 
    fs.writeFile("URL.txt", answers.URL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });