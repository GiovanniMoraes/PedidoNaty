document.addEventListener("DOMContentLoaded", function() {
    const simBtn = document.getElementById("simBtn");
    const naoBtn = document.getElementById("naoBtn");
    const mensagem = document.getElementById("mensagem");

    simBtn.addEventListener("click", function() {
        mensagem.style.display = "block";
        const heartsContainer = document.querySelector('.hearts');

        // Função para criar corações
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.top = `-10vh`;
            heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
            heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração da animação entre 7s e 8s
            heart.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório de 0s a 2s
            heartsContainer.appendChild(heart);
        
        // Remover o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 8000); // Tempo de vida do coração (8 segundos)
    }

    // Chamar a função para criar corações a cada intervalo
    setInterval(createHeart, 800); // Cria um novo coração a cada 0.8 segundos
    });

    naoBtn.addEventListener("click", function() {
        naoBtn.style.position = "absolute";
        naoBtn.style.top = `${Math.random() * 80 + 10}%`;
        naoBtn.style.left = `${Math.random() * 80 + 10}%`;
    });
});

document.addEventListener("DOMContentLoaded", function(event) { 
    // const heartsContainer = document.querySelector('.hearts');

    // // Função para criar corações
    // function createHeart() {
    //     const heart = document.createElement('div');
    //     heart.classList.add('heart');
    //     heart.style.top = `-10vh`;
    //     heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    //     heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração da animação entre 7s e 8s
    //     heart.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório de 0s a 2s
    //     heartsContainer.appendChild(heart);
        
    //     // Remover o coração após a animação
    //     setTimeout(() => {
    //         heart.remove();
    //     }, 8000); // Tempo de vida do coração (8 segundos)
    // }

    // // Chamar a função para criar corações a cada intervalo
    // setInterval(createHeart, 800); // Cria um novo coração a cada 0.8 segundos
});

