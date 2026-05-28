# Gemini Prompt Architecte


[🇫🇷 Version Française](#-version-française) | [🇬🇧 English Version](#-english-version)

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Runtime](https://img.shields.io/badge/Google%20Apps%20Script-V8-green)
![Author](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

## 🇫🇷 Version Française


[Français](#français) | [English](#english)

---

## <a name="français"></a>🇫🇷 Français

### Description
**Gemini Prompt Architecte** est une application web hébergée sur Google Apps Script conçue pour faciliter la création de prompts structurés pour les Grands Modèles de Langage (LLM) comme Google Gemini.

L'outil offre une interface graphique intuitive pour définir les paramètres clés d'un prompt (rôle, mission, contexte, ton, format) et génère automatiquement un objet JSON optimisé, prêt à être utilisé dans des pipelines d'IA ou copié dans une fenêtre de chat. Il permet également d'archiver ces prompts directement dans le Google Drive de l'utilisateur.

### Fonctionnalités Clés
* **Interface Intuitive :** Formulaire structuré avec des champs dédiés (Rôle, Tâche, Contexte, Données d'entrée).
* **Prévisualisation JSON Temps Réel :** Visualisation immédiate de la structure de données générée avec coloration syntaxique.
* **Configuration Avancée :** Sélection du ton (Professionnel, Didactique, etc.) et du format de sortie (Markdown, JSON, Tableau, etc.).
* **Sauvegarde Cloud :** Enregistrement direct du fichier JSON généré à la racine du Google Drive de l'utilisateur.
* **Presse-papier :** Copie rapide du résultat JSON en un clic.
* **Stack Technique :** Google Apps Script (Backend), HTML5/Tailwind CSS (Frontend).

### Installation et Déploiement

1.  **Créer le projet :**
    * Allez sur [script.google.com](https://script.google.com/).
    * Créez un nouveau projet nommé "Gemini Prompt Architecte".

2.  **Ajouter les fichiers :**
    * Créez un fichier `Code.gs` et collez-y le contenu du script backend.
    * Créez un fichier `Index.html` et collez-y le code HTML/CSS/JS fourni.

3.  **Déployer l'application Web :**
    * Cliquez sur le bouton **Déployer** > **Nouveau déploiement**.
    * Sélectionnez le type **Application Web**.
    * **Exécuter en tant que :** `Moi` (votre compte).
    * **Personnes autorisées à accéder :** `Moi uniquement` ou `Toute personne disposant d'un compte Google` (selon vos besoins).
    * Cliquez sur **Déployer**.

4.  **Autorisations :**
    * Lors de la première utilisation ou sauvegarde, acceptez les demandes d'autorisation pour permettre au script d'accéder à votre Google Drive (`DriveApp`).

### Structure du Projet
* `Code.gs` : Gère le service du fichier HTML (`doGet`) et la logique de sauvegarde sur Drive (`saveToDrive`).
* `Index.html` : Contient l'interface utilisateur (Tailwind CSS via CDN) et la logique client (JavaScript) pour la construction du JSON.

---

## <a name="english"></a>🇬🇧 English

### Description
**Gemini Prompt Architect** is a web application hosted on Google Apps Script designed to streamline the creation of structured prompts for Large Language Models (LLMs) like Google Gemini.

The tool provides an intuitive graphical interface to define key prompt parameters (role, task, context, tone, format) and automatically generates an optimized JSON object, ready for AI pipelines or direct chat usage. It also allows archiving these prompts directly to the user's Google Drive.

### Key Features
* **Intuitive Interface:** Structured form with dedicated fields (Role, Task, Context, Input Data).
* **Real-time JSON Preview:** Immediate visualization of the generated data structure with syntax highlighting.
* **Advanced Configuration:** Selectable tone (Professional, Didactic, etc.) and output format (Markdown, JSON, Table, etc.).
* **Cloud Backup:** Direct saving of the generated JSON file to the root of the user's Google Drive.
* **Clipboard Integration:** One-click copy of the JSON result.
* **Tech Stack:** Google Apps Script (Backend), HTML5/Tailwind CSS (Frontend).

### Installation and Deployment

1.  **Create the Project:**
    * Go to [script.google.com](https://script.google.com/).
    * Create a new project named "Gemini Prompt Architect".

2.  **Add Files:**
    * Create a file named `Code.gs` and paste the backend script content.
    * Create a file named `Index.html` and paste the provided HTML/CSS/JS code.

3.  **Deploy Web App:**
    * Click the **Deploy** button > **New deployment**.
    * Select type **Web App**.
    * **Execute as:** `Me` (your account).
    * **Who has access:** `Only myself` or `Anyone with a Google Account` (depending on your needs).
    * Click **Deploy**.

4.  **Permissions:**
    * Upon first use or saving, accept the permission requests to allow the script to access your Google Drive (`DriveApp`).

### Project Structure
* `Code.gs`: Handles serving the HTML file (`doGet`) and the Drive saving logic (`saveToDrive`).
* `Index.html`: Contains the user interface (Tailwind CSS via CDN) and client-side logic (JavaScript) for JSON construction.

---
*Auteur / Author : Fabrice Faucheux*


---
## 🇬🇧 English Version

> English translation coming soon.

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>