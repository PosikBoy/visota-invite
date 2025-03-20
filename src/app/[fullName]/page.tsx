import PseudoParent from "@/components/contexts/PseudoParent";
import Main from "@/components/screens/Main/Main";
import axios from "axios";
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

interface IResponse {
  full_name_id: string;
  full_name: string;
  is_invitation_accepted: boolean;
}

export default async function Home({
  params,
}: {
  params: Promise<{ fullName: string }>;
}) {
  const { fullName } = await params;

  const user = await axios.get<IResponse>(
    `http://localhost:3000/api/user/${fullName}`
  );

  return (
    <PseudoParent fullNameId={fullName}>
      <Main
        fullNameId={user.data.full_name_id}
        fullName={user.data.full_name}
        isInvitationAccepted={user.data.is_invitation_accepted}
      />
    </PseudoParent>
  );
}
