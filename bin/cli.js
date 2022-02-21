#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command =>{
  try{
    execSync(`${command}, {stdio:'inherit'}`);
  } catch(e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/arielmazor/cra-redux-ts.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`cloning the repo with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
console.log(111111111111111111111111111111111)
if(!checkedOut){
  console.log("error");
}
console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if(!installDeps){
  console.log("error");
}

console.log("Congratulations! You are ready to Code. Follow the following commands to start");
console.log(`cd ${repoName} && npm start`);