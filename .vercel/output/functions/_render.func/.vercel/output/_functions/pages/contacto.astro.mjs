/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as createAstro, a as renderComponent, d as addAttribute, e as renderHead } from '../chunks/astro/server_V1Pulsje.mjs';
import 'kleur/colors';
import { d as db, C as Contact } from '../chunks/_astro_db_CVOtR-TF.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Cross = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" viewBox="0 0 256 256"> <path fill="currentColor" d="M216 92v24a16 16 0 0 1-16 16h-44v92a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-92H56a16 16 0 0 1-16-16V92a16 16 0 0 1 16-16h44V32a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v44h44a16 16 0 0 1 16 16"></path> </svg>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/icons/Cross.astro", void 0);

const $$Divide = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" viewBox="0 0 448 512"> <path fill="currentColor" d="M272 96a48 48 0 1 0-96 0a48 48 0 1 0 96 0m0 320a48 48 0 1 0-96 0a48 48 0 1 0 96 0m128-128c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path> </svg>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/icons/Divide.astro", void 0);

const $$Heart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" viewBox="0 0 24 24"> <path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path> </svg>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/icons/Heart.astro", void 0);

const $$Question = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" viewBox="0 0 20 20"> <g fill="currentColor"> <path d="M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path> <path fill-rule="evenodd" d="M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"></path> <path fill-rule="evenodd" d="M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"></path> <path fill-rule="evenodd" d="M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"></path> </g> </svg>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/icons/Question.astro", void 0);

const $$Submited = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center align-middle items-center w-[300px] text-white space-y-10"> <h1 class="text-4xl font-bold leading-[4rem]">
¡Gracias!
</h1> <p class="text-2xl text-center">
Tus datos se han enviado correctamente, pronto nos pondremos en contacto contigo.<br>
¡Dios te bendiga!
</p> <a href="/contacto" class="text-vibrantOrange text-xl font-semibold underline">Volver al formulario</a> </div>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/Submited.astro", void 0);

const $$Astro$1 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  var sended = false;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    console.log(name);
    if (typeof name === "string" && typeof email === "string" && typeof phone === "string") {
      console.log("writing data");
      const response = await db.insert(Contact).values({ name, email, phone });
      if (response.rowsAffected == 1) {
        console.log("Dato a\xF1adido");
        sended = true;
      }
    }
  }
  return renderTemplate`<!-- <div class="flex flex-col justify-between align-middle items-center w-[300px] h-screen"> -->${maybeRenderHead()}<div class="flex flex-col align-middle items-center w-[300px] h-screen mt-8" data-astro-cid-346426y5> ${sended ? renderTemplate`${renderComponent($$result, "Submited", $$Submited, { "data-astro-cid-346426y5": true })}` : renderTemplate`<div class="flex flex-col gap-y-4" data-astro-cid-346426y5> <h1 class="text-4xl font-bold leading-[4rem] text-white" data-astro-cid-346426y5>¿QUIERO CONOCER A<br data-astro-cid-346426y5>JESÚS!</h1> <form method="POST" class="flex flex-col w-full" data-astro-cid-346426y5> <label for="name" class="mt-4 mb-2 text-white" data-astro-cid-346426y5>Nombre<span class="text-vibrantOrange" data-astro-cid-346426y5>*</span></label> <input id="name" name="name" class="rounded-lg h-10 drop-shadow-lg text-slate-900 pl-2" required data-astro-cid-346426y5> <label for="email" class="mt-4 mb-2 text-white" data-astro-cid-346426y5>Correo electrónico<span class="text-vibrantOrange" data-astro-cid-346426y5>*</span></label> <input id="email" name="email" class="rounded-lg h-10 drop-shadow-lg text-slate-900 pl-2" required data-astro-cid-346426y5> <label for="phone" class="mt-4 mb-2 text-white" data-astro-cid-346426y5>Teléfono<span class="text-vibrantOrange" data-astro-cid-346426y5>*</span></label> <input id="phone" name="phone" class="rounded-lg h-10 drop-shadow-lg text-slate-900 pl-2" pattern="[679][0-9]{8}" required data-astro-cid-346426y5> <div class="flex flex-row mt-10 ml-2" data-astro-cid-346426y5> <input type="checkbox" id="conditions" required data-astro-cid-346426y5> <p class="text-white ml-2" data-astro-cid-346426y5>Acepto la política de privacidad</p> </div> <div class="flex justify-start mt-5" data-astro-cid-346426y5> <button type="submit" class="w-full rounded-lg bg-vibrantOrange text-white px-6 py-2" data-astro-cid-346426y5>Enviar</button> </div> <ul class="space-y-3 mt-8 text-white w-full" data-astro-cid-346426y5> <li class="flex items-center gap-3" data-astro-cid-346426y5> ${renderComponent($$result, "Heart", $$Heart, { "data-astro-cid-346426y5": true })} <p data-astro-cid-346426y5>DIOS ME AMA</p> </li> <li class="flex items-center gap-3" data-astro-cid-346426y5> ${renderComponent($$result, "Divide", $$Divide, { "data-astro-cid-346426y5": true })} <p data-astro-cid-346426y5>HE PECADO</p> </li> <li class="flex items-center gap-3" data-astro-cid-346426y5> ${renderComponent($$result, "Cross", $$Cross, { "data-astro-cid-346426y5": true })} <p data-astro-cid-346426y5>JESÚS MURIÓ POR MI</p> </li> <li class="flex items-center gap-3" data-astro-cid-346426y5> ${renderComponent($$result, "Question", $$Question, { "data-astro-cid-346426y5": true })} <p class="drop-shadow-lg" data-astro-cid-346426y5>DEBO TOMAR UNA DECISIÓN</p> </li> </ul> </form> </div>`} </div> `;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/Form.astro", void 0);

const $$Astro = createAstro();
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Contacto</title>${renderHead()}</head> <body class="bg-form backdrop-blur-2xl h-screen w-screen"> <div class="flex flex-col items-center mx-4 pt-8"> ${renderComponent($$result, "Form", $$Form, {})} </div> <footer class="flex justify-center pb-12 text-white"> <a href="/privacity" class="text-yellow-200 font-semibold drop-shadow underline">Política de privacidad</a> </footer> </body></html>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/pages/contacto.astro", void 0);

const $$file = "/Users/anceldev/web-projects/esperanzafest/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
