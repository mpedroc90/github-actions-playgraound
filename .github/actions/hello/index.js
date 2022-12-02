const core = require("@actions/core")
const github = require("@actions/github")


try {

    console.log(`hello ${core.getInput('who-to-greet')}`);

const time = new Date();

core.setOutput("time", time.toTimeString());

console.log(JSON.stringify(github, null, 2))
}
 catch (error ) {
    core.setFailed(error.message)
 }