/* empty css                            */
import { k as createComponent, l as renderTemplate, n as addAttribute, p as renderHead, t as renderSlot, o as createAstro, m as maybeRenderHead, q as renderComponent } from './astro/server_B1eNp-h8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="absolute mx-10 my-5"> <img src="../../public/logos/logo-esperanza-fest.webp" alt="logo" width="200"> <ul></ul> </nav>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white w-full h-screen bg-valladolid"> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="bg-darkBlue h-screen bg-opacity-70"> <h1 class="text-[150px] leading-[150px]">Esperanza</h1> <div class="flex flex-row"> <h1 class="text-gradient text-[150px] leading-[150px]">Fest</h1> </div> <p><b>06</b> Jun24</p> <a href="#Place">Plaza Zorrilla,<br>
Valladolid
</a> </div> </div>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Header.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white w-screen text-darkBlue pt-24"> <p class="text-center text-4xl pb-16 font-thin">
Bienvienido a Esperanza fest, un festival<br>social pensado para la familia<br>
Contaremos con un programa infantil,<br>
bailes, teatro, música, un concierto<br>
social y mucho más.
</p> <!-- <Vimeo id='952889402' class:list={\`w-[700px] m-auto mb-16\`}/> --> </div>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Welcome.astro", void 0);

const $$Speakers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-center text-5xl bg-white text-darkBlue font-bold pb-10">INVITADOS</h1> <div class="flex flex-row"> <img src="../../public/images/speaker1.png" alt="speaker1" class="w-1/5"> <img src="../../public/images/speaker2.png" alt="speaker2" class="w-1/5"> <img src="../../public/images/speaker3.png" alt="speaker3" class="w-1/5"> <img src="../../public/images/speaker4.png" alt="speaker4" class="w-1/5"> <img src="../../public/images/speaker5.png" alt="speaker5" class="w-1/5"> </div>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Speakers.astro", void 0);

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white"> <div class="flex flex-row mx-auto w-4/5 text-darkBlue py-24 border align-top"> <div class="flex flex-col w-2/5 space-y-6 border"> <h1 class="text-5xl font-bold text-start">
DARIO SCUOPPO Y EQUIPO
</h1> <p class="text-xl">
Explore new techniques, gain insights, and unleash your artistic
        potential
</p> <div> <a href="#more-info" class="rounded-2xl h-[20px] bg-btn-purple text-white px-6 py-4">Explore</a> </div> </div> <div class="flex w-3/5 mr-8 border m-24"> <img src="../../public/images/dario-photo.webp" alt="nestor ortega" class="rounded-3xl"> </div> </div> <div class="flex flex-row mx-auto w-4/5 text-darkBlue py-24"> <div class="flex ml-8"> <img src="../../public/images/nestor-photo.webp" alt="nestor ortega" class="rounded-3xl"> </div> <div class="space-y-6 w-2/5"> <h1 class="text-5xl font-bold text-start">
NESTOR ORTEGA, ARTISTA DE MÚSICA URBANA
</h1> <p class="text-xl">
Explore new techniques, gain insights, and unleash your artistic
        potential
</p> <div> <a href="#more-info" class="rounded-2xl h-[20px] bg-btn-purple text-white px-6 py-4">Explore</a> </div> </div> </div> </div>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Info.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-darkBlue px-auto py-24 text-center text-white space-y-6"> <h1 class="text-5xl font-bold">CELEBRA CON NOSOTROS</h1> <p class="text-lg font-thin">Gain value insight from succesfull entrepreneurs and industry experts at our Entrepreneur Summit</p> <a href="/contacto">Contacto</a> <p>Copyright 2024 Anceldev. Todos los derechos reservados</p> </footer>`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Esperanza Fest" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "Speakers", $$Speakers, {})} ${renderComponent($$result2, "Info", $$Info, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })} `;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/pages/index.astro", void 0);

const $$file = "/Users/anceldev/Projects/esperanzafest-landing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
