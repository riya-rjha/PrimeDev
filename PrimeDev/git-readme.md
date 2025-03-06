# Prime Development

Here are the following commands that have been executed to create a repository on GitHub and add a remote origin to the local repository.

1. git init (in particular folder)

2. git add <file1path> <file2path> <file3path>

3. git commit -m "title" -m "description"

4. git push

   - Error 1: If you have not configured a remote branch
   - - Do: git remote add repoName repoLink
   - Error 2: If your branch does not exist on remote server
   - - Do git push --set-upstream repoName branchName

5. Formats

## CommonJS Format

- mostly used in old node/express apps

`    module.exports = temp;
    const temp = require("././")`

## ES Modules

- all modern apps

`
export temp;
import temp from "././"

import React from 'react';
import ReactDOM from 'react-dom';

`

## React Notes

1. StrictMode in main.jsx: This renders the application two times for verification
2. React makes single page application -> index.html which is single
3. devDependencies -> these are all required during developmen only, not during or after production
4. createRoot() => creates a root to manage the entire react application
5. StrictMode => runs twice in development, twice rendering and strict type checks
6. 