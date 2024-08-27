#! /usr/bin/env node

const { program } = require("commander");
const download = require("download-git-repo");
const inquirer = require("inquirer");
const ora = require("ora");
const Loading = ora("Loading...")

const githubName = {
    vue2:'vue3-ts-vite-project',
    vue3:'vue3-template',
    uniapp:'vue3-ts-vite-project',
    react:'react-stady',
}

program.version("1.0.0").usage("<command> [option]");
// 定义命令
program
  .command("create <app-name>")
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exist")
  .action((name, options) => {
    // console.log("commander输出=name:", name, "；options:", options);
  });
// 解析用户执行命令传入参数
program.parse(process.argv);
// 文件名称
const projectName = program.args[1];
// console.log("文件名称projectName=", projectName);

// 交互式命令
inquirer
  .prompt([
    // {
    //   type: "input",
    //   name: "name",
    //   message: "Project name",
    //   default: "raccoon-project", // 默认值
    // },
    {
      type: "list", // type： input, number, confirm, list, checkbox ...
      name: "template", // key 名
      message: "Please choose a template to create project", // 提示信息
      choices: ["vue2", "vue3","uniapp","react"], // 需要改成从远程拉取模板数据
    },
  ])
  .then((answers) => {
    // console.log(projectName, "输入结果", answers);
    downloadTemplate(answers.template);
  });

const downloadTemplate = (template) => {
    Loading.start();
  /** 参数：
   *  仓库地址 direct:giturl ， 并且可以指定一个分支 如 #my-branch
   *  下载路径到某文件下
   *  选项参数
   *  回调
   * */
  const repository = `direct:https://github.com/Crazy-chang/${githubName[template]}.git`; // #master
  download(repository, projectName, { clone: true }, (err) => {
    // 判断是否下载成功
    if(String(err).indexOf('128') > 0){
        Loading.fail();
        console.log(`\r\n created fail`, err);
    } else {
        Loading.succeed();
        console.log(`\r\nSuccessfully created project ${projectName}`);
        console.log(`\r\n  cd ${projectName}`);
        console.log("  npm run dev\r\n");
    }
  });
};
