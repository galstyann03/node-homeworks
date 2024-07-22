const dayjs = require("dayjs");
const {program} = require("commander");

// Greetings in different languages
const greetings = {
    en: "Hello",
    ru: "Privet",
    am: "Voghjuyn",
    fr: "Bonjour",
    cn: "Ni hao"
};

// Defining command-line options
program.option("-n, --name <name>", "the name of the user", "guest")
    .option("-l, --level <level>", "verbosity level", "1")
    .option("-g, --greeting <greeting>", "greeting message", greetings.en)
    .option("-la --language <language>", "language of the greeting message", "en");

program.parse(process.argv);

// Extracting options
let {name, level, greeting, language} = program.opts();

// Setting the greeting based on provided language, unless greeting message given
if (greeting === greetings.en) greeting = greetings[language];

let message = `${greeting}, ${name}!`;
const date = dayjs().format("YYYY-MM-DD HH:mm:ss");

if (level === "2") message += ` (Date and Time: ${date})`;

console.log(message);