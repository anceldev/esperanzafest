/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_V1Pulsje.mjs';
import 'kleur/colors';
import 'clsx';
import { d as db, C as Contact } from '../chunks/_astro_db_CVOtR-TF.mjs';
export { renderers } from '../renderers.mjs';

const $$Datos = createComponent(async ($$result, $$props, $$slots) => {
  const datos = await db.select().from(Contact);
  console.log(datos);
  return renderTemplate`${maybeRenderHead()}<p>Hay ${datos.length} datos </p> <ul> ${datos.map((data) => renderTemplate`<li>${data.name} - ${data.email} - ${data.phone}</li>`)} </ul>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/pages/datos.astro", void 0);

const $$file = "/Users/anceldev/web-projects/esperanzafest/src/pages/datos.astro";
const $$url = "/datos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
