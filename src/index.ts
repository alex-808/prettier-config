import { Command, flags } from '@oclif/command'
// had to install @types/ncp
import ncp from 'ncp'
import path from 'path'

// tab width
// tabs
// semicolons
// quotes
// arrow function parenthes
//
// edit the default file?
class PrettierConfig extends Command {
  static description =
    'Add copy of personal default .prettierrc file to current directory'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
  }

  //static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(PrettierConfig)

    const currentDir = __dirname
    const targetDir = process.cwd()
    const templateDir = path.resolve(currentDir, '../templates')

    ncp(templateDir, targetDir, err => {
      if (err) {
        console.error(err)
      } else {
        console.log('default .prettierrc copied to folder')
      }
    })
  }
}
export = PrettierConfig
