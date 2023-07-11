"use client";
import React from "react";
import { useTranslations } from "next-intl";
function Product() {
  const t = useTranslations("Index");

  return (
    <>
      <section>
        <div><h1>ДУБ</h1></div>
        <div>
          <div>кратинка</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam.</div>
        </div>
        <div>
          <div>кратинка</div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, perferendis.</div>
        </div>
      </section>
      <section>
        <div><h1>Ясен</h1></div>
        <div>
          <div>кратинка</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, iusto?</div>
        </div>
        <div>
          <div>кратинка</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, accusamus!</div>
        </div>
      </section>
      <section>
        <div><h1>Береза</h1></div>
        <div>
          <div>кратинка</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, iusto?</div>
        </div>
        
      </section>
    </>
  );
}

export default Product;
