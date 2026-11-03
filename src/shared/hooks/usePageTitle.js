import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | CLC United Malacca`;
  }, [title]);
}
