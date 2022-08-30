import { FormInputLabel, Input, Group} from './form-input.style'
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
    <Input {...otherProps} />
      {label && (
        <FormInputLabel
        shrink={otherProps.value.lenght }
      /*     className={`${
            otherProps.value.lenght ? 'shrink' : ''
          } form-input-label`} */ // vecchio metodo per lo shrink senza i styled components
        >
          {label}
        </FormInputLabel>
      )}
      
    </Group>

    //className della label dinamica : se otherProps.value.lenght exists allora assegno alla classe il nome 'shrink' altrimenti '' + form-input-label
  );
};

export default FormInput;
