/**
 * Goodwish Matyila
 * @year 2019
 * @copyright Free to use
 * @country South Africa
 * @software JavaScript
 */

self.addEventListener('message', (template)=>{
    /**
     * Import JavaScript export template data as string
     * @threading
     */
    importScripts(template.data + ".js");

    /**
     * Export implementation of the template output
     * @variable {templateOutput}
     */
this.postMessage(templateOutput);
});