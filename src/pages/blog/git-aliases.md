---
title: Speeding up your gitflow with aliases
date: 2018-12-20
---
Sometimes it gets boring to have to write those long git commands over and over again, and one of the attributes that makes a great programmer is _laziness_.

In an effort to improve my laziness, I put together these aliases on the git commands I use most to speed up my 
gitflow. If you're on a mac or a linux machine, you can set them up in your `.bashrc` or `.bash_profile`. These files can be found in 
your home directory (basically the default path that your terminal will be on when you open it. The dot means that they're hidden files so... 
keep that in mind in case you're wondering why you're not seeing them. Running `ls -a` on the terminal should show you all the files in the directory, 
then you can edit for example the `.bashrc` by running `vim .bashrc` or `nano .bashrc` or `gedit .bashrc` etc). A basic familiarity 
with the terminal is assumed so I won't go much into it 😊. Feel free to reach out to me though if you're having problems. 

### Initialising a new git repository
```bash
alias gi='git init'
```
So that instead of doing `git init` you just do `gi`

### Checking the status of files
```bash
alias gs='git status'
```
So that instead of doing `git status` you just do `gs`

### Adding files to the staging area
```bash
alias ga='git add'
```
So that instead of doing `git add file` you just do `ga file`

### Committing your changes
```bash
alias gcm='git commit -m'
```
So that instead of doing `git commit -m "commit message"` you just do `gcm "commit message"`

### Pushing your changes to a remote origin
```bash
alias gpso='git push origin'
```
So that instead of doing `git push origin develop` you just do `gpso develop`

### Pulling changes from a remote origin
```bash
alias gplo='git pull origin'
```
So that instead of doing `git pull origin develop` you just do `gplo develop`

### Checking your branches
```bash
alias gb='git branch'
```
So that instead of doing `git branch` you just do `gb`

### Switching branches
```bash
alias gc='git checkout'
```
So that instead of doing `git checkout master` you just do `gc master`

### Creating a new branch and switching to it
```bash
alias gcb='git checkout -b'
```
So that instead of doing `git checkout -b ft-branch` you just do `gcb ft-branch`

### Renaming a branch
```bash
#if you are on the branch you want to rename
alias gbm='git branch -m'
```
So that instead of doing `git branch -m bg-branch` you just do `gbm bg-branch`

### Merging a branch
```bash
alias gm='git merge'
```
So that instead of doing `git merge bg-branch` you just do `gm bg-branch`

### Deleting a branch
```bash
alias gbd='git branch -d' #use -D for a forced delete
```
So that instead of doing `git branch -d ft-branch` you just do `gbd ft-branch`

These are just a few of the ones I most commonly use. There's a whole lot of other commands that you may use from time 
to time, and you can always come back to your aliases and add them. 

If you add all the above aliases to your `.bashrc` or `.bash_profile` (or `.zshrc` if you're using Zsh), this is how it 
should look:
```bash
# .bashrc or .bash_profile or .zshrc
# git aliases
alias gi='git init'
alias gs='git status'
alias ga='git add'
alias gcm='git commit -m'
alias gpso='git push origin'
alias gplo='git pull origin'
alias gb='git branch'
alias gc='git checkout'
alias gcb='git checkout -b'
alias gbm='git branch -m'
alias gm='git merge'
alias gbd='git branch -d' #use -D for a forced delete
```

Remember to run `source .bashrc`, `source .bash_profile` or `source .zshrc` when you're done adding your aliases. If no errors are displayed, you're good to go.
