/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en",
	locales: ["en", "es"],
	namespaces: [
		"homepage", 
		"about", 
		"expeditions",
		"gallery",
		"footer", 
		"common"],
	defaultNamespace: "common",
};
