import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://esperanzafest-anceldev.aws-eu-west-1.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Contact = asDrizzleTable("Contact", { "columns": { "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Contact", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "Contact", "primaryKey": false, "optional": false } }, "phone": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "phone", "collection": "Contact", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

export { Contact as C, db as d };
