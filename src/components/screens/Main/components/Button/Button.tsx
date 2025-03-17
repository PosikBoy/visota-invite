"use client";

import invitationService from "@/services/invitation.service";
import styles from "./Button.module.scss";
import { useState } from "react";

const Button = ({
  fullNameId,
  isInvitationAccepted,
}: {
  fullNameId: string;
  isInvitationAccepted: boolean;
}) => {
  const [isAccepted, setIsAccepted] = useState(isInvitationAccepted);
  const handleClick = async () => {
    if (isAccepted) {
      await invitationService.denyInvitation(fullNameId);
      setIsAccepted(false);
    } else {
      await invitationService.acceptInvitation(fullNameId);
      setIsAccepted(true);
    }
  };
  console.log(" sadcd", isInvitationAccepted, isAccepted);

  return (
    <button onClick={handleClick} className={styles.formButton}>
      {isAccepted ? "Отказаться от приглашения" : "Принять приглашение"}
    </button>
  );
};

export default Button;
