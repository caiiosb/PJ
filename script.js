
        document.getElementById('cadastroForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            const senha = document.getElementById('senha');
            const confirmarSenha = document.getElementById('confirmarSenha');
            const senhaError = document.getElementById('senhaError');
            const confirmarSenhaError = document.getElementById('confirmarSenhaError');
            let hasError = false;

            // Validação de senha mínima
            if (senha.value.length < 8) {
                senhaError.style.display = 'block';
                hasError = true;
            } else {
                senhaError.style.display = 'none';
            }

            // Validação de confirmação de senha
            if (senha.value !== confirmarSenha.value) {
                confirmarSenhaError.style.display = 'block';
                hasError = true;
            } else {
                confirmarSenhaError.style.display = 'none';
            }
            alert('Formulário enviado com sucesso!');
            if (!hasError) {
                
                window.location.href = 'home.html'; // Redireciona para a página de login
            }
            
        });
    