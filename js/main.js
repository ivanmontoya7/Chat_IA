import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";
const initProgressCallback = (initProgress) => {
    console.log(initProgress);
}
/* https://github.com/mlc-ai/web-llm/blob/main/src/config.ts#L293 */
const selectedModel = "Hermes-2-Pro-Mistral-7B-q4f16_1-MLC";

const engine = await CreateMLCEngine(
    selectedModel,
    { initProgressCallback: initProgressCallback }, // engineConfig
);

async function respuesta_IA() {
    const messages = [
        { role: "system", content: "You speak spanish" },
        { role: "user", content: pregunta.value },
    ];
    const reply = await engine.chat.completions.create({
        messages,
    });
    console.log(reply.choices[0].message.content);
}

let boton = document.getElementById("enviar");
let pregunta = document.getElementById("pregunta");
let respuesta = document.getElementById("respuesta");

boton.addEventListener("click", respuesta_IA);






