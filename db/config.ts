import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const Contacto = defineTable({
  columns: {
    id: column.text(),
    name: column.text(),
    email: column.text(),
    phone: column.text()
  },
});
const Contact = defineTable({
  columns: {
    name: column.text(),
    email: column.text(),
    phone: column.text()
  },
});

export default defineDb({
  tables: { 
    Contact,
    Contacto,
  }
});
