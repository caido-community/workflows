import { type HttpInput, type SDK, type Data } from "caido:workflow";

/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run(
  input: HttpInput,
  sdk: SDK
): Promise<Data | undefined> {
  const { request: e } = input;
  if (e === undefined) return undefined;

  // --- Define all SUS parameter categories ---
  const PARAM_GROUPS = {
    CMDI: [
      "execute",
      "dir",
      "daemon",
      "cli",
      "log",
      "cmd",
      "download",
      "ip",
      "upload",
      "message",
      "input_file",
      "format",
      "expression",
      "data",
      "bsh",
      "bash",
      "shell",
      "command",
      "range",
      "sort",
      "host",
      "exec",
      "code",
    ],
    DEBUG: [
      "test",
      "reset",
      "config",
      "shell",
      "admin",
      "exec",
      "load",
      "cfg",
      "dbg",
      "edit",
      "root",
      "create",
      "access",
      "disable",
      "alter",
      "make",
      "grant",
      "adm",
      "toggle",
      "execute",
      "clone",
      "delete",
      "enable",
      "rename",
      "debug",
      "modify",
      "stacktrace",
    ],
    FILEINC: [
      "root",
      "directory",
      "path",
      "style",
      "folder",
      "default-language",
      "url",
      "platform",
      "textdomain",
      "document",
      "template",
      "pg",
      "php_path",
      "doc",
      "type",
      "lang",
      "token",
      "name",
      "pdf",
      "file",
      "etc",
      "api",
      "app",
      "resource-type",
      "controller",
      "filename",
      "page",
      "f",
      "view",
      "input_file",
    ],
    IDOR: [
      "count",
      "key",
      "user",
      "id",
      "extended_data",
      "uid2",
      "group",
      "team_id",
      "data-id",
      "no",
      "username",
      "email",
      "account",
      "doc",
      "uuid",
      "profile",
      "number",
      "user_id",
      "edit",
      "report",
      "order",
    ],
    OPENREDIRECT: [
      "u",
      "redirect_uri",
      "failed",
      "r",
      "referer",
      "return_url",
      "redirect_url",
      "prejoin_data",
      "continue",
      "redir",
      "return_to",
      "origin",
      "redirect_to",
      "next",
    ],
    SQLI: [
      "process",
      "string",
      "id",
      "referer",
      "password",
      "pwd",
      "field",
      "view",
      "sleep",
      "column",
      "log",
      "token",
      "sel",
      "select",
      "sort",
      "from",
      "search",
      "update",
      "pub_group_id",
      "row",
      "results",
      "role",
      "table",
      "multi_layer_map_list",
      "order",
      "filter",
      "params",
      "user",
      "fetch",
      "limit",
      "keyword",
      "email",
      "query",
      "c",
      "name",
      "where",
      "number",
      "phone_number",
      "delete",
      "report",
      "q",
      "sql",
    ],
    SSRF: [
      "sector_identifier_uri",
      "request_uris",
      "logo_uri",
      "jwks_uri",
      "start",
      "path",
      "domain",
      "source",
      "url",
      "site",
      "view",
      "template",
      "page",
      "show",
      "val",
      "dest",
      "metadata",
      "out",
      "feed",
      "navigation",
      "image_host",
      "uri",
      "next",
      "continue",
      "host",
      "window",
      "dir",
      "reference",
      "filename",
      "html",
      "to",
      "return",
      "open",
      "port",
      "stop",
      "validate",
      "resturl",
      "callback",
      "name",
      "data",
      "ip",
      "redirect",
      "target",
      "referer",
    ],
    SSTI: [
      "preview",
      "activity",
      "id",
      "name",
      "content",
      "view",
      "template",
      "redirect",
    ],
    XSS: [
      "path",
      "admin",
      "class",
      "atb",
      "redirect_uri",
      "other",
      "utm_source",
      "currency",
      "dir",
      "title",
      "endpoint",
      "return_url",
      "users",
      "cookie",
      "state",
      "callback",
      "militarybranch",
      "e",
      "referer",
      "password",
      "author",
      "body",
      "status",
      "utm_campaign",
      "value",
      "text",
      "search",
      "flaw",
      "vote",
      "pathname",
      "params",
      "user",
      "t",
      "utm_medium",
      "q",
      "email",
      "what",
      "file",
      "data-original",
      "description",
      "subject",
      "action",
      "u",
      "nickname",
      "color",
      "language_id",
      "auth",
      "samlresponse",
      "return",
      "readyfunction",
      "where",
      "tags",
      "cvo_sid1",
      "target",
      "format",
      "back",
      "term",
      "r",
      "id",
      "url",
      "view",
      "username",
      "sequel",
      "type",
      "city",
      "src",
      "p",
      "label",
      "ctx",
      "style",
      "html",
      "ad_type",
      "s",
      "issues",
      "query",
      "c",
      "shop",
      "redirect",
      "page",
      "prefv1",
      "destination",
      "mode",
      "data",
      "error",
      "editor",
      "wysiwyg",
      "widget",
      "msg",
    ],
    MASSASSIGNMENT: [
      "user",
      "profile",
      "role",
      "settings",
      "data",
      "attributes",
      "post",
      "comment",
      "order",
      "product",
      "form_fields",
      "request",
    ],
  };

  // --- Friendly English names for each group ---
  const GROUP_DESCRIPTIONS = {
    CMDI: "Command Injection",
    DEBUG: "Debug or Admin Parameters",
    FILEINC: "File Inclusion",
    IDOR: "Insecure Direct Object Reference (IDOR)",
    OPENREDIRECT: "Open Redirect",
    SQLI: "SQL Injection",
    SSRF: "Server-Side Request Forgery (SSRF)",
    SSTI: "Server-Side Template Injection (SSTI)",
    XSS: "Cross-Site Scripting (XSS)",
    MASSASSIGNMENT: "Mass Assignment / Overposting",
  };

  // --- Build lowercase lookup table ---
  const PARAM_LOOKUP = new Map<string, string>();
  for (const [cat, list] of Object.entries(PARAM_GROUPS)) {
    for (const p of list) PARAM_LOOKUP.set(p.toLowerCase(), cat);
  }

  const found: Record<string, Map<string, Set<string>>> = {};

  const record = (paramName: string, location: string) => {
    const lower = paramName.toLowerCase();
    const cat = PARAM_LOOKUP.get(lower);
    if (cat === undefined) return;
    if (found[cat] === undefined) found[cat] = new Map();
    if (!found[cat].has(lower)) found[cat].set(lower, new Set());
    found[cat].get(lower)?.add(location);
  };

  // --- Query params ---
  try {
    const usp = new URLSearchParams(e.getQuery() || "");
    for (const key of usp.keys()) if (key) record(key, "query");
  } catch (_) {}

  // --- Body params ---
  try {
    try {
      const body = e.getBody();
      if (body !== undefined) {
        const jsonBody = body.toJson();
        if (jsonBody && typeof jsonBody === "object") {
          for (const k in jsonBody) record(k, "body.json");
        }
      }
    } catch {
      const body = e.getBody();
      if (body !== undefined) {
        const txt = body.toText() || "";
        if (txt.includes("=")) {
          const usp2 = new URLSearchParams(txt);
          for (const key of usp2.keys()) record(key, "body.form");
        }
      }
    }
  } catch (_) {}

  // --- Create grouped findings ---
  const host = e.getHost ? e.getHost() : "unknown";
  const path = e.getPath ? e.getPath() : "";

  for (const [cat, paramMap] of Object.entries(found)) {
    const friendly =
      GROUP_DESCRIPTIONS[cat as keyof typeof GROUP_DESCRIPTIONS] || cat;
    const params = Array.from(paramMap.keys()).sort();
    const dedupe = `${host}|${path}|${cat}|${params.join(",")}`;

    let description = `The request to **${host}${path}** contains parameters commonly associated with **${friendly}** issues.\n\n`;
    description += `**Matched Parameters:**\n`;
    for (const [p, locs] of paramMap.entries()) {
      description += `- ${p} (locations: ${Array.from(locs).join(", ")})\n`;
    }
    description += `\nSource list: GAP "Sus" Parameters (by @jhaddix, @G0LDEN_infosec, and @ryancbarnett) 🤘\n`;

    await sdk.findings.create({
      title: `GAP "Sus" Params [${cat}]: ${params.join(", ")}`,
      description,
      request: e,
      reporter: 'GAP "Sus" Params 🤘',
      dedupeKey: dedupe,
    });
  }

  return undefined;
}
