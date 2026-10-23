# FTP and Deployment

In the previous session, we explored the publishing workflow — choosing a domain, selecting a hosting provider, and understanding the steps to get your website online. Now we dive deeper into the practical process of transferring your website files from your local machine to a web server.

This session focuses on **FTP (File Transfer Protocol)** : what it is, how it works, and how to use it to deploy your website. We will also explore other deployment methods, including Git-based deployment, which is increasingly common in modern web development.

---

## Session 2 (Part 2): FTP Protocol, FTP Clients, and Deployment Methods

### A. Learning Outcome

Understand the FTP protocol, use FTP clients to transfer files, and compare different deployment methods.

### B. What Is FTP?

**FTP (File Transfer Protocol)** is a standard network protocol used to transfer files between a client (your computer) and a server (the hosting provider). In web development, FTP is used to upload website files from your local machine to a web server so that they become accessible to visitors on the internet.

**A Simple Analogy:**

Think of FTP like **moving boxes from your garage to a storage unit**. Your local computer is the garage — it contains all your website files. The web server is the storage unit — it's where the files need to go so people can access them. FTP is the moving truck that transports the boxes from one place to another.

### C. How FTP Works

**The FTP Workflow:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    FTP WORKFLOW                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Your Computer (Client)                                         │
│  ┌─────────────────────┐                                        │
│  │  index.html         │                                        │
│  │  style.css          │                                        │
│  │  images/            │                                        │
│  │    └── logo.png     │                                        │
│  │  scripts/           │                                        │
│  │    └── app.js       │                                        │
│  └──────────┬──────────┘                                        │
│             │                                                   │
│             ▼                                                   │
│  FTP Client (FileZilla, Cyberduck, etc.)                        │
│  ┌──────────────────────────────────────┐                       │
│  │  FTP Connection Settings:            │                       │
│  │  • Host: ftp.yourdomain.com          │                       │
│  │  • Username: your_username           │                       │
│  │  • Password: ********                │                       │
│  │  • Port: 21 (FTP) or 22 (SFTP)       │                       │
│  └──────────┬───────────────────────────┘                       │
│             │                                                   │
│             ▼                                                   │
│  Web Server (Remote)                                            │
│  ┌──────────────────────────────────────┐                       │
│  │  /public_html/                       │                       │
│  │  ├── index.html                      │                       │
│  │  ├── style.css                       │                       │
│  │  ├── images/                         │                       │
│  │  │   └── logo.png                    │                       │
│  │  └── scripts/                        │                       │
│  │      └── app.js                      │                       │
│  └──────────────────────────────────────┘                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key Components:**

| Component | Description | Example |
|-----------|-------------|---------|
| **FTP Client** | Software that connects to the FTP server | FileZilla, Cyberduck |
| **FTP Server** | The server that hosts your website files | Your hosting provider's server |
| **Host** | The server address | `ftp.yourdomain.com` |
| **Username** | Your FTP account username | `mywebsite_user` |
| **Password** | Your FTP account password | `********` |
| **Port** | The connection port | `21` (FTP), `22` (SFTP) |

### D. FTP vs SFTP vs FTPS

| Protocol | Security | Description | When to Use |
|----------|----------|-------------|-------------|
| **FTP** | ✗ Insecure | Passwords and data sent in plain text | Never — use SFTP instead |
| **FTPS** | ✓ Secure | FTP with SSL/TLS encryption | When SFTP is not available |
| **SFTP** | ✓ Secure | SSH File Transfer Protocol | **Recommended** — most secure |

**Why Security Matters:**

- FTP sends your username and password in **plain text**
- Anyone on the same network can intercept your credentials
- SFTP encrypts all data, including your password
- Most hosting providers now support SFTP

### E. FTP Clients (Software)

An **FTP client** is software that allows you to connect to an FTP server and transfer files. Think of it as a file manager for your website.

**Popular FTP Clients:**

| Client | Platform | Cost | Key Features |
|--------|----------|------|--------------|
| **FileZilla** | Windows, Mac, Linux | Free | Feature-rich, supports FTP/SFTP/FTPS, popular |
| **Cyberduck** | Windows, Mac | Free | User-friendly, supports cloud services |
| **WinSCP** | Windows | Free | Supports SFTP/SCP, secure, scriptable |
| **Fetch** | Mac | Paid | Simple interface, reliable |
| **Transmit** | Mac | Paid | Powerful, multi-protocol, cloud support |

### F. Using FileZilla — A Practical Walkthrough

FileZilla is one of the most popular FTP clients. Here is how to use it.

**Step 1: Download and Install FileZilla**

1. Visit [filezilla-project.org](https://filezilla-project.org/)
2. Download the version for your operating system
3. Install and open FileZilla

**Step 2: Connect to Your Server**

You will need your FTP credentials from your hosting provider:

| Credential | Where to Find |
|------------|---------------|
| **Host** | In your hosting control panel |
| **Username** | In your hosting control panel |
| **Password** | In your hosting control panel |
| **Port** | Usually 21 (FTP) or 22 (SFTP) |

**To Connect:**

1. Enter your credentials in the Quickconnect bar at the top
2. Click **Quickconnect**
3. FileZilla will attempt to connect to your server
4. Once connected, you will see your local files (left) and remote files (right)

**Step 3: Navigate to the Correct Directory**

Most hosting providers store website files in a specific directory:

| Directory | Provider |
|-----------|----------|
| `public_html/` | Common — used by most providers |
| `www/` | Another common directory name |
| `htdocs/` | Used by some servers |

**Step 4: Upload Your Files**

1. In the local pane (left), navigate to your project folder
2. In the remote pane (right), navigate to `public_html/`
3. Select the files you want to upload
4. Right-click and select **Upload**
5. Or, drag and drop from left to right

**Step 5: Verify the Upload**

1. Visit your website URL
2. Ensure the page loads correctly
3. Check all pages, images, and styles

**FileZilla Interface Overview:**

```
┌─────────────────────────────────────────────────────────────────┐
│  FileZilla Interface                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Quickconnect Bar: Host | Username | Password | Port    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌─────────────────────────────┬────────────────────────────┐   │
│  │  Local Site (Your Computer) │  Remote Site (Server)      │   │
│  │                             │                            │   │
│  │  [DIR] Desktop              │  [DIR] /public_html/       │   │
│  │  [DIR] Documents            │  ├── index.html            │   │
│  │  [DIR] Projects             │  ├── style.css             │   │
│  │    └── my-website/          │  ├── images/               │   │
│  │        ├── index.html       │  │   └── logo.png          │   │
│  │        ├── style.css        │  └── scripts/              │   │
│  │        ├── images/          │      └── app.js            │   │
│  │        │   └── logo.png     │                            │   │
│  │        └── scripts/         │                            │   │
│  │            └── app.js       │                            │   │
│  └─────────────────────────────┴────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Transfer Queue (Files waiting to be uploaded)          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### G. Common FTP Tasks

**1. Uploading a File**

```plaintext
Local:   index.html
Remote:  /public_html/index.html
Action:  Right-click → Upload (or drag and drop)
```

**2. Downloading a File**

```plaintext
Remote:  /public_html/index.html
Local:   Desktop/
Action:  Right-click → Download (or drag and drop)
```

**3. Creating a Directory**

```plaintext
Remote:  /public_html/
Action:  Right-click → Create Directory → Name it
```

**4. Deleting a File**

```plaintext
Remote:  /public_html/unused.html
Action:  Right-click → Delete → Confirm
```

**5. Changing File Permissions**

```plaintext
Remote:  /public_html/script.php
Action:  Right-click → File Permissions → Set values
```

### H. Alternative Deployment Methods

While FTP is widely used, modern web development offers other deployment methods that are often faster and more reliable.

**1. Git-Based Deployment**

Git-based deployment connects your Git repository to your hosting provider. When you push changes to your repository, the hosting provider automatically deploys your site.

**Supported By:**

| Platform | Method | Best For |
|----------|--------|----------|
| **GitHub Pages** | Push to `main` branch | Static sites, portfolios |
| **Netlify** | Connect GitHub repo | Static sites, forms |
| **Vercel** | Connect GitHub repo | React, Next.js apps |
| **Cloudflare Pages** | Connect GitHub repo | Static sites, JAMstack |

**Advantages:**

- One command: `git push` deploys your site
- Version control built-in
- Automatic deployment on changes
- Rollback to previous versions

**2. Hosting Control Panel (File Manager)**

Most hosting providers offer a web-based file manager for uploading files.

**Features:**

- Upload files directly through your browser
- Create and manage directories
- Edit files online
- Extract ZIP archives

**3. One-Click Deployment**

Some platforms offer one-click deployment from a template or repository.

**Examples:**

- **Netlify:** Drag-and-drop deployment
- **Vercel:** Deploy from GitHub with one click
- **Heroku:** Deploy from Git repository

### I. Common FTP Mistakes and How to Avoid Them

| Mistake | Why It Happens | How to Avoid |
|---------|----------------|--------------|
| **Uploading to wrong directory** | Not checking the remote path | Always confirm you're in `public_html/` |
| **Using FTP instead of SFTP** | Not knowing the difference | Use SFTP (port 22) whenever possible |
| **Not setting permissions** | Files are not readable by the web server | Set permissions: 644 for files, 755 for directories |
| **Forgetting to upload all files** | Missing images, CSS, or JavaScript | Upload the entire project folder |
| **Overwriting files accidentally** | Uploading without checking | Review the file list before uploading |
| **Uploading large files** | Large images slow down the site | Compress images before uploading |

### J. In-Class Activity: FTP Simulation

**Objective:** Students will practice the FTP workflow using a simulated scenario.

**Instructions:**

1. Create a simple HTML page with at least:
   - An `<h1>` heading
   - A paragraph
   - An image (even a placeholder image from a URL)
   - A CSS style (internal or external)

2. Identify the FTP credentials you would need:
   - Host
   - Username
   - Password
   - Port

3. List the steps you would follow to upload your files:
   - Connect to the server
   - Navigate to the correct directory
   - Upload files
   - Verify the upload

4. Draw a simple diagram showing the FTP workflow from your computer to the server.

**Sample HTML for Activity:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FTP Practice Page</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
      background-color: #f8f9fa;
    }
    h1 {
      color: #2d3436;
      border-bottom: 3px solid #3498db;
      padding-bottom: 10px;
    }
    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>FTP Practice Page</h1>
  <p>This page was created to practise the FTP deployment workflow.</p>
  <img src="https://picsum.photos/600/300" alt="Placeholder image from Lorem Picsum">
  <p><strong>Successful deployment:</strong> This page should now be live on the internet!</p>
</body>
</html>
```

### K. Homework: FTP Scavenger Hunt

**Task:** Research and answer the following questions:

1. What FTP client would you recommend to a beginner and why?
2. What is the difference between FTP and SFTP?
3. What is the typical port number for FTP and SFTP?
4. Why is it important to upload files to the correct directory (e.g., `public_html`)?
5. What should you check after uploading files to ensure your site is working?
6. Compare FTP with Git-based deployment. Which is better and why?

**Bonus:** Download and install FileZilla. Connect to a practice FTP server (many hosting providers offer a test server). Document your experience.

### L. Session Summary

| Concept | Key Idea |
|---------|----------|
| FTP | File Transfer Protocol — transfers files to a server |
| SFTP | Secure FTP — encrypted file transfers |
| FTP Client | Software for connecting to FTP servers |
| FileZilla | Popular free FTP client |
| Host | Server address for FTP connection |
| Port | Connection port (21 for FTP, 22 for SFTP) |
| public_html | Common directory for website files |
| Git Deployment | Push to Git → Automatic deployment |
| File Manager | Web-based file upload in hosting control panel |

---

## Reflection Questions

1. What is the difference between FTP and SFTP, and why should you use SFTP?
2. What are the key pieces of information you need to connect to an FTP server?
3. Why is it important to upload files to the correct directory?
4. What are the advantages of Git-based deployment over FTP?
5. What should you do after uploading files to verify your site is working?

---
