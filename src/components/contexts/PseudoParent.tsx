"use client";
import React, { FC } from "react";
import axios from "axios";
import { PropsWithChildren, useEffect } from "react";

interface IProps {
  fullNameId: string;
}

const PseudoParent: FC<PropsWithChildren<IProps>> = ({
  fullNameId,
  children,
}) => {
  useEffect(() => {
    axios.post("/invite-seen", {
      fullNameId: fullNameId,
    });
  }, []);
  return <>{children}</>;
};

export default PseudoParent;
