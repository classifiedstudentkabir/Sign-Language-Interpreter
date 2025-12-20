
# 📌 How get this hacknova folder into your PC

## 🔽 **1. Prepare Your Folder + Clone the Repository**

1. **Create a Folder on Your PC**

   * Example:

     * Go to **D drive**
     * Right-click → **New Folder**
     * Name it: `HackNova` *(or anything you like)*

2. **Open That Folder in VS Code**

   * Open VS Code
   * Click **File → Open Folder**
   * Select the folder you just created

3. **Open the Terminal in VS Code**

   * Click **View → Terminal**

4. **Clone the Repository Inside That Folder**

   * Type this command:

```bash
git clone https://github.com/classifiedstudentkabir/Sign-Language-Interpreter.git
```

This will download the full project **inside the folder you opened in VS Code**.

---

## 📂 **2. Move Inside the Project Folder**

After cloning, enter the newly downloaded project directory:

```bash
cd Sign-Language-Interpreter
```

Check the files:

```bash
ls
```

You should now see all project files inside the folder.

---

## 🔍 **3. Check Your Current Branch**

Make sure you are on the correct branch (`main`):

```bash
git status
```

If it shows:

```
On branch main
```

you’re good to go.

---

# 🔄 Staying Up-To-Date With Team Changes

If someone from the team uploads new work (like PPT, code, images, or documents), you must **pull** the latest changes.

Run:

```bash
git pull origin main
```

This updates your local folder to match the GitHub repo.

---

# ⬆️ Uploading Your Own Work (Your Changes)

Whenever you add or modify files, follow these 3 important steps:

---

## 1️⃣ Stage Your Changes

```bash
git add .
```

This includes all new/updated files.

---

## 2️⃣ Commit Your Changes

```bash
git commit -m "Your update message here"
```

Example:

```bash
git commit -m "Added PPT slides and images"
```

---

## 3️⃣ Push to GitHub

```bash
git push origin main
```

This uploads your work so the team can see it.

---

# 🧑‍💻 First-Time Git Setup (Only Once)

If you're using Git for the very first time on your laptop, set your identity:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your_github_email@example.com"
```

Without this, Git will not allow you to commit.

---

# ⚠️ Useful Commands Quick Reference

| Task                 | Command                |
| -------------------- | ---------------------- |
| Check where you are  | `pwd`                  |
| List files in folder | `ls`                   |
| Check current branch | `git status`           |
| See if remote is set | `git remote -v`        |
| Pull latest changes  | `git pull origin main` |
| Upload your work     | `git push origin main` |
| Stage all files      | `git add .`            |
| Commit with message  | `git commit -m "msg"`  |

