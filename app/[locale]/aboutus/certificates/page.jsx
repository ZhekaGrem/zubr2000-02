"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Certificates from "@/app/page/Certificates";

function CertificatesPage() {
  const t = useTranslations("Index");

  return (
    <>
      <PageIntro caps="2.1" title={t("certificates")} />
      <Certificates />
    </>
  );
}

export default CertificatesPage;
