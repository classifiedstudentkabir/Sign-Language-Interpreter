markdown
# 📌 How to download the Project on Your PC

## 🔽 1. Prepare Your Folder & Clone the Repository

### 1️⃣ Create a Folder on Your PC
* Go to **D drive** (or any drive)
* Right-click → **New Folder**
* Name it anything you like (example: `hacknova`)

### 2️⃣ Open That Folder in VS Code
* Open **VS Code**
* Click **File → Open Folder**
* Select the folder you just created

### 3️⃣ Open the Terminal in VS Code
* Click **View → Terminal**

### 4️⃣ Clone the Repository Inside That Folder
```bash
git clone https://github.com/classifiedstudentkabir/Sign-Language-Interpreter.git
```


This will download the full project inside the folder you opened.

## 📂 2. Move Inside the Project Folder

After cloning, enter the project directory:

```bash
cd hacknova
```


Check the files:

```bash
ls

```

You should now see all project files inside the folder.

## 🔍 3. Check Your Current Branch

Make sure you are on the correct branch (main):

```bash
git status

```

If it shows: `On branch main`, you’re good to go.

## 🔄 Staying Up-To-Date With Team Changes

If someone from the team uploads new work (code, images, documents, or presentations), pull the latest changes:

```bash
git pull origin main

```

This updates your local folder to match the GitHub repository.

## ⬆️ Uploading Your Own Work

Whenever you add or modify files, follow these 3 steps:

### 1️⃣ Stage Your Changes

```bash
git add .

```

### 2️⃣ Commit Your Changes

```bash
git commit -m "Your update message here"

```

**Example:** `git commit -m "Added frontend gesture detection"`

### 3️⃣ Push to GitHub

```bash
git push origin main

```

Your work will now be visible to the entire team.

## 🧑‍💻 First-Time Git Setup (Only Once)

If this is your first time using Git on your laptop, run:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your_github_email@example.com"

```

Without this, Git will not allow commits.

## ⚠️ Useful Commands – Quick Reference

| Task | Command |
| --- | --- |
| Check where you are | `pwd` |
| List files | `ls` |
| Check current branch | `git status` |
| Check remote | `git remote -v` |
| Pull latest changes | `git pull origin main` |
| Stage all files | `git add .` |
| Commit changes | `git commit -m "msg"` |
| Push to GitHub | `git push origin main` |
