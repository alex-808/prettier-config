import { Command, flags } from '@oclif/command'
// had to install @types/ncp
import ncp from 'ncp'
import path from 'path'
import ora from 'ora'

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
    const spinner = ora('Copying default .prettierrc to directory\n').start()
    const { args, flags } = this.parse(PrettierConfig)
    const currentDir = __dirname
    const targetDir = process.cwd()
    const relativeDir = '../templates'
    const templateDir = path.resolve(currentDir, relativeDir)
    ncp(templateDir, targetDir, err => {
      if (err) {
        console.error(err)
      } else {
        console.log('default .prettierrc copied to folder')
      }
      spinner.stop()
    })
  }
}

export = PrettierConfig
