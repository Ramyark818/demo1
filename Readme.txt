*git clone repo_url//clonig or copying repository from github*

//setting username
git config --global user.name "user"

git config --global user.email "emailid"

*//git clone repo_url*

git status//list down all modified,newly added files or folders
git branch//list down all available branchs

git clone repo_url//clonig or copying repository from github

//pushing commands to the remote repository(below 3 commands)
git add .//all modified files will be added to the staging area(files that are ready to commit or ready to push to github repository)  //remote repository means github repository
git commit -m "Initial commit"//files or folders which are ready to be pushed to the remote repository
git push origin BRANCH_NAME//for pushing local changes to the remote repository

git branch BRANCH_NAME//creating new branch
git branch child

git checkout BRANCH_NAME//to get into specified or particular branch
git checkout child

git pull origin BRANCH_NAME//pulling latest changes from the remote repository to local repository
