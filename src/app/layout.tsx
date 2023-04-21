import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  title: "Raza Zaidi - Frontend Architect | Senior Javascript Developer",
  description:
    "Senior Frontend Engineer specialized in Javascript, Typescript, React, Redux, RxJS, Next js, HTML, unit testing, React-testing-library, e2e testing, cypress, GitLab CI/CD, Circle CI Agile, Docker, Netlify, Webpack, Rollup, Jest, CSS, TailwindCSS, BEM, Sass, Less, styled-components, Jira, Vercel. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
