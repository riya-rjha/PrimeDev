# Prime Development

Here are the following commands that have been executed to create a repository on GitHub and add a remote origin to the local repository.

1. git init (in particular folder)

2. git add <file1path> <file2path> <file3path>

3. git commit -m "title" -m "description"

4. git push 
    * Error 1: If you have not configured a remote branch
    * * Do: git remote add repoName repoLink
    * Error 2: If your branch does not exist on remote server
    * * Do git push --set-upstream repoName branchName

