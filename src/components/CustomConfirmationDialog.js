import React from 'react';
import PropTypes from 'prop-types';

import CustomHeading from './CustomHeading';
import CustomIconButton from './CustomIconButton';
import CustomRow from './CustomRow';
import ModalBtn from '../ModalBtn/ModalBtn';

const rowBreak = { marginTop: '18px' };

const CustomConfirmationDialog = ({
  isShowDialog,
  headingText,
  subHeadingText,
  assetName,
  onConfirmation,
}) => {
  const message = assetName ? `${headingText} ${assetName}?` : headingText;

  return (
    <ModalBtn isOpen={isShowDialog} btnText="" maskClosabl={false}>
      <CustomRow style={{ ...rowBreak }}>
        <CustomHeading headingText={message} subHeadingText={subHeadingText} />
      </CustomRow>
      <CustomRow style={{ ...rowBreak, textAlign: 'center' }}>
        <CustomIconButton
          btnText="Yes"
          btnStyle={{ marginRight: '20px' }}
          onClick={() => onConfirmation(true)}
        />
        <CustomIconButton
          btnText="No"
          btnStyle={{ backgroundColor: 'red', color: 'white' }}
          onClick={() => onConfirmation(false)}
        />
      </CustomRow>
    </ModalBtn>
  );
};

CustomConfirmationDialog.defaultProps = {
  isShowDialog: false,
  headingText: 'Are you sure you want to delete?',
  subHeadingText: 'Press "Yes" to continue, or "No" to cancel',
  assetName: '',
  onConfirmation: () => {},
};

CustomConfirmationDialog.propTypes = {
  isShowDialog: PropTypes.bool,
  headingText: PropTypes.string,
  subHeadingText: PropTypes.string,
  assetName: PropTypes.string,
  onConfirmation: PropTypes.func,
};

export default CustomConfirmationDialog;
