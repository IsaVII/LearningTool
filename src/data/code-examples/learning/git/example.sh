# 1. Get a local copy of a shared repository
git clone https://github.com/team/project.git
cd project

# 2. Create a branch so main stays untouched while you work
git checkout -b feature/login-form

# 3. Edit files, then stage the ones you want to commit
git add src/LoginForm.jsx

# 4. Record a snapshot of the staged changes
git commit -m "Add login form component"

# 5. Bring in anything teammates pushed to main while you worked
git checkout main
git pull origin main

# 6. Bring those updates into your feature branch too
git checkout feature/login-form
git rebase main

# 7. Publish the branch so others - and a pull request - can see it
git push origin feature/login-form
