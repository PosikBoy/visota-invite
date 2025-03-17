"use client";

import invitationService from "@/services/invitation.service";
import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    axios.post("/invite-seen", {
      fullNameId: fullNameId,
    });
  }, []);
  return (
    <button onClick={handleClick} className={styles.formButton}>
      {isAccepted ? "Отказаться от приглашения" : "Принять приглашение"}
    </button>
  );
};

export default Button;
