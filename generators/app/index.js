'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the doozie ${chalk.red('generator-publishify')} generator!`)
    );

return;
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath()
    );
  }

  install() {
    this.installDependencies();
  }
};
