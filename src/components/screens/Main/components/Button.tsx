"use client";

import { useState } from "react";
import invitationService from "@/services/invitation.service";
import styles from "../Main.module.scss";

interface AcceptButtonProps {
  fullName: string;
  fullNameId: string;
  isInvitationAccepted: boolean;
}

const AcceptButton = ({
  fullName,
  fullNameId,
  isInvitationAccepted,
}: AcceptButtonProps) => {
  const [isAccepted, setIsAccepted] = useState(isInvitationAccepted);
  const [isSuccess, setIsSuccess] = useState("");

  const acceptInvitation = async () => {
    try {
      const result = await invitationService.acceptInvitation(fullNameId);
      if (result?.message === "Приглашение успешно принято") {
        setIsSuccess(`Спасибо за ответ, ${fullName}, мы будем тебя ждать!`);
        setIsAccepted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const denyInvitation = async () => {
    try {
      const result = await invitationService.denyInvitation(fullNameId);
      console.log(result?.message == "Приглашение успешно отказано");
      if (result?.message == "Приглашение успешно отказано") {
        setIsSuccess(
          `Грустно, что так получается. Если все-таки сможешь - заходи сюда заново и отмечайся, спасибо!`
        );

        setIsAccepted(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isSuccess && <p className={styles.successMessage}>{isSuccess}</p>}
      {!isSuccess && (
        <button
          className={styles.fifthBlockButton}
          onClick={isAccepted ? denyInvitation : acceptInvitation}
        >
          {isAccepted ? "Всё-таки, не смогу прийти" : "Я приду!"}
        </button>
      )}
    </>
  );
};

export default AcceptButton;
