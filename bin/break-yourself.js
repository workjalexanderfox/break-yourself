#! /usr/bin/env node
const shell = require('shelljs');

const ROOT_DIR = process.cwd();
const PACKAGE = require(`${ROOT_DIR}/package.json`);
const DEST_DIR = 'break-yourself';

const PACKAGE_NAME = PACKAGE.name; // shell.exec('npm view "" name').stdout;
const PACKAGE_VERSION = PACKAGE.version; // shell.exec('npm view "" version').stdout;
const LATEST_VERSION_COMMIT_ID = shell.exec(`npm show ${PACKAGE.name} gitHead`).stdout;

shell.echo(ROOT_DIR);
shell.echo(DEST_DIR);
shell.echo('LATEST_VERSION_COMMIT_ID');
shell.echo(LATEST_VERSION_COMMIT_ID);

// # 1) Duplicate the project
// #   --delete destination files that do not exist in the source
// #   --exclude the destination directory from the source
shell.exec(`mkdir -p ${DEST_DIR}`);

shell.echo('Duplicating the project into:');
shell.echo(`${DEST_DIR}`);
shell.exec(`rsync -avh --delete --exclude=${DEST_DIR} ./ ${DEST_DIR}`);

// # 2) Work with the duped project
shell.cd(DEST_DIR);
shell.echo('Working with the dupe in:');
shell.exec('echo $(pwd)');

// # 2.2) Get package latest version test files
shell.echo(`Checking out latest version specs from: ${PACKAGE_NAME}@${PACKAGE_VERSION}`);
shell.echo(`Commit: ${LATEST_VERSION_COMMIT_ID}`);
shell.exec(`git ls-files | grep spec.js | xargs git checkout ${LATEST_VERSION_COMMIT_ID}`);

// # 2.3) Run the tests
shell.echo('Run the tests');
shell.exec('npm run test');
