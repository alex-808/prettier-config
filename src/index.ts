import { Command, flags } from "@oclif/command";
import fs from "fs";
// had to install @types/ncp
import ncp from "ncp";
import { promisify } from "util";
import path from "path";

const access = promisify(fs.access);
const copy = promisify(ncp);
// tab width
// tabs
// semicolons
// quotes
// arrow function parenthes
//
// edit the default file?
class PrettierConfig extends Command {
  static description = "describe the command here";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(PrettierConfig);

    const currentDir = __dirname;
    const targetDir = process.cwd();
    const templateDir = path.resolve(currentDir, "../templates");

    ncp(templateDir, targetDir, (err) => {
      if (err) {
        console.error(err);
      }
    });
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
export = PrettierConfig;
