import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderHead, t as renderSlot, o as createAstro } from './astro/server_C0zuP6rZ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-darkBlue px-auto py-24 text-center text-white space-y-6"> <h1 class="text-5xl font-bold">CELEBRA CON NOSOTROS</h1> <p class="text-lg font-thin">Gain value insight from succesfull entrepreneurs and industry experts at our Entrepreneur Summit</p> <a href="/contacto">Contacto</a> <p>Copyright 2024 Anceldev. Todos los derechos reservados</p> </footer>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta http-equiv="Content-Language" content="es"><meta name="description" content="Esperanza fest festival para la familia"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/layouts/Layout.astro", void 0);

export { $$Footer as $, $$Layout as a };
