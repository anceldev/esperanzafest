/* empty css                            */
import { k as createComponent, l as renderTemplate } from './astro/server_C0zuP6rZ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Datos = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import { Contact } from "astro:db";
import { db } from "astro:db";

const datos = await db.select().from(Contact)
console.log(datos)
---
<p>Hay {datos.length} datos </p>
<ul>
  {datos.map((data) => (
    <li>{data.name} - {data.email} - {data.phone}</li>
  ))

  }
</ul> -->`;
}, "/Users/anceldev/Projects/esperanzafest-landing/src/pages/datos.astro", void 0);

const $$file = "/Users/anceldev/Projects/esperanzafest-landing/src/pages/datos.astro";
const $$url = "/datos";

export { $$Datos as default, $$file as file, $$url as url };
