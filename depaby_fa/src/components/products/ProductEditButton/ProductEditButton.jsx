import { faPen } from '@fortawesome/free-solid-svg-icons';

import WindowForm from '../../WindowForm/WindowForm';

function ProductEditButton() {
  return (
      <WindowForm
          button_title='Изменение полей продукта через форму'
          button_icon={faPen}
          window_title="Форма изменения полей продукта"
          html={ProductUpdate}
      />
  );
}

function ProductUpdate() {
  return (
    <div>qqq</div>
  );
}

export default ProductEditButton;
