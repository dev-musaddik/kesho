import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document title and description meta tag for SEO.
 * @param {string} title - The title of the page.
 * @param {string} description - The meta description of the page.
 */
export const useDocumentMetadata = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);
};
export default useDocumentMetadata;
