// app/layout.js
export const metadata = {
  title: 'E-Commerce Store | Discover Our Products',
  description: 'Browse our wide selection of products across various categories',
  openGraph: {
    title: 'E-Commerce Store',
    description: 'Discover our premium product collection',
    images: '/og-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}