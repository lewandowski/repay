import type { RichTextAdapter } from "payload/types";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import path from "path";
import Users from "./cms/collections/Users";
import Media from "./cms/collections/Media";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}) as RichTextAdapter,
  db: mongooseAdapter({
    url: process.env.MONGO_URL ?? false,
    connectOptions: {
      dbName: process.env.MONGO_DBNAME,
    },
  }),
  collections: [
    Users,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "cms/payload-types.ts"),
  },
});
