import React from 'react';

function Googlmap() {
  return (
    <div>
      <iframe
        title='Zubr-2000 googl map'
        // eslint-disable-next-line max-len
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.65071898615327!2d24.026000169959726!3d49.83852247630111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e2dfcebe5%3A0xeef81c2c400ff5b4!2z0LLRg9C70LjRhtGPINCa0L7Qv9C10YDQvdC40LrQsCwgMjAsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1690553981355!5m2!1sru!2sua'
        width='100%'
        height='450'
        style={{ border: '0' }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}

export default Googlmap;
