const exec = require("child_process").exec;
const pkg = require("../package.json");
const cliDictionary = "./src/main";

test("should return cli version", async done => {
  await exec(`node ${cliDictionary} --version`, (error, out) => {
    if (error) throw error;
    expect(out.replace("\n", "")).toBe(pkg.version);
    done();
  });
});

test("should return the description when cli-dictionary --help", async done => {
  await exec(`node ${cliDictionary} --help`, (error, out) => {
    if (error) throw error;
    expect(out).toContain("A CLI that shows the definition of a word.");
    done();
  });
});

test("should return the word option when cli-dictionary --help", async done => {
  await exec(`node ${cliDictionary} --help`, (error, out) => {
    if (error) throw error;
    expect(out).toContain("--word");
    done();
  });
});
