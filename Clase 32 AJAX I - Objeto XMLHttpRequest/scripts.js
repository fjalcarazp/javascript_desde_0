/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.querySelector("#button");

button.addEventListener('click', () => {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else {
        // IE OLD VERSIONS
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // Abrimos la conexión.
    // Inicializa la solicitud/petición al servidor
    /*Se pondría la dirección donde esté nuestro archivo PHP*/
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    // Decirle al programa lo que tiene que hacer con los datos
    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
    
        const list = document.querySelector("#list");
    
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('li');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.append(listItem);
        }
    });

    // Enviamos la solititud/petición GET al servidor
    xhr.send();

})