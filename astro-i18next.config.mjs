/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en",
	locales: ["en", "es"],
	namespaces: [
		"homepage", 
		"about", 
		"expeditions",
		"footer", 
		"common"],
	defaultNamespace: "common",
};
