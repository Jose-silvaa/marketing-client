import "../login/login.css"


export const metadata = {
    title: 'Login',
    description: 'D',
    keywords: 'Next.js, javascript, Login',
    author: 'José Vitor',
  };
  

  //Inside Header, component menu
  export default function RootLayout({ children }) {
    return (
      <html lang="pt-BR">
        <head>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />
        </head>
        <body>
          <header>
        
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }