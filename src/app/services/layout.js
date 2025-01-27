import NavBar from "../components/NavBar";

export default function ServiceLayout({ children }) {
    
    return (
      <html lang="en">
        <body>
            {/* <NavBar/> */}
          {children}
        </body>
      </html>
    );
  }