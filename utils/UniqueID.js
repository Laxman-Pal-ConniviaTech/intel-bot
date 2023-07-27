const  generateUniqueID = ()=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?';
    const charactersLength = characters.length;
    const idLength = 40;
  
    // Generate a timestamp to ensure uniqueness
    const timestamp = Date.now().toString(36);
  
    // Generate the random characters for the remaining part of the ID
    let randomChars = '';
    for (let i = 0; i < idLength - timestamp.length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      randomChars += characters.charAt(randomIndex);
    }
  
    // Combine the timestamp and random characters to form the unique ID
    const uniqueID = timestamp + randomChars;
  
    return uniqueID;
  }
  
  // Generate a unique 20-character ID
 module.exports = generateUniqueID;
  