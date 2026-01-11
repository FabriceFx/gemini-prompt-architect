/**
 * @fileoverview Backend de la Web App "Gemini Prompt Architecte".
 * @author Fabrice Faucheux
 */

/**
 * Fonction spéciale déclenchée quand un utilisateur visite l'URL de la Web App.
 * Sert le fichier HTML.
 */
function doGet() {
  // Attention : Assurez-vous que votre fichier HTML se nomme bien "index.html"
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Gemini Prompt Architecte') // Titre de l'onglet navigateur
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Fonction appelée par le côté client (index.html) pour sauvegarder le JSON dans Drive.
 * @param {string} filename - Le nom du fichier généré.
 * @param {string} content - Le contenu JSON ou Texte.
 * @return {object} - Le résultat de l'opération pour le feedback client.
 */
function saveToDrive(filename, content) {
  try {
    // Création du fichier à la racine du Drive de l'utilisateur
    // Note : On pourrait spécifier un ID de dossier ici si nécessaire (ex: DriveApp.getFolderById("..."))
    const file = DriveApp.createFile(filename + ".json", content, MimeType.PLAIN_TEXT);
    
    // Retourne un objet succès au javascript côté client
    return { 
      success: true, 
      url: file.getUrl(), 
      name: file.getName() 
    };
    
  } catch (e) {
    // En cas d'erreur (ex: quota dépassé, permissions), on renvoie l'erreur
    return { 
      success: false, 
      error: e.toString() 
    };
  }
}

/**
 * Utilitaire d'inclusion (Optionnel, gardé si vous séparez le CSS/JS plus tard)
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
