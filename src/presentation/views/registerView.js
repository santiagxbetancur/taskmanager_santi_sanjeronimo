/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear cuenta</h1>
                    <p>Regístrate para comenzar</p>
                </header>

                <form id="register-form" class="auth-form">

                    
                    <label for="institucion">elige tu institucion:</label>
                  
                      
                    <select id="institucion" name="institucion" class = auth-form>
                      
                      <option value = "elige tu institucion"> Elige tu institucion</option>
                      <option value = "I.E San jeronimo"> I.E San Jeronimo</option>
                       <option value = "I.E San Lorenzo"> I.E San Lorenzo</option>
                       <option value = "I.E San Jose" > I.E San Jose</option>
                    </select>
                
                <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                        >
                    </div>
                         
                     
                   

                    <label for="tipodeusuario">elige un tipo de usuario:</label>

                      <select id="tipodeusuario" name="tipodeusuario">
                      
                      <option value = "elige tu tipo de usuario"> elige tu tipo de usuario</option>
                      <option value = "profesor"> profesor</option>
                       <option value = "Estudiante"> Estudiante</option>
                       <option value = "trabajador"> trabajador</option>
                       
                       </select>
                     
                    
                  <label for="genero"> 
                  elige tu genero:</label>

                      <select id="genero" name="genero">
                      
                      <option value = "Elige tu genero"> Elige tu genero</option>
                      <option value = "Masculino"> Masculino</option>
                       <option value = "Femenino"> Femenino</option>
                       </select>
                
                   
                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                <div class = "form-group">
                    <label for = "register-activo"> 
                      <input 
                       type = "checkbox"
                       id = "register-activo"
                       name: "activo"
                       value ="activo"
                       checked
                       >
                      activo
                    </label>
                </div>  

                    <button
                        type="submit"
                        class="button button-primary"
                    >
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            activo : formData.get("activo"),
            institucion: formData.get("institucion"),
            name: formData.get("name"),
            tipodeusuario: formData.get("tipodeusuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password")
            
        };
debugger;
        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}