#!/bin/bash

ROOT_DIR="$(pwd)"
DEST_NAME="break-yourself"
DEST_DIR="./${DEST_NAME}"


# 1) Duplicate the project
#   --delete destination files that do not exist in the source
#   --exclude the destination directory from the source
mkdir -p ${DEST_DIR}
rsync -avh --delete --exclude=${DEST_NAME} ./ ${DEST_DIR}
echo "Duplicating the project into:"
echo ${DEST_DIR}

# 2) Work with the duped project
cd ${DEST_DIR}
echo "Working with the dupe in:"
echo $(pwd)

# 2.1) Get package name
PACKAGE_NAME="$(npm view \"\" name)"
PACKAGE_VERSION="$(npm view \"\" version)"
BRANCH_NAME=$(git branch | grep \* | cut -d ' ' -f2)

# 2.2) Get package latest version commit id
LATEST_VERSION_COMMIT_ID=$(npm show ${PACKAGE_NAME} gitHead)
echo "Checking out latest version specs from: $PACKAGE_NAME@$PACKAGE_VERSION"
echo "Commit: $LATEST_VERSION_COMMIT_ID"
echo "Into current branch $BRANCH_NAME"
git ls-files | grep spec.js | xargs git checkout ${LATEST_VERSION_COMMIT_ID}

# 2.3) Run the tests
echo "Run the tests"
npm run test

# # CLEANUP
# cd ${ROOT_DIR}
# echo $(pwd)
# rm -rf ${DEST_DIR}

# Git current branch name
