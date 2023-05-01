import "react-toastify/dist/ReactToastify.css";
import { firaCode } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Raza Zaidi - Frontend Architect | Senior Javascript Developer",
  description:
    "razazaidisd.com | Senior Frontend Engineer specialized in Javascript, Typescript, React, Redux, RxJS, Next js, HTML, unit testing, React-testing-library, e2e testing, cypress, GitLab CI/CD, Circle CI Agile, Docker, Netlify, Webpack, Rollup, Jest, CSS, TailwindCSS, BEM, Sass, Less, styled-components, Jira, Vercel. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>{children}</body>
    </html>
  );
}
