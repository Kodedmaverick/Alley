// Resolves files in /public so the site also works when deployed under a sub-path.
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`;
