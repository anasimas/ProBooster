// Função básica para interatividade nos botões de compra
const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Você está sendo redirecionado para a página de pagamento.");
        // Aqui você pode redirecionar para uma página de pagamento ou fazer uma integração com a API de pagamento
    });
});
