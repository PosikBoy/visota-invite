import Main from "@/components/screens/Main/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Приглашение на день рождения СПО «Высота»",
  description:
    "Мы — студенческий педагогический отряд «Высота». Вожатые. Команда. Друзья. Семья. Двигаемся #вместе_к_высотам с 2015 года.",

  openGraph: {
    locale: "ru",
    url: "/",
    title: "Приглашение на день рождения СПО «Высота»",
    description:
      "Мы — студенческий педагогический отряд «Высота». Вожатые. Команда. Друзья. Семья. Двигаемся #вместе_к_высотам с 2015 года.",
    siteName: "Приглашение на день рождения СПО «Высота»",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  // return <Main fullName="" isInvitationAccepted={false} />;
}
