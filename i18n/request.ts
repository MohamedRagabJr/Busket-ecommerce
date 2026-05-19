import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

const locales = ["en", "ar"] as const;
const namespaces = ["home", "about", "header"] as const;

export default getRequestConfig(async (arg: any) => {
  const resolvedLocale = await arg.requestLocale;
  const h = await headers();
  const raw = resolvedLocale || arg.locale || h.get("x-next-intl-locale") || "ar";
  const activeLocale = locales.includes(raw as any) ? (raw as (typeof locales)[number]) : "ar";
  console.log(`[next-intl DEBUG] resolvedLocale: ${resolvedLocale}, raw: ${raw}, activeLocale: ${activeLocale}`);

  const messages: Record<string, any> = {};

  await Promise.all(
    namespaces.map(async (ns) => {
      try {
        const mod = await import(`../messages/${activeLocale}/${ns}.json`);
        messages[ns] = mod.default;
        if (mod.default && typeof mod.default === "object") {
          Object.assign(messages, mod.default);
        }
      } catch (err) {
        // Ignore if file doesn't exist
      }
    })
  );

  try {
    const mainMod = await import(`../messages/${activeLocale}/${activeLocale}.json`);
    if (mainMod.default && typeof mainMod.default === "object") {
      Object.assign(messages, mainMod.default);
    }
  } catch (err) {
    // Ignore if file doesn't exist
  }

  return { locale: activeLocale, messages };
});
