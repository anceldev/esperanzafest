import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_V1Pulsje.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-passire px-auto py-24 text-center text-white space-y-6"> <h1 class="text-3xl font-bold">CELEBRA CON NOSOTROS</h1> <p class="text-lg font-thin"></p> <!-- <a href="/contacto">Contacto</a> --> <p>Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} <span class="font-bold">Andev Development</span>. Todos los derechos reservados</p> </footer>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta http-equiv="Content-Language" content="es"><meta name="description" content="Esperanza fest festival para la familia"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/anceldev/web-projects/esperanzafest/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Footer as a };
