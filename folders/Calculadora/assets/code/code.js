// const calculadora = () => {
//     return {
//         // Atributes
//         display: document.querySelector(".display"),

//         /////////////////

//         // METHODS

//         //inicia
//         start(){
//             this.btnClick();
//             this.pressEnter();
//         },

//         // captura os clicks
//         btnClick(){
//             document.addEventListener("click", (event) => {
//                 const element = event.target;

//                 if (element.classList.contains("btnNum")){
//                     this.btnToDisplay(element.innerText)
//                 }

//                 if (element.classList.contains("btnClear")){
//                     this.clearDisplay()
//                 }

//                 if (element.classList.contains("btnDel")){
//                     this.clearLast();
//                 }

//                 if (element.classList.contains("btnEq")){
//                     this.equals();
//                 }
//             });

//         },

//         //adiciona valor pressionado ao Display
//         btnToDisplay(value){
//             this.display.value += value;

//         },

//         //Limpa o display
//         clearDisplay(){
//             this.display.value = " ";
//         },
        
//         //apaga o ultimo
//         clearLast(){
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         equals(){
//             let operation = this.display.value;
            
//             try{
//                 operation = eval(operation);

//                 if (!operation) {
//                     alert("Invalido");
//                     this.display.value = "";
//                     return;
//                 };

//                 this.display.value = String(operation);
//             } catch (e) {
//                 alert("Invalido");
//                 this.display.value = " ";
//                 return;
//             }
//         },

//         pressEnter(){
//             this.display.addEventListener("keyup", event => {
//                 if(event.keyCode === 13){
//                     this.equals();
//                     console.log(this.equals)
//                 }
//             })    
//         }
// }}

// const novaCalculadora = calculadora();
// novaCalculadora.start()

const Calculadora = () => {
    return {
        // Atributes
        display: document.querySelector(".display"),

        /////////////////

        // METHODS

        //inicia
        start(){
            this.btnClick();
            this.pressEnter();
        },

        // captura os clicks
        btnClick(){
            document.addEventListener("click", (event) => {
                const element = event.target;

                if (element.classList.contains("btnNum")){
                    this.btnToDisplay(element.innerText)
                }

                if (element.classList.contains("btnClear")){
                    this.clearDisplay()
                }

                if (element.classList.contains("btnDel")){
                    this.clearLast();
                }

                if (element.classList.contains("btnEq")){
                    this.equals();
                }
            });

        },

        //adiciona valor pressionado ao Display
        btnToDisplay(value){
            this.display.value += value;
            this.display.focus();

        },

        //Limpa o display
        clearDisplay(){
            this.display.value = " ";
        },
        
        //apaga o ultimo
        clearLast(){
            this.display.value = this.display.value.slice(0, -1);
        },

        equals(){
            let operation = this.display.value;
            
            try{
                operation = eval(operation);

                if (!operation) {
                    alert("Invalido");
                    this.display.value = "";
                    return;
                };

                this.display.value = String(operation);
            } catch (e) {
                alert("Invalido");
                this.display.value = " ";
                return;
            }
        },

        pressEnter(){
            this.display.addEventListener("keyup", event => {
                if(event.keyCode === 13){
                    this.equals();
                    console.log(this.equals)
                }
            })    
        }
}}