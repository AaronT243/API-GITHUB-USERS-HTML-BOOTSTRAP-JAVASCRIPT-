btn.onclick = () => {
    // on accede a l'api des users de github
    fetch("https://api.github.com/users/" + champ.value)
    // on modifie le retour des promises en fichier json
    .then(Response => Response.json())
    // on gere l'affichage de données json (output)
    .then(data =>{
        output.textContent = "";
        output.textContent = `compte de ${data.name}`;
        // on lui crée une image de chaque utilisateur trouvé
        const img = document.createElement("img");
        // le lien de l'image dans le fichier json
        img.src = data.avatar_url;
        // un petit CSS sympa
        img.width = "100";
        output.appendChild(img);
    })
}